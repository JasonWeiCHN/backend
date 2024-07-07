import requests
from bs4 import BeautifulSoup

def get_h1_text(url):
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.9999.999 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "Accept-Language": "en-US,en;q=0.9",
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive",
        "Referer": "https://www.baidu.com/",
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

        return h1_texts
    else:
        # 如果请求失败，打印错误信息
        print("Failed to fetch URL:", response.status_code)
        return None

# 要获取的 URL
url = "https://www.bilibili.com/video/BV1F6421c7DE/?spm_id_from=333.1007.tianma.2-1-3.click"

# 调用函数获取 h1 标签文本
h1_texts = get_h1_text(url)

if h1_texts:
    print("所有 h1 标签的文本内容：")
    for text in h1_texts:
        print(text)
else:
    print("获取 h1 标签文本失败。")
