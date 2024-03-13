import requests
from bs4 import BeautifulSoup

def advanced_web_scraper(url, css_selector):
    # 发送 HTTP 请求
    response = requests.get(url)

    # 检查请求是否成功
    if response.status_code == 200:
        # 使用 BeautifulSoup 解析 HTML
        soup = BeautifulSoup(response.text, 'html.parser')

        # 使用 CSS 选择器提取信息
        elements = soup.select(css_selector)
        for element in elements:
            print(element.get_text())  # 或者使用 element.get('href') 提取链接

    else:
        print(f"Failed to retrieve the web page. Status code: {response.status_code}")

# 使用一个示例网址进行测试
url_to_scrape = "https://so.gushiwen.cn/gushi/tangshi.aspx"
css_selector_to_extract = ".main3 > .left > .sons > .typecont > span > a"
advanced_web_scraper(url_to_scrape, css_selector_to_extract)