import os
import requests
from bs4 import BeautifulSoup

# 创建本地目录
output_directory = "苍穹神剑"
os.makedirs(output_directory, exist_ok=True)

# 动态生成目标网址列表
start_page = 150
end_page = 159
base_url = "http://gulongxiaoshuo.com/cangqiongshenjian/{}.html"
urls = [base_url.format(page) for page in range(start_page, end_page + 1)]

for url in urls:
    # 发送HTTP请求获取页面内容
    response = requests.get(url)
    response.encoding = 'utf-8'  # 设置编码为UTF-8
    soup = BeautifulSoup(response.text, "html.parser")

    # 获取标题和所有<p>的文本内容（排除最后一个<p>）
    title = soup.select_one("#content > .container > .post > h1").text.strip()

    # 选中所有<p>元素
    all_paragraphs = soup.select("#content > .container > .post > div.entry > p")

    # 移除最后一个<p>
    if all_paragraphs:
        all_paragraphs.pop()

    # 使用生成器表达式获取所有<p>元素的文本内容
    content = "\n\n".join(p.text.strip() for p in all_paragraphs)

    # 构建文件名和保存路径
    filename = f"{output_directory}/{title}.txt"
    with open(filename, "w", encoding="utf-8") as file:
        file.write(content)

    print(f"已保存：{filename}")
    