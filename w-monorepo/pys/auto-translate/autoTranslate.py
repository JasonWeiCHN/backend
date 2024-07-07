from googletrans import Translator

def generate_html(text, output_html):
    translator = Translator()

    # 将文本按段落分割
    paragraphs = text.split('\n')

    # 打开输出的HTML文件
    with open(output_html, 'w', encoding='utf-8') as file:
        # 写入HTML头部
        file.write('<html>\n<head>\n<title>Translated Text</title>\n<meta charset="UTF-8">\n</head>\n<body>\n')

        # 处理每个段落
        for paragraph in paragraphs:
            if paragraph.strip():  # 检查段落不为空
                # 英文
                file.write(f'<p>{paragraph}</p>\n')

                # 中文翻译
                translated = translator.translate(paragraph, src='en', dest='zh-cn').text
                file.write(f'<p>{translated}</p>\n')

        # 写入HTML尾部
        file.write('</body>\n</html>')

    print(f"HTML文件已成功生成: {output_html}")


# 修改此处：从txt文件读取内容
def read_txt_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()
    return content

# 示例用法：读取txt文件
txt_file_path = 'input_text.txt'  # 输入的txt文件路径
output_html_path = 'translated_text.html'  # 输出的HTML文件路径

# 读取txt文件中的内容
english_text = read_txt_file(txt_file_path)

# 生成HTML文件
generate_html(english_text, output_html_path)
