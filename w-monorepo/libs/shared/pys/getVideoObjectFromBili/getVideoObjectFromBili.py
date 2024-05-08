import requests
import json
from bs4 import BeautifulSoup

def scrape_page(url):
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.9999.999 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "Accept-Language": "en-US,en;q=0.9",
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive",
        "Referer": "https://www.google.com/",
        "Upgrade-Insecure-Requests": "1",
        "Cache-Control": "max-age=0"
    }

    # 发送GET请求获取页面内容
    response = requests.get(url, headers=headers)

    # 使用BeautifulSoup解析HTML
    soup = BeautifulSoup(response.text, 'html.parser')

    # 提取字段值
    title = soup.find('h1', class_='video-title')['data-title']
    publisher = soup.select_one('.up-detail .up-detail-top .up-name').text.strip()
    # 检查是否存在详细描述
    detail_tag = soup.select_one('.video-desc-container .basic-desc-info .desc-info-text')
    if detail_tag:
        detail = detail_tag.text.strip()
    else:
        detail = ''
    views = soup.select_one('.view .view-text').text.strip()
    date = soup.select_one('.pubdate-ip .pubdate-ip-text').text.strip()

    # 构建对象
    obj = {
        'id': '',
        'typeId': '',
        'imageUrl': '',
        'title': title,
        'publisher': publisher,
        'detail': detail,
        'description': detail,
        'views': views,
        'date': date,
        'sourceUrl': url
    }

    return obj

def save_to_json(data_object, filename):
    with open(filename, 'w', encoding='utf-8') as json_file:
        json.dump(data_object, json_file, ensure_ascii=False, indent=4)

# 测试
url = 'https://www.bilibili.com/video/BV17z421k7sZ/?vd_source=cf6172bb9e27eef98252db60c4e279fe#reply218464539456'
data_object = scrape_page(url)

filename = 'video_data.json'
save_to_json(data_object, filename)
print(f'Data saved to {filename}')
