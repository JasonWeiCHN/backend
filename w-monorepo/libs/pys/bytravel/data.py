import requests
from bs4 import BeautifulSoup
import json
import os
import time
import re  # 导入正则表达式库

# 变动的数字部分
INDEX_NUMBER = 300

# 构建基础URL
BASE_URL = f"http://shop.bytravel.cn/produce/index{INDEX_NUMBER}_list"
DELAY_SECONDS = 1  # 延迟时间（秒）

# 函数来处理详情页面并返回内容
def get_detail_page_content(detail_url):
    response = requests.get(detail_url)
    response.encoding = 'gb2312'  # 设置编码为gb2312

    soup = BeautifulSoup(response.text, 'html.parser')
    f14_div = soup.find('div', {'class': 'f14'})

    if f14_div:
        return str(f14_div)  # 保留HTML格式
    else:
        return ''

# 函数来处理单个页面并保存为JSON文件
def process_page(url, output_dir, page_index):
    try:
        # 发起HTTP请求并获取网页内容
        response = requests.get(url)
        response.encoding = 'gb2312'  # 设置编码为gb2312

        # 使用BeautifulSoup解析网页内容
        soup = BeautifulSoup(response.text, 'html.parser')

        # 找出所有 id='tjtable' 的表格
        tables = soup.find_all('table', {'id': 'tjtable'})

        # 初始化一个列表来存储所有表格的数据
        data_list = []

        # 创建单个页面的目录
        page_output_dir = os.path.join(output_dir, f"page_{page_index}")
        os.makedirs(page_output_dir, exist_ok=True)

        # 遍历每个表格并提取数据
        for idx, table in enumerate(tables):
            table_data = {}

            # 提取图片链接和描述
            img_tag = table.find('img')
            img_src = img_tag['src'] if img_tag else ''
            description_tag = table.find('div', {'id': 'tcjs'})
            description = description_tag.get_text(strip=True) if description_tag else ''

            # 提取标题和链接
            title_tag = table.find('div', {'id': 'tctitle'}).find('a')
            title = title_tag.get_text(strip=True) if title_tag else ''
            link = title_tag['href'] if title_tag else ''
            full_link = f"http://shop.bytravel.cn{link}"  # 完整的详情链接

            # 获取详情页面内容
            detail_content = get_detail_page_content(full_link)

            # 保存详情内容到HTML文件
            detail_file_name = f"detail_page_{page_index}_{idx}.html"
            detail_file_path = os.path.join(page_output_dir, detail_file_name)
            with open(detail_file_path, 'w', encoding='utf-8') as f:
                f.write(detail_content)

            # 存储数据到字典
            table_data['image'] = img_src
            table_data['title'] = title
            table_data['link'] = link
            table_data['description'] = description
            table_data['detail_file'] = detail_file_name  # 添加详情文件名

            # 将字典添加到列表
            data_list.append(table_data)

        # 将数据转换为JSON格式
        json_data = json.dumps(data_list, ensure_ascii=False, indent=4)

        # 构建文件名
        file_name = f"data_page_{page_index}.json"
        file_path = os.path.join(page_output_dir, file_name)

        # 将数据写入JSON文件
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(json_data)

        print(f"Page {page_index} processed successfully.")
    except Exception as e:
        print(f"Failed to process page {page_index}: {e}")

# 函数来提取OUTPUT_DIR和NUM_PAGES
def extract_metadata(base_url):
    response = requests.get(f"{base_url}.html")
    response.encoding = 'gb2312'
    soup = BeautifulSoup(response.text, 'html.parser')

    # 提取OUTPUT_DIR
    output_dir_tag = soup.find('div', class_='f12').find_all('a')[-1]
    output_dir = output_dir_tag.get_text(strip=True)

    # 提取NUM_PAGES
    nav = soup.find('nav', id='list-page')
    num_pages_tag = nav.find_all('a')[-3]
    num_pages_text = num_pages_tag.get_text(strip=True)

    # 使用正则表达式提取数字部分
    num_pages = int(re.search(r'\d+', num_pages_text).group())

    return output_dir, num_pages

# 处理多个页面
def process_multiple_pages(base_url):
    # 提取OUTPUT_DIR和NUM_PAGES
    output_dir, num_pages = extract_metadata(base_url)

    # 如果输出目录不存在，则创建
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    for i in range(num_pages):
        if i == 0:
            page_url = f"{base_url}.html"
        else:
            page_url = f"{base_url}{i}.html"

        process_page(page_url, output_dir, i)

        # 添加延迟
        time.sleep(DELAY_SECONDS)

# 处理多个页面
process_multiple_pages(BASE_URL)
