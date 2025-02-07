import os
import time
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin

# 读取 HTML 文件
with open("input.html", "r", encoding="utf-8") as file:
    soup = BeautifulSoup(file, "html.parser")

# 基础 URL
base_url = "https://gamefaqs.gamespot.com/"

# 获取所有图片及其对应的 meta 文本
images = soup.find_all("img")
meta_texts = [meta.get_text(strip=True) for meta in soup.find_all("div", class_="meta")]

# 确保保存目录存在
save_dir = "downloaded_images"
os.makedirs(save_dir, exist_ok=True)

# 创建 session 以提高下载稳定性
session = requests.Session()
session.headers.update({
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    "Referer": base_url
})

# 记录文件名计数
file_count = {}

# 下载图片
for idx, img in enumerate(images):
    src = img.get("src")
    if not src:
        continue

    # 确保图片 URL 是完整的
    img_url = src if src.startswith("http") else urljoin(base_url, src)

    # 生成文件名
    base_name = meta_texts[idx] if idx < len(meta_texts) else f"image_{idx}"
    base_name = base_name.replace(" ", "_").replace("/", "-")
    ext = os.path.splitext(img_url)[1]  # 获取文件扩展名

    # 处理文件名重复问题
    if base_name in file_count:
        file_count[base_name] += 1
        file_name = f"{base_name}_{file_count[base_name]}{ext}"
    else:
        file_count[base_name] = 0
        file_name = f"{base_name}{ext}"

    file_path = os.path.join(save_dir, file_name)

    # 下载图片
    try:
        response = session.get(img_url, stream=True, timeout=10)  # 关闭 SSL 验证
        response.raise_for_status()
        with open(file_path, "wb") as f:
            for chunk in response.iter_content(1024):
                f.write(chunk)
        print(f"Downloaded: {file_name}")
    except requests.exceptions.SSLError:
        print(f"SSL Error: Failed to download {img_url}")
    except requests.exceptions.ConnectionError:
        print(f"Connection Error: Failed to download {img_url}")
    except requests.RequestException as e:
        print(f"Failed to download {img_url}: {e}")

    time.sleep(1)  # 避免请求过快
