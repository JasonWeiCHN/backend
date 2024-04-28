import requests
import json

# 后台 API 的 URL
backend_url = 'http://localhost:8080/itemCard/findAll'

# 发送 GET 请求获取所有项目卡数据
response = requests.get(backend_url)
if response.status_code == 200:
    backend_item_cards = response.json()  # 解析 JSON 响应
    # 将后台返回的项目卡数据转换为所需的 JSON 格式
    articles_map = {}
    for item_card in backend_item_cards:
        type_id = str(item_card['typeId'])
        if type_id not in articles_map:
            articles_map[type_id] = []
        # 处理 tagIds 和 referer
        tag_ids = item_card['tagIds']
        tag_ids = tag_ids.split(';') if tag_ids else []
        articles_map[type_id].append({
            'id': str(item_card['id']),
            'typeId': type_id,
            'imageUrl': item_card['imageUrl'],
            'title': item_card['title'],
            'publisher': item_card['publisher'],
            'detail': item_card['detail'],
            'description': item_card['description'],
            'views': item_card['views'],
            'date': item_card['date'],
            'tagIds': tag_ids,
            'sourceUrl': item_card['sourceUrl'],
            'referer': item_card['referer']
        })

    # 将转换后的数据写入 JSON 文件，指定编码为 UTF-8
    with open('articles_map.json', 'w', encoding='utf-8') as json_file:
        json.dump(articles_map, json_file, ensure_ascii=False, indent=2)

    print('JSON 文件已生成：articles_map.json')
else:
    print('无法获取项目卡数据：', response.status_code)
