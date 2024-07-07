import requests
import subprocess

# 指定 ffmpeg 路径
FFMPEG_PATH = r"F:/ffmpeg/bin/ffmpeg.exe"

# 下载视频文件
video_url = 'https://v.redd.it/no44rq52ua4d1/HLS_480.ts'
video_response = requests.get(video_url)
with open('video.ts', 'wb') as video_file:
    video_file.write(video_response.content)

# 下载音频文件
audio_url = 'https://v.redd.it/no44rq52ua4d1/HLS_AUDIO_128.aac'
audio_response = requests.get(audio_url)
with open('audio.aac', 'wb') as audio_file:
    audio_file.write(audio_response.content)

print('视频和音频文件下载完成')

# 使用 ffmpeg 合并视频和音频
subprocess.run([
    FFMPEG_PATH, '-i', 'video.ts', '-i', 'audio.aac',
    '-c:v', 'copy', '-c:a', 'aac', '-strict', 'experimental', 'output.mp4'
])

print('视频和音频文件合并完成')
