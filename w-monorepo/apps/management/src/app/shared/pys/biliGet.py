from flask import Flask, render_template, request, jsonify
import requests
from bs4 import BeautifulSoup
import json

app = Flask(__name__)

@app.route('/')
def index():
    # 获取Clan数据
    clans = fetch_clans()
    return render_template('index.html', clans=clans)

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

    response = requests.get(url, headers=headers)
    soup = BeautifulSoup(response.text, 'html.parser')

    title = soup.find('h1', class_='video-title')['data-title']
    publisher_tag = soup.select_one('.up-detail .up-detail-top .up-name')
    publisher = publisher_tag.text.strip() if publisher_tag else ''

    detail_tag = soup.select_one('.video-desc-container .basic-desc-info .desc-info-text')
    detail_lines = detail_tag.text.strip().split('\n') if detail_tag else []
    detail = detail_lines[0] if detail_lines else ''

    if len(detail) > 150:
        # 如果detail长度超过150，只保留第一句
        detail = detail.split('.')[0] + '.'

    views_text = soup.select_one('.view .view-text').text.strip()
    views = parse_views(views_text)

    date = soup.select_one('.pubdate-ip .pubdate-ip-text').text.strip()

    obj = {
        'typeId': '',
        'imageUrl': '',
        'title': title,
        'publisher': publisher,
        'detail': detail,
        'description': detail,
        'views': views,
        'date': date,
        'sourceUrl': url,
    }

    return obj

def parse_views(views_text):
    if '万' in views_text:
        views_text = views_text.replace('万', '')
        views = float(views_text) * 10000
    else:
        views = int(views_text)
    return views

@app.route('/save_data', methods=['POST'])
def save_data():
    data = request.json
    url = data.get('url')
    tags = data.get('tags', [])
    clan_id = data.get('clanId', '')

    # 将标签数据转换为用分号连接的字符串，或者直接作为字符串
    if len(tags) > 1:
        tag_ids = ';'.join(tags)
    elif len(tags) == 1:
        tag_ids = tags[0]
    else:
        tag_ids = ''

    data_object = scrape_page(url)
    data_object['tagIds'] = tag_ids  # 将标签作为字符串添加到数据对象中
    data_object['typeId'] = clan_id  # 添加clan的ID

    backend_url = 'http://localhost:8080/itemCard/saveItemCard'  # 替换成你的后台端点URL

    print(data_object)

    response = requests.post(backend_url, json=data_object)
    if response.status_code == 200:
        return jsonify({'message': 'Data saved successfully to backend!'})
    else:
        return jsonify({'error': f'Failed to save data to backend. Status code: {response.status_code}'})

def fetch_clans():
    # 请求后端获取Clan数据
    backend_url = 'http://localhost:8080/clan/findAll'  # 替换成你的后台端点URL
    response = requests.get(backend_url)
    if response.status_code == 200:
        clans = response.json()
        return clans
    else:
        return []

if __name__ == '__main__':
    app.run(debug=True)
