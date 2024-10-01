from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from bs4 import BeautifulSoup
import time
import os

CHROMEDRIVER_PATH = r'F:/chromedriver-win64/chromedriver.exe'
FILE_NAME = "魅惑都市"

# 设置 Chrome 浏览器的选项
chrome_options = Options()
chrome_options.add_argument("--headless")  # 无头模式，不显示浏览器窗口
chrome_options.add_argument("--disable-gpu")
chrome_options.add_argument("--no-sandbox")

# 设置 ChromeDriver 的路径
service = Service(CHROMEDRIVER_PATH)
driver = webdriver.Chrome(service=service, options=chrome_options)

# 定义要爬取的 URL 模板
# url_template = "https://www.xhs180qq.vip:2024/xs_details/17530/page/{}"
url_template = "https://www.xhs180qq.vip:2024/xs_details/16595/page/{}"

# 定义保存文件的名称模板
name = FILE_NAME
save_dir = FILE_NAME
if not os.path.exists(save_dir):
    os.makedirs(save_dir)

# 循环页码范围
for page_number in range(1, 210):
    url = url_template.format(page_number)
    driver.get(url)

    # 等待 JavaScript 加载完成
    time.sleep(3)  # 可能需要根据网络状况调整时间

    # 获取页面内容
    page_source = driver.page_source
    soup = BeautifulSoup(page_source, "html.parser")

    # 查找 id="art-content" 的 div
    art_content_div = soup.find(id="art-content")

    if art_content_div:
        # 构造 HTML 内容
        html_content = f"<!DOCTYPE html>\n<html lang='zh-CN'>\n<head>\n<meta charset='UTF-8'>\n<title>{name} - Page {page_number}</title>\n</head>\n<body>\n{art_content_div.prettify()}\n</body>\n</html>"

        # 定义文件名
        file_name = os.path.join(save_dir, f"{name}-{page_number}.html")

        # 将 HTML 内容写入文件
        with open(file_name, "w", encoding="utf-8") as file:
            file.write(html_content)

        print(f"Page {page_number} saved as {file_name}")
    else:
        print(f"Page {page_number} does not contain the required content.")

# 关闭浏览器
driver.quit()
