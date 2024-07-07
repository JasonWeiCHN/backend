import asyncio
import json
import os
import random
import httpx
import cv2
from bilibili_api import video, Credential, HEADERS
from PIL import Image
from datetime import datetime

# 替换成你的 SESSDATA、BILI_JCT 和 FFMPEG_PATH
SESSDATA = "9233597d%2C1731161674%2Cf9afd%2A52CjATkcu61Z1D4ojfK_DOWCgaztC32oJdQYZjcjmZxjRggIrd6P_kSvH_fEPCKY_ZuW4SVnFrd0U3M2VaZkFNaVo2eFljM3BuWjZid3VBNU4tMXNqdFpHWlMzSko3RXZ1VVZBM2VWeVZ3LTRvUjBXMGY4YXJsald2RS1oc0prQ0lEbU5KRm1PQkNBIIEC"
BILI_JCT = "a0bcde097d2b3dc90a0f93c0e6da99df"
BUVID3 = ""
BVIDS = ["BV1Nb42187Dj"]  # 修改为你的多个 BVID
# FFMPEG 路径，查看：http://ffmpeg.org/
FFMPEG_PATH = r"F:/ffmpeg/bin/ffmpeg.exe"

async def download_url(url: str, out: str, info: str):
    # 下载函数
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
    # 实例化 Credential 类
    credential = Credential(sessdata=SESSDATA, bili_jct=BILI_JCT, buvid3=BUVID3)
    # 实例化 Video 类
    v = video.Video(bvid=bvid, credential=credential)
    # 获取视频信息
    info = await v.get_info()
    # 保存视频信息为 JSON 文件
    with open(os.path.join(output_folder, 'video_info.json'), 'w', encoding='utf-8') as f:
        json.dump(info, f, ensure_ascii=False, indent=4)

async def download_images(video_info, output_folder):
    # 下载视频信息中的图片
    pic_url = video_info['pic']
    face_url = video_info['owner']['face']
    first_frame_url = video_info['pages'][0]['first_frame']

    # 下载视频封面图片并添加延迟
    await download_url(pic_url, os.path.join(output_folder, 'pic.jpg'), "视频封面")
    await asyncio.sleep(2)  # 添加延迟，单位为秒

def generate_submission_data(video_info, bvid, output_folder):
    # 生成提交后台请求的数据
    obj = {
        'typeId': video_info['tid'],
        'imageUrl': os.path.join(output_folder, 'pic.jpg'),
        'title': video_info['title'],
        'publisher': video_info['owner']['name'],
        'detail': json.dumps(video_info),
        'description': video_info['desc'],
        'views': video_info['stat']['view'],
        'date': datetime.fromtimestamp(video_info['pubdate']).strftime('%Y-%m-%d %H:%M'),
        'sourceUrl': f'https://www.bilibili.com/video/{bvid}',
    }
    return obj

async def submit_data(submission_data):
    backend_url = 'http://localhost:8080/itemCard/saveItemCard'  # 替换成您实际的后台端点URL
    headers = {'Content-Type': 'application/json'}

    try:
        async with httpx.AsyncClient() as client:
            response = await client.post(backend_url, json=submission_data, headers=headers)
            response.raise_for_status()  # 抛出异常如果请求不成功
            print('Data submitted successfully!')
    except httpx.RequestError as e:
        print('Failed to submit data to the backend:', str(e))

async def process_bvid(bvid):
    output_folder = os.path.join(r"F:\biliGet\warhammer3", bvid)  # 修改为 F 盘上的 biliGet 文件夹下的子目录路径

    # 创建输出文件夹
    os.makedirs(output_folder, exist_ok=True)

    # 下载视频并获取视频信息
    await download_video(bvid, output_folder)

    # 读取视频信息
    with open(os.path.join(output_folder, 'video_info.json'), 'r', encoding='utf-8') as f:
        video_info = json.load(f)

    # 下载视频信息中的图片
    await download_images(video_info, output_folder)

    # 生成提交后台请求的数据
    submission_data = generate_submission_data(video_info, bvid, output_folder)
    print(submission_data)

    # 提交后台请求
    await submit_data(submission_data)

async def main():
    # 逐个处理每个 BVID
    for bvid in BVIDS:
        await process_bvid(bvid)

if __name__ == '__main__':
    asyncio.run(main())
