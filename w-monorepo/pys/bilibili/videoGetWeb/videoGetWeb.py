from flask import Flask, render_template, request, jsonify
import asyncio
import json
import os
import random
import httpx
import cv2
from bilibili_api import video, Credential, HEADERS
from PIL import Image
from datetime import datetime

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/download_and_save', methods=['POST'])
async def download_and_save():
    data = request.json
    SESSDATA = data.get('SESSDATA')
    BILI_JCT = data.get('BILI_JCT')
    BVID = data.get('BVID')
    # TODO 没有使用页面输入项
    output_folder = os.path.join(r"F:\biliGet", BVID)  # 修改为 F 盘上的 biliGet 文件夹下的子目录路径
    typeId = data.get('typeId')

    # 下载视频并获取视频信息
    await download_video(BVID, output_folder)

    # 转换视频为 GIF
    extract_random_frames(os.path.join(output_folder, "video.mp4"), output_folder, 100, 20)

    # 读取视频信息
    with open(os.path.join(output_folder, 'video_info.json'), 'r', encoding='utf-8') as f:
        video_info = json.load(f)

    # 下载视频信息中的图片
    await download_images(video_info, output_folder)

    # 生成提交后台请求的数据
    submission_data = generate_submission_data(video_info, BVID, output_folder, typeId)

    # 提交后台请求
    await submit_data(submission_data)

    return jsonify({'message': 'Data saved successfully to backend!'})

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
    credential = Credential(sessdata=SESSDATA, bili_jct=BILI_JCT)
    v = video.Video(bvid=bvid, credential=credential)
    info = await v.get_info()
    with open(os.path.join(output_folder, 'video_info.json'), 'w', encoding='utf-8') as f:
        json.dump(info, f, ensure_ascii=False, indent=4)

    download_url_data = await v.get_download_url(0)
    detecter = video.VideoDownloadURLDataDetecter(data=download_url_data)
    streams = detecter.detect_best_streams()
    if detecter.check_flv_stream() == True:
        await download_url(streams[0].url, os.path.join(output_folder, "flv_temp.flv"), "FLV 音视频流")
        os.system(f'{FFMPEG_PATH} -i {os.path.join(output_folder, "flv_temp.flv")} {os.path.join(output_folder, "video.mp4")}')
        os.remove(os.path.join(output_folder, "flv_temp.flv"))
    else:
        await download_url(streams[0].url, os.path.join(output_folder, "video_temp.m4s"), "视频流")
        await download_url(streams[1].url, os.path.join(output_folder, "audio_temp.m4s"), "音频流")
        result = os.system(f'{FFMPEG_PATH} -i {os.path.join(output_folder, "video_temp.m4s")} -i {os.path.join(output_folder, "audio_temp.m4s")} -vcodec copy -acodec copy {os.path.join(output_folder, "video.mp4")}')
        if result != 0:
            print("混流操作失败！")
        else:
            print("混流操作成功！")
        print("当前工作目录:", os.getcwd())
        os.remove(os.path.join(output_folder, "video_temp.m4s"))
        os.remove(os.path.join(output_folder, "audio_temp.m4s"))

    print('已下载为：video.mp4')

def extract_random_frames(video_path, output_folder, num_frames, frame_duration):
    cap = cv2.VideoCapture(video_path)
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    start_frame = random.randint(0, total_frames - num_frames - 1)
    cap.set(cv2.CAP_PROP_POS_FRAMES, start_frame)
    frames = []
    for _ in range(num_frames):
        ret, frame = cap.read()
        if ret:
            rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
            frames.append(Image.fromarray(rgb_frame))
    frames[0].save(os.path.join(output_folder, 'output_continuous.gif'),
                   save_all=True, append_images=frames[1:], loop=0, duration=frame_duration)
    cap.release()

async def download_images(video_info, output_folder):
    pic_url = video_info['pic']
    face_url = video_info['owner']['face']
    first_frame_url = video_info['pages'][0]['first_frame']
    await download_url(pic_url, os.path.join(output_folder, 'pic.jpg'), "视频封面")
    await asyncio.sleep(2)
    await download_url(face_url, os.path.join(output_folder, 'face.jpg'), "UP 主头像")
    await asyncio.sleep(2)
    await download_url(first_frame_url, os.path.join(output_folder, 'first_frame.jpg'), "视频首帧")

def generate_submission_data(video_info, bvid, output_folder, typeId):
    obj = {
        'typeId': typeId,
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
    backend_url = 'http://localhost:8080/itemCard/saveItemCard'
    headers = {'Content-Type': 'application/json'}

    try:
        async with httpx.AsyncClient() as client:
            response = await client.post(backend_url, json=submission_data, headers=headers)
            response.raise_for_status()
            print('Data submitted successfully!')
    except httpx.RequestError as e:
        print('Failed to submit data to the backend:', str(e))

if __name__ == '__main__':
    app.run(debug=True)
