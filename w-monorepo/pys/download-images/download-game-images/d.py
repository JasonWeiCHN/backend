import os
import requests
from bs4 import BeautifulSoup

# 读取 HTML 文件内容
html_file_path = 'input.html'

with open(html_file_path, 'r', encoding='utf-8') as file:
    html_content = file.read()

# 解析 HTML
soup = BeautifulSoup(html_content, 'html.parser')

# 提取所有 img 标签
img_tags = soup.find_all('img')

# 创建保存图片的文件夹
os.makedirs('downloaded_images', exist_ok=True)

# 下载图片并保存到本地
for i, img_tag in enumerate(img_tags):
    img_url = img_tag.get('src')  # 获取 img 标签的 src 属性
    if img_url:
        try:
            # 请求图片
            img_data = requests.get(img_url).content
            # 获取图片文件名
            img_name = f"image_{i + 1}.jpg"
            img_path = os.path.join('downloaded_images', img_name)

            # 保存图片到本地
            with open(img_path, 'wb') as f:
                f.write(img_data)
            print(f"Downloaded {img_name}")
        except requests.RequestException as e:
            print(f"Failed to download {img_url}: {e}")

print("All images have been downloaded.")
