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

        # 循环访问链接并保存到本地
        for absolute_link in absolute_links_stack:
            process_and_save_content(absolute_link)

    else:
        print(f"Failed to retrieve the web page. Status code: {response.status_code}")

def process_and_save_content(link):
    # 发送 HTTP 请求
    response = requests.get(link)

    # 检查请求是否成功
    if response.status_code == 200:
        # 使用 BeautifulSoup 解析 HTML
        soup = BeautifulSoup(response.text, 'html.parser')

        # 使用 CSS 选择器提取标题、副标题和内容
        title = soup.select_one(".main3 > .left > #sonsyuanwen > .cont > div:nth-of-type(2) > h1")
        subtitle = soup.select_one(".main3 > .left > #sonsyuanwen > .cont > div:nth-of-type(2) > p")
        content = soup.select_one(".main3 > .left > #sonsyuanwen > .cont > div:nth-of-type(2) > .contson")

        if title and subtitle and content:
            title_text = title.get_text(strip=True)
            subtitle_text = subtitle.get_text(strip=True)
            content_text = content.get_text(strip=True)

            # 对内容进行处理，添加换行
            content_text = content_text.replace('。', '。\n')

            # 保存到本地文件
            save_to_file(title_text, subtitle_text, content_text)

        else:
            print(f"Failed to extract title, subtitle, or content from {link}")

    else:
        print(f"Failed to retrieve content from {link}. Status code: {response.status_code}")

def save_to_file(title, subtitle, content):
    # 以标题为文件名保存到本地txt文件
    file_name = f"{title}.txt"
    with open(file_name, 'w', encoding='utf-8') as file:
        file.write(f"{title}\n{subtitle}\n\n{content}")

# 使用一个示例网址进行测试
url_to_scrape = "https://so.gushiwen.cn/gushi/tangshi.aspx"
css_selector_to_extract = ".main3 > .left > .sons > .typecont > span > a"
advanced_web_scraper(url_to_scrape, css_selector_to_extract)
