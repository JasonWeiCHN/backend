import requests
import os

def download_and_rename_image(image_url, new_name):
    # 发送GET请求下载图片
    response = requests.get(image_url)
    if response.status_code == 200:
        # 提取图片文件的扩展名
        _, ext = os.path.splitext(image_url)
        # 构造保存图片的文件名
        file_name = new_name + ext
        # 保存图片
        with open(file_name, 'wb') as f:
            f.write(response.content)
        print(f"图片已下载并保存为: {file_name}")
    else:
        print("下载图片时出现错误.")

# 你的图片链接和准备取的名字
image_url = "https://i0.hdslb.com/bfs/archive/a45ff7306284ec747ad23eb3df2e9068e42235c6.png"
new_name = "One_Eye2"

# 调用函数下载图片并重命名
download_and_rename_image(image_url, new_name)
