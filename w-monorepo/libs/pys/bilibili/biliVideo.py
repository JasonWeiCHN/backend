import requests
from bs4 import BeautifulSoup

def get_h1_and_tag_text(url, class_name):
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

    # 发送 GET 请求获取网页内容
    response = requests.get(url, headers=headers)

    # 确保请求成功
    if response.status_code == 200:
        # 使用 BeautifulSoup 解析 HTML
        soup = BeautifulSoup(response.text, 'html.parser')

        # 查找所有的 h1 标签
        h1_tags = soup.find_all('h1')

        # 提取每个 h1 标签的文本内容
        h1_texts = [tag.get_text() for tag in h1_tags]

        # 查找指定 class 下的所有 a 标签
        tag_links = soup.find_all('a', class_=class_name)

        # 提取每个 a 标签的文本内容
        tag_texts = [link.get_text() for link in tag_links]

        return h1_texts, tag_texts
    else:
        # 如果请求失败，打印错误信息
        print("Failed to fetch URL:", response.status_code)
        return None, None

# 要获取的 URL
url = "https://www.bilibili.com/video/BV151421Z7oP/?spm_id_from=333.337.search-card.all.click&vd_source=cf6172bb9e27eef98252db60c4e279fe"
# 要获取的 class 名称
class_name = "tag-link"

# 调用函数获取指定 URL 页面中的 h1 标签文本和指定 class 下的 a 标签文本
h1_texts, tag_texts = get_h1_and_tag_text(url, class_name)

if h1_texts and tag_texts:
    print("所有 h1 标签的文本内容：")
    for text in h1_texts:
        print(text)

    print("\n所有 class 为 '{}' 的 a 标签的文本内容：".format(class_name))
    for text in tag_texts:
        print(text)
else:
    print("获取标签文本失败。")
