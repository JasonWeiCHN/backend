import json
import random

# 定义标签数据源
tags = [
    { 'id': 'clansDescription', 'name': '派系说明' },
    { 'id': 'liveRecording', 'name': '实况录像' },
    { 'id': 'newerTeach', 'name': '萌新教学' },
    { 'id': 'clip', 'name': '剪辑大片' },
    { 'id': 'story', 'name': '讲故事' }
]

# 读取 JSON 文件
with open('article-maps.json', 'r', encoding='utf-8') as f:
    articles_map = json.load(f)

# 遍历文章 Map
for key, articles in articles_map.items():
    # 遍历每个文章列表
    for article in articles:
        # 随机选择 1 到 2 个标签，并将其 ID 添加到 tagIds 中
        num_tags = random.randint(1, 2)
        article['tagIds'] = random.sample([tag['id'] for tag in tags], k=num_tags)

# 生成新的 JSON 文件
with open('article-maps-with-tag.json', 'w', encoding='utf-8') as f:
    json.dump(articles_map, f, ensure_ascii=False, indent=2)
