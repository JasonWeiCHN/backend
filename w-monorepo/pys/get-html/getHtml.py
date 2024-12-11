import requests

URL = 'https://www.gushiwen.cn/gushi/sanbai.aspx'

def fetch_resource_with_browser_headers():
    # 定义模拟浏览器的请求头
    headers = {
        "User-Agent": (
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
            "(KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36"
        )
    }

    try:
        # 发出HTTP GET请求，带上请求头
        response = requests.get(URL, headers=headers)

        # 检查响应状态码
        if response.status_code == 200:
            print("资源获取成功！")
            print("内容如下：")
            print(response.text)  # 打印资源内容
        else:
            print(f"无法获取资源，HTTP 状态码: {response.status_code}")
    except requests.exceptions.RequestException as e:
        print(f"请求发生错误: {e}")

# 示例使用
fetch_resource_with_browser_headers()

