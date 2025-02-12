import os
import json
import requests
import re
import time
from bs4 import BeautifulSoup

# 读取输入的HTML文件
with open('未来电玩.html', 'r', encoding='utf-8') as f:
    html_content = f.read()

# 使用 BeautifulSoup 解析 HTML 内容
soup = BeautifulSoup(html_content, 'html.parser')

# 使用正则表达式查找 class 属性以 'cardWarp--' 开头的所有元素
items = soup.find_all(class_=re.compile('^cardWarp--'))

# 检查是否找到任何 items
if not items:
    print("No items found with the given class prefix.")
else:
    print(f"Found {len(items)} items.")

# 创建一个存储所有项信息的列表
output_data = []

# 遍历每个项目
for item in items:
    # 获取图片的 src（class 开头匹配）
    img_tag = item.find(class_=re.compile('^feeds-image--'))
    img_src = img_tag['src'] if img_tag else None

    # 处理图片 URL，如果是相对路径或者以 _.webp? 结尾
    if img_src:
        print("Original img_src:", img_src)

        # 如果 img_src 以 "//" 开头，则添加 https:
        if img_src.startswith("//"):
            img_src = "https:" + img_src

        # 如果 URL 以 _.webp? 结尾，去掉该部分并改为 .jpg
        if img_src.endswith("_.webp"):
            img_src = img_src[:-6]  # 去掉 _.webp?

        # 提取图片文件名
        img_filename = img_src.split('/')[-1]
        img_filename = img_filename.replace(".webp", ".jpg")  # 强制替换为 .jpg 格式
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'}
        response = requests.get(img_src, headers=headers)
        if response.status_code == 200:
            img_data = response.content

        # 获取项目的标题（class 开头匹配）
        title_tag = item.find(class_=re.compile('^main-title--'))
        title = title_tag.get_text(strip=True) if title_tag else 'Unknown Title'

        print(img_src, title)

        # 创建一个以项目标题为名的文件夹，替换文件名中不合法的字符
        folder_name = title.replace(" ", "_")  # 用下划线替换空格
        folder_name = re.sub(r'[\/:*?"<>|]', '', folder_name)  # 替换非法字符

        # 检查文件夹是否已存在，如果存在，则跳过
        if os.path.exists(folder_name):
            print(f"Folder '{folder_name}' already exists, skipping this item.")
            continue  # 跳过当前项

        # 创建文件夹
        os.makedirs(folder_name)

        # 将图片保存到对应的文件夹中
        with open(os.path.join(folder_name, img_filename), 'wb') as img_file:
            img_file.write(img_data)

        # 获取项目的价格（class 开头匹配）
        price_tag = item.find(class_=re.compile('^price-wrap--'))
        price = ''.join([span.get_text(strip=True) for span in price_tag.find_all('span')]) if price_tag else 'Unknown Price'

        # 创建一个 JSON 对象，存储项目的信息
        item_data = {
            'img_src': img_src,  # 保存经过处理的 URL
            'title': title,
            'price': price,
            'original_img_src': img_tag['src'] if img_tag else None  # 保存原始未处理的 URL
        }

        # 保存该项的 JSON 数据到文件夹中
        with open(os.path.join(folder_name, f'{folder_name}.json'), 'w', encoding='utf-8') as json_file:
            json.dump(item_data, json_file, ensure_ascii=False, indent=4)

        # 添加到总的输出数据中
        output_data.append(item_data)

        # 在下载每个图片后暂停 3 秒
        time.sleep(6)

# 输出所有项的 JSON 文件
with open('output.json', 'w', encoding='utf-8') as final_json_file:
    json.dump(output_data, final_json_file, ensure_ascii=False, indent=4)

print("Processing complete. Files saved.")
