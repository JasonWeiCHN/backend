from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
from PIL import Image
import os

# 常量配置
BASE_URL = 'http://localhost:4201/article/'
CLAN_IDS = ["Warherd_of_the_One_Eye", "Couronne", "Disciples_of_Hashut", "Cult_of_Pleasure", "Karaz_a_Karak", "Reikland", "The_Ice_Court", "Last_Defenders", "Khemri", "The_Awakened", "Heralds_of_Ariel" ]  # 根据实际数据替换
OUTPUT_DIR = r'F:/tmp'  # 配置所有图片保存的路径文件夹

# 初始化WebDriver
options = webdriver.ChromeOptions()
options.add_argument('--headless')  # 无头模式
options.add_argument('--disable-gpu')
service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service, options=options)

# 创建输出文件夹（如果不存在）
if not os.path.exists(OUTPUT_DIR):
    os.makedirs(OUTPUT_DIR)

try:
    for clan_id in CLAN_IDS:
        url = f'{BASE_URL}{clan_id}'
        driver.get(url)

        # 等待页面加载并找到目标元素
        wait = WebDriverWait(driver, 10)
        target_element = wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, '.top-info')))

        # 截取整个页面
        screenshot_path = os.path.join(OUTPUT_DIR, f'{clan_id}_screenshot.png')
        driver.save_screenshot(screenshot_path)

        # 获取元素的位置和大小
        location = target_element.location
        size = target_element.size
        x = location['x']
        y = location['y']
        width = location['x'] + size['width']
        height = location['y'] + size['height']

        # 打开截图文件并裁剪
        image = Image.open(screenshot_path)
        image = image.crop((x, y, width, height))

        # 保存裁剪后的图像
        cropped_image_path = os.path.join(OUTPUT_DIR, f'{clan_id}.png')
        image.save(cropped_image_path)

        # 删除原始截图
        os.remove(screenshot_path)
        print(f'Clan {clan_id} saved as {cropped_image_path}')

finally:
    driver.quit()
