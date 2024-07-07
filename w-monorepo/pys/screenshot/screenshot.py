from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from PIL import Image
import time
import os

# 设置ChromeDriver路径
CHROMEDRIVER_PATH = r'F:/chromedriver-win64/chromedriver.exe'

# 设置要加载的URL，这里假设是本地文件
URL = 'http://localhost:4201/article/Warherd_of_the_One_Eye'

# 初始化WebDriver
options = webdriver.ChromeOptions()
options.add_argument('--headless')  # 无头模式
options.add_argument('--disable-gpu')
service = ChromeService(executable_path=CHROMEDRIVER_PATH)
driver = webdriver.Chrome(service=service, options=options)

try:
    driver.get(URL)

    # 等待页面加载并找到目标元素
    wait = WebDriverWait(driver, 10)
    clan_elements = wait.until(EC.presence_of_all_elements_located((By.CSS_SELECTOR, '.clan-info')))

    for index, element in enumerate(clan_elements):
        # 截取整个页面
        screenshot_path = f'screenshot_{index}.png'
        driver.save_screenshot(screenshot_path)

        # 获取元素的位置和大小
        location = element.location
        size = element.size
        x = location['x']
        y = location['y']
        width = location['x'] + size['width']
        height = location['y'] + size['height']

        # 打开截图文件并裁剪
        image = Image.open(screenshot_path)
        image = image.crop((x, y, width, height))

        # 保存裁剪后的图像
        cropped_image_path = f'clan_{index}.png'
        image.save(cropped_image_path)

        # 删除原始截图
        os.remove(screenshot_path)
        print(f'Clan {index} saved as {cropped_image_path}')

finally:
    driver.quit()
