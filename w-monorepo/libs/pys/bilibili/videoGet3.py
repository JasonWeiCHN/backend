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
SESSDATA = "7bbcbe74%2C1731807787%2C249d1%2A51CjBMs7JpVYq0g-13xJ292DZeFJ8LFDkYzcnaDktku-cT6_89_roXGd-OUZZSX2KwhtkSVkFFeDc3NkFYQkNKemNVd2FZYVpVanBWdnV4Y0JqM3FDX2NxYXgza3Z2cm1uU3VLWUF1RmJlVXVUc2JWRktnZzdxYU5UWGlkT281NXptZFpyZl96NGlRIIEC"
BILI_JCT = "063d77cc6e5d7f03fad77cdf2baf6f27"
BUVID3 = ""
BVIDS = ["BV1Xm421K7rc"] # 修改为你的多个 BVID
# FFMPEG 路径，查看：http://ffmpeg.org/
FFMPEG_PATH = r"F:/ffmpeg/bin/ffmpeg.exe"
OUTPUT_FOLDER = r"F:\biliGet\funny"

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

    # 获取视频下载链接
    download_url_data = await v.get_download_url(0)
    # 解析视频下载信息
    detecter = video.VideoDownloadURLDataDetecter(data=download_url_data)
    streams = detecter.detect_best_streams()
    # 有 MP4 流 / FLV 流两种可能
    if detecter.check_flv_stream() == True:
        # FLV 流下载
        await download_url(streams[0].url, os.path.join(output_folder, "flv_temp.flv"), "FLV 音视频流")
        # 转换文件格式
        os.system(f'{FFMPEG_PATH} -i {os.path.join(output_folder, "flv_temp.flv")} {os.path.join(output_folder, "video.mp4")}')
        # 删除临时文件
        os.remove(os.path.join(output_folder, "flv_temp.flv"))
    else:
        # MP4 流下载
        await download_url(streams[0].url, os.path.join(output_folder, "video_temp.m4s"), "视频流")
        await download_url(streams[1].url, os.path.join(output_folder, "audio_temp.m4s"), "音频流")

        # 混流
        result = os.system(f'{FFMPEG_PATH} -i {os.path.join(output_folder, "video_temp.m4s")} -i {os.path.join(output_folder, "audio_temp.m4s")} -vcodec copy -acodec copy {os.path.join(output_folder, "video.mp4")}')

        # 检查混流操作的结果
        if result != 0:
            print("混流操作失败！")
        else:
            print("混流操作成功！")

        print("当前工作目录:", os.getcwd())

        # 删除临时文件
        os.remove(os.path.join(output_folder, "video_temp.m4s"))
        os.remove(os.path.join(output_folder, "audio_temp.m4s"))

    print('已下载为：video.mp4')

def extract_random_frames(video_path, output_folder, num_frames, frame_duration):
    # Open the video file
    cap = cv2.VideoCapture(video_path)
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))

    # Select a random starting frame
    start_frame = random.randint(0, total_frames - num_frames - 1)
    cap.set(cv2.CAP_PROP_POS_FRAMES, start_frame)

    # Loop through the frames and extract images
    frames = []
    for _ in range(num_frames):
        ret, frame = cap.read()
        if ret:
            # Convert BGR to RGB
            rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
            # Append the frame
            frames.append(Image.fromarray(rgb_frame))

    # Save frames as GIF
    frames[0].save(os.path.join(output_folder, 'output_continuous.gif'),
                   save_all=True, append_images=frames[1:], loop=0, duration=frame_duration)

    # Release video capture object
    cap.release()

async def download_images(video_info, output_folder):
    # 下载视频信息中的图片
    pic_url = video_info.get('pic')
    face_url = video_info.get('owner', {}).get('face')
    first_frame_url = video_info.get('pages', [{}])[0].get('first_frame')

    # 下载视频封面图片并添加延迟
    if pic_url:
        await download_url(pic_url, os.path.join(output_folder, 'pic.jpg'), "视频封面")
        await asyncio.sleep(2)  # 添加延迟，单位为秒
    else:
        print("视频封面图片未找到，跳过处理。")

    # 下载UP主头像图片并添加延迟
    if face_url:
        await download_url(face_url, os.path.join(output_folder, 'face.jpg'), "UP 主头像")
        await asyncio.sleep(2)  # 添加延迟，单位为秒
    else:
        print("UP主头像图片未找到，跳过处理。")

    # 下载视频首帧图片
    if first_frame_url:
        await download_url(first_frame_url, os.path.join(output_folder, 'first_frame.jpg'), "视频首帧")
    else:
        print("视频首帧图片未找到，跳过处理。")


def generate_submission_data(video_info, bvid, output_folder):
    # 生成提交后台请求的数据
    obj = {
        'typeId': video_info['tid'],
        'imageUrl': bvid,
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

async def process_bvid(bvid, num_frames, frame_duration):
    output_folder = os.path.join(OUTPUT_FOLDER, bvid)  # 修改为 F 盘上的 biliGet 文件夹下的子目录路径

    # 检查输出文件夹是否已存在
    if os.path.exists(output_folder):
        print(f" BVID {bvid} 已存在, 跳过本次操作...")
        return

    # 创建输出文件夹
    os.makedirs(output_folder, exist_ok=True)

    # 下载视频并获取视频信息
    await download_video(bvid, output_folder)

    # 转换视频为 GIF
    # extract_random_frames(os.path.join(output_folder, "video.mp4"), output_folder, num_frames, frame_duration)

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
    # 输入参数
    num_frames = 60  # Number of frames to extract
    frame_duration = 15  # Duration between frames in milliseconds

    # 逐个处理每个 BVID
    for bvid in BVIDS:
        await process_bvid(bvid, num_frames, frame_duration)

if __name__ == '__main__':
    asyncio.run(main())
