import os
import requests

def download_ts(ts_url, session, temp_dir):
    response = session.get(ts_url)
    if response.status_code == 200:
        ts_file_name = ts_url.split("/")[-1]
        ts_file_path = os.path.join(temp_dir, ts_file_name)
        with open(ts_file_path, 'wb') as ts_file:
            ts_file.write(response.content)
        print(f"下载完成: {ts_file_name}")
        return ts_file_path
    else:
        print(f"下载失败: {ts_url}")
        return None

def download_m3u8(m3u8_url):
    session = requests.Session()
    response = session.get(m3u8_url)
    if response.status_code != 200:
        print(f"无法获取 M3U8 文件: {m3u8_url}")
        return

    print(f"M3U8 内容：\n{response.text}")

    ts_files = []

    # 创建临时目录
    temp_dir = "temp"
    os.makedirs(temp_dir, exist_ok=True)

    # 解析 M3U8 内容
    for line in response.text.splitlines():
        line = line.strip()
        if line.endswith('.ts') and line.startswith('https://vip7.ljbfbf.com/20240711/BltF2i3T/'):
            ts_files.append(line)
        elif line.startswith('/'):
            ts_files.append('https://vip7.ljbfbf.com' + line)

    # 下载并保存符合条件的 TS 文件
    for ts_url in ts_files:
        if ts_url.startswith("https://vip7.ljbfbf.com/20240711/BltF2i3T/"):
            downloaded_file = download_ts(ts_url, session, temp_dir)
            if downloaded_file:
                ts_files.append(downloaded_file)

    # 合并 TS 文件
    with open("output_video.ts", 'wb') as output_file:
        for ts_file in ts_files:
            if os.path.exists(ts_file):
                with open(ts_file, 'rb') as f:
                    output_file.write(f.read())

    print("合并视频完成，输出为 output_video.ts")

    # 删除临时文件
    for ts_file in ts_files:
        if os.path.exists(ts_file):
            os.remove(ts_file)

    # 删除临时目录
    os.rmdir(temp_dir)

# 主程序入口
if __name__ == "__main__":
    m3u8_url = "https://vip7.ljbfbf.com/20240711/BltF2i3T/hls/index.m3u8"  # 替换为你的 M3U8 链接
    download_m3u8(m3u8_url)
