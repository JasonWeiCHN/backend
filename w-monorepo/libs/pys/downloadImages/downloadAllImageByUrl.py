from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import os
import requests

# 可正常运行
def download_images_from_page(url, folder_path):
    # 设置 Chrome WebDriver 的路径
    webdriver_path = r'D:\Program Files (x86)\chromedriver-win64\chromedriver.exe'

    # 设置 Chrome WebDriver 的选项
    chrome_options = Options()
    chrome_options.binary_location = 'C:/Program Files/Google/Chrome/Application/chrome.exe'

    # 初始化 Chrome WebDriver
    service = Service(webdriver_path)
    driver = webdriver.Chrome(service=service, options=chrome_options)

    # 打开指定 URL
    driver.get(url)

    # 使用显式等待，等待页面加载完成
    wait = WebDriverWait(driver, 20)
    wait.until(EC.presence_of_element_located((By.TAG_NAME, 'img')))

    # 确保保存图片的文件夹存在
    os.makedirs(folder_path, exist_ok=True)

    # 找到页面中所有的图片标签
    img_elements = driver.find_elements(By.TAG_NAME, 'img')

    # 下载并保存图片
    for index, img_element in enumerate(img_elements):
        img_url = img_element.get_attribute('src')
        if img_url:
            img_name = f"image_{index}.png"  # 使用简单的命名规则
            img_path = os.path.join(folder_path, img_name)
            try:
                img_response = requests.get(img_url)
                with open(img_path, 'wb') as f:
                    f.write(img_response.content)
                print(f"Downloaded: {img_path}")
            except requests.RequestException as e:
                print(f"Failed to download image {img_url}: {e}")
                continue  # 继续循环

    # 关闭 WebDriver
    driver.quit()

# 你要下载图片的网页链接
url = "https://space.bilibili.com/391901062"
# 保存图片的文件夹路径
folder_path = "downloaded_images"

download_images_from_page(url, folder_path)
