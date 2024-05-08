from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
import time


# 设置 Chrome WebDriver 的路径
webdriver_path = r'D:\Program Files (x86)\chromedriver-win64\chromedriver.exe'

# 设置 Chrome WebDriver 的选项
chrome_options = Options()
chrome_options.binary_location = 'C:/Program Files/Google/Chrome/Application/chrome.exe'

# 初始化 Chrome WebDriver
driver = webdriver.Chrome(options=chrome_options)

# 要获取的 URL
url = "https://www.bilibili.com/video/BV1VK411t7FA/?spm_id_from=333.999.0.0&vd_source=cf6172bb9e27eef98252db60c4e279fe"

# 打开指定 URL
driver.get(url)
# 使用显式等待，等待页面加载完成
wait = WebDriverWait(driver, 10)
video_element = wait.until(EC.presence_of_element_located((By.TAG_NAME, 'video')))

# 添加延迟，等待视频加载完成
time.sleep(10)  # 延迟5秒钟

# 截取视频标签的截图
screenshot_path = 'screenshot.png'
video_element.screenshot(screenshot_path)

# 关闭 WebDriver
driver.quit()
