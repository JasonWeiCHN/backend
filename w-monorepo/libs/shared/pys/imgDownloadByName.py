import requests
from bs4 import BeautifulSoup
import os
import time

# 指定标题来下载 specified_title heading_div.a.text
# 请求页面
url = 'https://totalwarwarhammer.fandom.com/wiki/Total_War:_Warhammer_Wiki'
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')

# 查找所有包含 .fpbox 类的 div 元素下的 img 标签
fpbox_divs = soup.select('#fproles center div')

# 设置起始索引
start_index = 0  # 这里设置起始索引为 0，你可以根据需要修改

# 指定要下载的标题
specified_title = "Wood Elves"  # 设置你想要下载的标题

# 下载并保存图片
for idx, fpbox_div in enumerate(fpbox_divs[start_index:], start=start_index):
    # 获取文件夹名称
    heading_div = fpbox_div.find('div', class_='heading')
    folder_name = heading_div.a.text if heading_div else f'Unknown_{idx}'  # 如果没有找到对应的标题，则使用 'Unknown_{index}'
    print(folder_name)

    # 如果当前文件夹名称等于指定的标题，才执行下载操作
    if folder_name == specified_title:
        # 创建文件夹保存图片
        folder_path = os.path.join('images', folder_name)
        os.makedirs(folder_path, exist_ok=True)

        # 查找当前 div 内的所有图片
        img_tags = fpbox_div.find_all('img')
        for img_tag in img_tags:
            img_url = img_tag.get('data-src')  # 获取 data-src 属性值
            if img_url:
                if '.png' in img_url:
                    img_url = img_url.split('.png')[0] + '.png'  # 截取 .png 之前的部分并添加 .png
                img_name = img_url.split('/')[-1]  # 获取图片名称

                # 添加重试机制
                retry_count = 0
                max_retries = 3
                while retry_count < max_retries:
                    try:
                        img_data = requests.get(img_url).content
                        with open(os.path.join(folder_path, img_name), 'wb') as img_file:
                            img_file.write(img_data)
                        break  # 如果成功下载图片，则跳出重试循环
                    except Exception as e:
                        print(f"Error occurred while downloading image: {e}. Retrying...")
                        time.sleep(3)  # 等待3秒后重试
                        retry_count += 1
                else:
                    print(f"Failed to download image {img_name} after {max_retries} retries. Skipping...")
    else:
        print("not match skip")
