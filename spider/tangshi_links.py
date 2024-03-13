import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin

def advanced_web_scraper(url, css_selector):
    # 发送 HTTP 请求
    response = requests.get(url)

    # 检查请求是否成功
    if response.status_code == 200:
        # 使用 BeautifulSoup 解析 HTML
        soup = BeautifulSoup(response.text, 'html.parser')

        # 使用 CSS 选择器提取链接
        links = soup.select(css_selector)

        # 创建一个栈来存放绝对链接
        absolute_links_stack = []

        for link in links:
            href = link.get('href')
            if href:
                # 将相对链接转换为绝对链接
                absolute_link = urljoin(url, href)
                absolute_links_stack.append(absolute_link)

        # 打印或访问绝对链接
        for absolute_link in absolute_links_stack:
            print(absolute_link)

    else:
        print(f"Failed to retrieve the web page. Status code: {response.status_code}")

# 使用一个示例网址进行测试
url_to_scrape = "https://so.gushiwen.cn/gushi/tangshi.aspx"
css_selector_to_extract = ".main3 > .left > .sons > .typecont > span > a"
advanced_web_scraper(url_to_scrape, css_selector_to_extract)
