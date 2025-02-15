import asyncio
from bilibili_api import video, Credential, HEADERS
import httpx
import os

SESSDATA = "8b1d63e4%2C1732938512%2C50fdf%2A62CjBHqTjnzlu60m4yrYhGS1D7nTb3c1BeCsNfkvDP3mYJNMh2BTmI1DNqNaEQuFJRmNASVkJXN2h5cWZEUW51dDEwVF9lMFFiMXF2RXBYZkFqNEJQRU00VW51RjRaZWRGMkVCRjZFeFg0LV85eGk5OXhjZjk2clZ5MElTNG50dlhxRmR4QVNYYURBIIEC"
BILI_JCT = "b982a6b975769eb33632aea3d215485c"
BUVID3 = ""
BVID = "BV1ar4y1z7bo"

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

async def main():
    # 实例化 Credential 类
    credential = Credential(sessdata=SESSDATA, bili_jct=BILI_JCT, buvid3=BUVID3)
    # 实例化 Video 类
    v = video.Video(bvid=BVID, credential=credential)
    # 获取视频下载链接
    download_url_data = await v.get_download_url(0)
    # 解析视频下载信息
    detecter = video.VideoDownloadURLDataDetecter(data=download_url_data)
    streams = detecter.detect_all()
    print(streams)
    # 有 MP4 流 / FLV 流两种可能
    if detecter.check_flv_stream() == True:
        # FLV 流下载
        await download_url(streams[0].url, "flv_temp.flv", "FLV 音视频流")
        # 转换文件格式
        os.system(f'{FFMPEG_PATH} -i flv_temp.flv video.mp4')
        # 删除临时文件
        os.remove("flv_temp.flv")
    else:
        # MP4 流下载
        await download_url(streams[1].url, "video_temp.m4s", "视频流")
        await download_url(streams[12].url, "audio_temp.m4s", "音频流")

        # 混流
        result = os.system(f'{FFMPEG_PATH} -i video_temp.m4s -i audio_temp.m4s -vcodec copy -acodec copy video.mp4')

        # 检查混流操作的结果
        if result != 0:
            print("混流操作失败！")
        else:
            print("混流操作成功！")

        print("当前工作目录:", os.getcwd())

        # 删除临时文件
        os.remove("video_temp.m4s")
        os.remove("audio_temp.m4s")

    print('已下载为：video.mp4')

if __name__ == '__main__':
    # 主入口
    asyncio.get_event_loop().run_until_complete(main())
