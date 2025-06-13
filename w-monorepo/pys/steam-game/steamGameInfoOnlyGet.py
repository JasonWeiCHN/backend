import json
import os
import time
import asyncio
import httpx

from datetime import datetime

DETAIL_URL = "http://store.steampowered.com/api/appdetails/?appids={0}&cc=cn&l=schinese"
OUTPUT_FOLDER = r"F:/steam-game-info/"
APP_ID = 2400430

lastTime = time.time()
waitTime = 5 * 60.0 / 195

async def send_steam_req(url):
    global lastTime
    global waitTime
    retryTimes = 3
    result = None

    while retryTimes > 0:
        try:
            async with httpx.AsyncClient(follow_redirects=True) as client:
                response = await client.get(url)
                response.raise_for_status()
                result = response.text
                break
        except httpx.RequestError as e:
            print(f"An error occurred: {e}")
            print(time.strftime('%Y-%m-%d %H:%M:%S'))

            if retryTimes <= 1:
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
        return None
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

def extract_summary(game_info):
    return {
        'name': game_info.get('name', ''),
        'short_description': game_info.get('short_description', ''),
        'genres': game_info.get('genres', []),
        'release_date': game_info.get('release_date', {}),
#         'about_the_game': game_info.get('about_the_game', ''),
#         'supported_languages': game_info.get('supported_languages', ''),
#         'pc_requirements': game_info.get('pc_requirements', {}),
#         'developers': game_info.get('developers', []),
#         'publishers': game_info.get('publishers', []),
    }

async def process_game(appid):
    output_folder = os.path.join(OUTPUT_FOLDER, str(appid))
    os.makedirs(output_folder, exist_ok=True)
    game_info = await getDetail(appid)

    if game_info:
        # 保存完整 game_info
        full_path = os.path.join(output_folder, 'game_info.json')
        with open(full_path, 'w', encoding='utf-8') as f:
            json.dump(game_info, f, ensure_ascii=False, indent=4)
        print(f"游戏信息保存成功：{full_path}")

        # 提取部分字段并保存为 summary
        summary = extract_summary(game_info)
        summary_path = os.path.join(output_folder, 'game_summary.json')
        with open(summary_path, 'w', encoding='utf-8') as f:
            json.dump(summary, f, ensure_ascii=False, indent=4)
        print(f"游戏概要信息保存成功：{summary_path}")
    else:
        print(f"未能获取 appid 为 {appid} 的游戏信息。")

async def main():
    await process_game(APP_ID)

if __name__ == '__main__':
    asyncio.run(main())
