import requests
from bs4 import BeautifulSoup
import os

# 指定index来下载
# 请求页面
url = 'https://totalwarwarhammer.fandom.com/wiki/Total_War:_Warhammer_Wiki'
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')

# 查找所有包含 .fpbox 类的 div 元素下的 img 标签
fpbox_divs = soup.select('#fproles center div')

# 指定要下载的 div 的索引
specified_index = 22  # 这里设置要下载的 div 的索引，你可以根据需要修改

# 获取指定索引的 div
specified_fpbox_div = fpbox_divs[specified_index]

# 获取文件夹名称
heading_div = specified_fpbox_div.find('div', class_='heading')
folder_name = heading_div.a.text if heading_div else f'Unknown_{specified_index}'  # 如果没有找到对应的标题，则使用 'Unknown_{index}'
print(folder_name)

# 创建文件夹保存图片
folder_path = os.path.join('images', folder_name)
os.makedirs(folder_path, exist_ok=True)

# 查找当前指定 div 内的所有图片
img_tags = specified_fpbox_div.find_all('img')
for img_tag in img_tags:
    print(img_tag)
    img_url = img_tag.get('data-src')  # 获取 data-src 属性值
    if not img_url:  # 如果 data-src 属性没有数据
        img_url = img_tag.get('src')  # 则尝试获取 src 属性值
    if img_url:
        print(img_url)
        if '.png' in img_url:
            img_url = img_url.split('.png')[0] + '.png'  # 截取 .png 之前的部分并添加 .png
        img_name = img_url.split('/')[-1]  # 获取图片名称
        img_data = requests.get(img_url).content
        with open(os.path.join(folder_path, img_name), 'wb') as img_file:
            img_file.write(img_data)
