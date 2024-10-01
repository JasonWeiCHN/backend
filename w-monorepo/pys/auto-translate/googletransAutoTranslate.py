import re
from googletrans import Translator

def preprocess_text(text):
    # 合并多余的空行和不必要的换行符
    text = re.sub(r'\s*\n\s*', ' ', text)  # 将多余的换行符替换为空格
    text = re.sub(r'\s+', ' ', text)  # 将多余的空格替换为一个空格
    text = text.strip()  # 去除首尾多余的空格
    return text

def generate_html(text, output_html):
    translator = Translator()

    # 预处理文本
    text = preprocess_text(text)

    # 将文本按句子分割
    paragraphs = re.split(r'(?<=[.!?])\s+', text)

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
