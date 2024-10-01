from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from bs4 import BeautifulSoup
import time
import os

CHROMEDRIVER_PATH = r'F:/chromedriver-win64/chromedriver.exe'
BASE_URL = "https://www.xhs180qq.vip:2024"
FILE_NAME = "武林沉沦"
BOOK_ID = 21499

# 设置 Chrome 浏览器的选项
chrome_options = Options()
chrome_options.add_argument("--headless")  # 无头模式，不显示浏览器窗口
chrome_options.add_argument("--disable-gpu")
chrome_options.add_argument("--no-sandbox")

# 设置 ChromeDriver 的路径
service = Service(CHROMEDRIVER_PATH)
driver = webdriver.Chrome(service=service, options=chrome_options)

# 定义保存文件的名称模板
save_dir = FILE_NAME
if not os.path.exists(save_dir):
    os.makedirs(save_dir)

# 初始 URL
current_url = f"{BASE_URL}/xs_details/{BOOK_ID}/page/1"

while True:
    driver.get(current_url)

    # 等待 JavaScript 加载完成
    time.sleep(2)  # 可能需要根据网络状况调整时间

    # 获取页面内容
    page_source = driver.page_source
    soup = BeautifulSoup(page_source, "html.parser")

    # 查找 id="art-content" 的 div
    art_content_div = soup.find(id="art-content")

    if art_content_div:
        # 获取当前页面编号
        page_number = current_url.split("/")[-1]

        # 构造 HTML 内容
        html_content = f"<!DOCTYPE html>\n<html lang='zh-CN'>\n<head>\n<meta charset='UTF-8'>\n<title>{FILE_NAME} - Page {page_number}</title>\n</head>\n<body>\n{art_content_div.prettify()}\n</body>\n</html>"

        # 定义文件名
        file_name = os.path.join(save_dir, f"{FILE_NAME}-{page_number}.html")

        # 将 HTML 内容写入文件
        with open(file_name, "w", encoding="utf-8") as file:
            file.write(html_content)

        print(f"Page {page_number} saved as {file_name}")
    else:
        print(f"Page {page_number} does not contain the required content.")

    # 找到 .pagination div 下的 a 标签
    pagination_div = soup.select_one('.pagination')
    if pagination_div:
        a_tags = pagination_div.find_all('a')
        print(a_tags)
        if len(a_tags) == 2 and page_number == '1':  # 如果只有两个a标签，并且是第一页
            next_page_href = a_tags[1]['href']
            current_url = f"{BASE_URL}{next_page_href}"
            print(f"Next page URL: {current_url}")
        elif len(a_tags) == 3:  # 如果有三个a标签，说明有下一页
            next_page_href = a_tags[2]['href']
            current_url = f"{BASE_URL}{next_page_href}"
            print(f"Next page URL: {current_url}")
        else:
            print("Unexpected pagination format.")
            break
    else:
        print("Pagination div not found.")
        break

# 关闭浏览器
driver.quit()
