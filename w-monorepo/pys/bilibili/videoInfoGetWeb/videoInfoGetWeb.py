from flask import Flask, render_template, request, jsonify
import asyncio
import os
import json
from datetime import datetime
import requests  # Import the requests library
import httpx
from bilibili_api import video, Credential, HEADERS

app = Flask(__name__)

# 替换成你的 SESSDATA、BILI_JCT 和 FFMPEG_PATH
SESSDATA = "629f58d0%2C1756638011%2Cbd979%2A32CjCFYPSCpcXvcd4gtCSoVp1gVZK0WtxClnF1buUivGtPj0P9cGHqlvVphWn5KbD8eeUSVjUxclRDYmpkdjdRcWlNR20zcnRsZTlZUUcyRHlFSXZkU1lyanM2WWFsb0ZvRmRiWjlMMzYzVjR5VDBLVWZnRmZnZldldVBiSTZNeVZaQzI4ajc5UlZBIIEC"
BILI_JCT = "79a79fc8fbeaf0ba30bd903b4a3fa4ad"
BUVID3 = ""
FFMPEG_PATH = r"F:/ffmpeg/bin/ffmpeg.exe"
OUTPUT_FOLDER = r"F:/biliGet/monster-hunter"

async def download_url(url: str, out: str, info: str):
    async with httpx.AsyncClient(headers=HEADERS) as sess:
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

async def download_video(bvid, output_folder):
    credential = Credential(sessdata=SESSDATA, bili_jct=BILI_JCT, buvid3=BUVID3)
    v = video.Video(bvid=bvid, credential=credential)
    info = await v.get_info()
    with open(os.path.join(output_folder, 'video_info.json'), 'w', encoding='utf-8') as f:
        json.dump(info, f, ensure_ascii=False, indent=4)

async def download_images(video_info, output_folder):
    pic_url = video_info['pic']

    await download_url(pic_url, os.path.join(output_folder, 'pic.jpg'), "视频封面")
    await asyncio.sleep(2)

def generate_submission_data(video_info, bvid):
    obj = {
        'typeId': '',
        'imageUrl': bvid,
        'title': video_info['title'],
        'publisher': video_info['owner']['name'],
        'detail': '',
        'description': video_info['desc'],
        'views': video_info['stat']['view'],
        'date': datetime.fromtimestamp(video_info['pubdate']).strftime('%Y-%m-%d %H:%M'),
        'sourceUrl': f'https://www.bilibili.com/video/{bvid}',
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

async def process_bvid(bvid, type_id, tag_ids):
    output_folder = os.path.join(OUTPUT_FOLDER, bvid)

    # 检查输出文件夹是否已存在
    if os.path.exists(output_folder):
        print(f"BVID {bvid} 已存在, 跳过本次操作...")
        return

    # 创建输出文件夹
    os.makedirs(output_folder, exist_ok=True)
    await download_video(bvid, output_folder)
    with open(os.path.join(output_folder, 'video_info.json'), 'r', encoding='utf-8') as f:
        video_info = json.load(f)
    await download_images(video_info, output_folder)
    submission_data = generate_submission_data(video_info, bvid)
    # 覆盖 typeId 和 tagIds
    submission_data['typeId'] = type_id
    submission_data['tagIds'] = tag_ids
    await submit_data(submission_data)

@app.route('/')
def index():
    clans = fetch_clans()
    return render_template('index.html', clans=clans)

@app.route('/save_data', methods=['POST'])
def save_data():
    data = request.json
    bvids = data.get('bvids', [])
    type_id = data.get('typeId', '')
    tags = data.get('tags', [])
    tag_ids = ';'.join(tags) if len(tags) > 1 else tags[0] if tags else ''
    asyncio.run(main_process_bvids(bvids, type_id, tag_ids))
    return jsonify({'message': 'Processing started for BVIDs'})

def fetch_clans():
    backend_url = 'http://localhost:8080/clan/findAll'
    response = requests.get(backend_url)  # Fetch clans using requests
    if response.status_code == 200:
        clans = response.json()
        return clans
    else:
        return []

async def main_process_bvids(bvids, type_id, tag_ids):
    for bvid in bvids:
        await process_bvid(bvid, type_id, tag_ids)

if __name__ == '__main__':
    app.run(debug=True)
