import time
import pychrome

def capture_browser_window_screenshot():
    # Connect to the Chrome browser
    browser = pychrome.Browser(url="http://127.0.0.1:9222/json")

    # Wait for 3 seconds to allow the tabs to load
    time.sleep(3)

    # Get the list of tabs
    tabs = browser._tabs

    # Check if there are any tabs
    if not tabs:
        print("没有找到任何标签页，请确保 Chrome 浏览器中已打开至少一个标签页。")
        return

    # Get the first tab (already opened browser window)
    tab = tabs[0]

    # Get the tab's screenshot
    screenshot = tab.capture_screenshot()

    # Save the screenshot to a file
    with open("browser_screenshot.png", "wb") as f:
        f.write(screenshot)

    print("浏览器窗口截图已保存为 browser_screenshot.png")

    # Close the connection
    browser.close_tab(tab)

if __name__ == "__main__":
    capture_browser_window_screenshot()
