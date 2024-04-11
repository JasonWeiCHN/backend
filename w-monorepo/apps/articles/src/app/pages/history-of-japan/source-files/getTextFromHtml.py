from bs4 import BeautifulSoup
import chardet

def extract_font_text_and_wrap_with_p(html_file_path):
    # 使用chardet检测文件编码
    with open(html_file_path, 'rb') as file:
        raw_data = file.read()
        detected_encoding = chardet.detect(raw_data)['encoding']

    # 读取HTML文件
    with open(html_file_path, 'r', encoding=detected_encoding) as file:
        html_content = file.read()

    # 使用BeautifulSoup解析HTML
    soup = BeautifulSoup(html_content, 'html.parser')

    # 找到所有的font标签
    font_tags = soup.find_all('font')

    # 保存提取的文本内容
    extracted_text = []

    # 遍历每个font标签，提取文本并用p标签包装
    for font_tag in font_tags:
        font_text = font_tag.get_text()
        extracted_text.append(f'<p>{font_text}</p>')

    # 将提取的文本内容写入新的HTML5文件
    with open('extracted_text.html', 'w', encoding='utf-8') as file:
        file.write('<!DOCTYPE html>\n')
        file.write('<html lang="en">\n')
        file.write('<head>\n')
        file.write('<meta charset="UTF-8">\n')
        file.write('<title>Extracted Text</title>\n')
        file.write('</head>\n')
        file.write('<body>\n')
        file.write('\n'.join(extracted_text))
        file.write('\n</body>\n')
        file.write('</html>')

# 调用函数并传入HTML文件路径
html_file_path = 'chapter1.htm'  # 请将此处替换为你的HTML文件路径
extract_font_text_and_wrap_with_p(html_file_path)
