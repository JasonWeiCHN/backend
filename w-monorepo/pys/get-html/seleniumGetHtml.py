from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

URL = 'https://detail.tmall.com/item.htm?abbucket=11&id=840662869538&ns=1&priceTId=210127cc17337059168582762e0b24&skuId=5839230699192&spm=a21n57.1.item.4.5be4523cVyVd3h&utparam=%7B%22aplus_abtest%22%3A%22c9e6c812d4bdc2d718b271f565eaa5d0%22%7D&xxc=taobaoSearch'

# 初始化 WebDriver
options = webdriver.ChromeOptions()
options.add_argument('--headless')  # 无头模式
options.add_argument('--disable-gpu')
service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service, options=options)

try:
    # 打开目标页面
    driver.get(URL)

    # 获取 HTML 源码
    html_source = driver.page_source
    print("获取的 HTML 内容如下：")
    print(html_source)
finally:
    driver.quit()
