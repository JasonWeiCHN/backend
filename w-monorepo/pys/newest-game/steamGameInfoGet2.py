import json
import os
import time
import asyncio
import httpx

from datetime import datetime

# l=schinese 简体中文 l=tchinese 繁体中文 l=japanese 日语
DETAIL_URL = "http://store.steampowered.com/api/appdetails/?appids={0}&cc=cn&l=schinese"
OUTPUT_FOLDER = r"F:/biliGet/newest-game"  # 修改为你的输出目录
# 全局开关
DOWNLOAD_SCREENSHOTS = True
DOWNLOAD_MOVIES = True
APP_ID = 601150

lastTime = time.time()
waitTime = 5 * 60.0 / 195

async def download_file_url(url: str, out: str, info: str, timeout: int = 60):
     async with httpx.AsyncClient(timeout=httpx.Timeout(timeout)) as sess:
        resp = await sess.get(url)
        length = resp.headers.get('content-length')
        with open(out, 'wb') as f:
            process = 0
            for chunk in resp.iter_bytes(1024):
                if not chunk:
                    break

                process += len(chunk)
                print(f'下载 {info} {process} / {length}')
                f.write(chunk)

async def send_steam_req(url):
    global lastTime
    global waitTime
    retryTimes = 3  # 重试次数
    result = None

    while retryTimes > 0:
        try:
            async with httpx.AsyncClient(follow_redirects=True) as client:
                response = await client.get(url)
                response.raise_for_status()
                result = response.text
                break  # 成功后退出循环
        except httpx.RequestError as e:
            print(f"An error occurred: {e}")
            print(time.strftime('%Y-%m-%d %H:%M:%S'))

            if retryTimes <= 1:  # 最后一次重试
                raise

        sleepTime = lastTime + waitTime - time.time()
        if sleepTime > 0:
            print(time.strftime('%Y-%m-%d %H:%M:%S sleep for ' + str(sleepTime)))
            await asyncio.sleep(sleepTime)
        lastTime = time.time()
        retryTimes -= 1

    return result

async def getDetail(appid):
    response = await send_steam_req(DETAIL_URL.format(appid))
    if not response:
        print(f"No response for appid {appid}")
        return
    try:
        content = json.loads(response)
        appid = int(list(content.keys())[0])
        result = list(content.values())[0]
        result["appid"] = appid
        if result['success']:
            return result['data']
        else:
            print(f"Failed to get valid data for appid {appid}")
            return None
    except json.JSONDecodeError as e:
        print(f"JSON decode error for appid {appid}: {e}")
        return None

async def download_files(game_info, output_folder):
    pic_url = game_info['capsule_imagev5']

    await download_file_url(pic_url, os.path.join(output_folder, 'pic.jpg'), "视频封面")
    await asyncio.sleep(2)

    # 批量下载 screenshots
    if DOWNLOAD_SCREENSHOTS:
        screenshots = game_info.get('screenshots', [])
        for i, screenshot in enumerate(screenshots):
            path_full = screenshot['path_full']
            await download_file_url(path_full, os.path.join(output_folder, f'screenshot_{i+1}.jpg'), f"截图 {i+1}")
            await asyncio.sleep(2)

    # 批量下载 movies
    if DOWNLOAD_MOVIES:
        movies = game_info.get('movies', [])
        for i, movie in enumerate(movies):
            webm_max = movie['webm']['max']
            await download_file_url(webm_max, os.path.join(output_folder, f'movie_{i+1}.webm'), f"电影 {i+1}")
            await asyncio.sleep(2)

def generate_submission_data(game_info, appid):
    # 如果开发者信息不存在或为空，使用默认值
    developer = game_info.get('developers', ['Unknown Developer'])[0]
    # 获取当前时间并格式化为 'YYYY-MM-DD HH:MM'
    current_time = datetime.now().strftime('%Y-%m-%d %H:%M')
    # 获取 price_overview，如果不存在，使用默认值
    price_overview = game_info.get('price_overview', {})
    # 获取 short_description，如果不存在，使用默认值
    short_description = game_info.get('short_description', 'No description available')

    # 组合新的对象
    description_obj = {
        'short_description': short_description,
        'price_overview': price_overview
    }

    obj = {
        'typeId': '',
        'imageUrl': appid,
        'title': game_info.get('name', 'Unknown Title'),
        'publisher': developer,
        'detail': '',  # 传空字符串
        'description': json.dumps(description_obj, ensure_ascii=False),
        'views': 0,
        'date': current_time,  # 使用当前时间
        'sourceUrl': f'https://store.steampowered.com/app/{appid}',
    }
    return obj

async def submit_data(submission_data):
    proxy_url = "http://localhost:8080"  # 代理地址和端口
    backend_url = 'http://localhost:8080/itemCard/saveItemCard'
    headers = {'Content-Type': 'application/json'}

    try:
        async with httpx.AsyncClient(proxies=proxy_url) as client:
            response = await client.post(backend_url, json=submission_data, headers=headers)
            response.raise_for_status()
            print('Data submitted successfully!')
    except httpx.RequestError as e:
        print('Failed to submit data to the backend:', str(e))

async def process_game(appid):
    output_folder = os.path.join(OUTPUT_FOLDER, str(appid))
    print(f"Creating output folder: {output_folder}")
    os.makedirs(output_folder, exist_ok=True)
    game_info = await getDetail(appid)
    submission_data = generate_submission_data(game_info, appid)
    print(submission_data)
    await submit_data(submission_data)
    if game_info:
        file_path = os.path.join(output_folder, 'game_info.json')
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(game_info, f, ensure_ascii=False, indent=4)
        print(f"游戏信息 saved for appid {appid} at {file_path}")
    else:
        print(f"Failed to retrieve game info for appid {appid}")
    await download_files(game_info, output_folder)

async def main():
    await process_game(APP_ID)

if __name__ == '__main__':
    asyncio.run(main())
