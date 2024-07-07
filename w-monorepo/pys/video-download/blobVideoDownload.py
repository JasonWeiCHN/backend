import yt_dlp

# 设置下载选项
ydl_opts = {
    'outtmpl': '%(title)s.%(ext)s',  # 输出文件的命名格式
}

url = 'https://v.redd.it/e1xz7pdfcj3d1/HLS_480.ts'

# 使用 yt-dlp 下载视频
with yt_dlp.YoutubeDL(ydl_opts) as ydl:
    ydl.download([url])
