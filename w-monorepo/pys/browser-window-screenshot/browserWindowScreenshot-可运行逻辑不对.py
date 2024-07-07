from selenium import webdriver
from selenium.webdriver.chrome.options import Options

# Chrome WebDriver 配置是正确的
def capture_browser_window_screenshot():
    # 设置 Chrome WebDriver 的选项
    chrome_options = Options()
    chrome_options.binary_location = 'C:/Program Files/Google/Chrome/Application/chrome.exe'

    # 初始化 Chrome WebDriver，并将选项传递给它
    driver = webdriver.Chrome(options=chrome_options)

    # 最大化窗口
    driver.maximize_window()

    # 截取当前窗口截图
    driver.save_screenshot("browser_screenshot.png")
    print("浏览器窗口截图已保存为 browser_screenshot.png")

    # 关闭 WebDriver
    driver.quit()

if __name__ == "__main__":
    capture_browser_window_screenshot()
