from bs4 import BeautifulSoup

# 打开本地HTML文件
with open('1.html', 'r', encoding='utf-8') as f:
    html_content = f.read()

# 使用Beautiful Soup解析HTML
soup = BeautifulSoup(html_content, 'html.parser')

# 提取数据示例：获取标题和列表项文本
title = soup.title.text
list_items = [item.text for item in soup.find_all('th')]

# 打印提取的数据
print("Title:", title)
print("List Items:", list_items)
