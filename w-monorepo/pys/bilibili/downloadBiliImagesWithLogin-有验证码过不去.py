from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import os
import requests

def login_and_download_images(url, folder_path, username, password):
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

    # 等待登录按钮出现
    login_button = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, 'div.btn_wp > div.btn_primary')))
    login_button.click()

    # 输入用户名和密码并登录
    username_input = driver.find_element(By.XPATH, '//div[@class="login-pwd-wp"]//input[@placeholder="请输入账号"]')
    password_input = driver.find_element(By.CSS_SELECTOR, 'input[type="password"]')
    username_input.send_keys(username)
    password_input.send_keys(password)

    # 等待几秒钟，让页面处理登录信息
    time.sleep(2)

    # 查找登录按钮并点击
    login_submit_button = driver.find_element(By.CSS_SELECTOR, 'div.btn_wp > div.btn_primary')
    login_submit_button.click()

    # 等待登录成功
    time.sleep(5)  # 延迟5秒钟，等待页面加载完成

    # 找到页面中所有的图片标签
    img_elements = driver.find_elements(By.TAG_NAME, 'img')

    # 确保保存图片的文件夹存在
    os.makedirs(folder_path, exist_ok=True)

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
            except Exception as e:
                print(f"Failed to download image {img_url}: {e}")

    # 关闭 WebDriver
    driver.quit()

# 你要下载图片的网页链接
url = "https://space.bilibili.com/3493276617279770"
# 保存图片的文件夹路径
folder_path = "downloaded_images"
# 你的登录用户名和密码
username = "username"
password = "password"

login_and_download_images(url, folder_path, username, password)
