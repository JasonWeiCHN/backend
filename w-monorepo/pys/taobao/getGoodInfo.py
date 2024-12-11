from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
import requests
import os
from urllib.parse import urljoin

URL = 'https://detail.tmall.com/item.htm?abbucket=11&id=840662869538&ns=1&priceTId=210127cc17337059168582762e0b24&skuId=5839230699192&spm=a21n57.1.item.4.5be4523cVyVd3h&utparam=%7B%22aplus_abtest%22%3A%22c9e6c812d4bdc2d718b271f565eaa5d0%22%7D&xxc=taobaoSearch'

# 初始化 WebDriver
options = webdriver.ChromeOptions()
options.add_argument('--headless')  # 无头模式
options.add_argument('--disable-gpu')
service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service, options=options)

# 创建保存图片的文件夹
output_dir = os.path.join(os.getcwd(), 'downloaded_images')
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

try:
    # 打开目标页面
    driver.get(URL)

    # 等待页面加载完成
    wait = WebDriverWait(driver, 10)
    wait.until(EC.presence_of_element_located((By.TAG_NAME, 'body')))

    # 找出所有以 'BasicContent--' 开头的 div 元素
    elements = driver.find_elements(By.CSS_SELECTOR, "div[class^='BasicContent--']")

    # 获取 div 内所有的 img 标签
    for idx, element in enumerate(elements, start=1):
        imgs = element.find_elements(By.TAG_NAME, 'img')
        for img_idx, img in enumerate(imgs, start=1):
            img_url = img.get_attribute('src')
            if img_url:
                # 处理相对路径的情况
                img_url = urljoin(URL, img_url)

                # 获取图片文件名
                img_name = f"image_{idx}_{img_idx}.jpg"
                img_path = os.path.join(output_dir, img_name)

                # 下载图片
                try:
                    response = requests.get(img_url)
                    response.raise_for_status()  # 检查请求是否成功
                    with open(img_path, 'wb') as file:
                        file.write(response.content)
                    print(f"下载图片 {img_name} 成功！")
                except Exception as e:
                    print(f"下载图片失败: {e}")

finally:
    driver.quit()
