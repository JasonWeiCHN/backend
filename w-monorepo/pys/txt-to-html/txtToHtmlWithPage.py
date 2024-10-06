import re
import math

def txt_to_html(input_file, output_file_prefix, num_pages=10):
    try:
        # 读取输入文件的内容
        with open(input_file, 'r', encoding='utf-8') as file:
            content = file.read()

        # 清除多余的换行符并整理段落
        content = re.sub(r'\n+', ' ', content)  # 将多个换行符替换为空格
        content = content.strip()  # 去除首尾空格

        # 匹配完整句子的正则表达式：匹配句号、感叹号或问号，并可选地跟上闭合引号
        sentence_end_pattern = re.compile(r'([^.!?]*[.!?]["”\']?)')

        # 查找所有匹配的句子
        sentences = sentence_end_pattern.findall(content)

        paragraphs = []
        current_paragraph = ''

        for sentence in sentences:
            sentence = sentence.strip()  # 去除每个句子的首尾空格

            if sentence:
                # 合并句子到当前段落
                if current_paragraph:
                    current_paragraph += ' ' + sentence  # 合并句子
                else:
                    current_paragraph = sentence

                # 如果句子以标点符号和可选引号结尾，将其视为一个完整段落
                if re.search(r'[.!?]["”\']?$', sentence):
                    paragraphs.append(f"<p>{current_paragraph}</p>\n")
                    current_paragraph = ''  # 清空当前段落，准备下一个段落

        # 如果最后剩余未处理的部分，将其添加为段落
        if current_paragraph:
            paragraphs.append(f"<p>{current_paragraph}</p>\n")

        # 计算每个文件应包含的段落数
        num_paragraphs = len(paragraphs)
        paragraphs_per_page = math.ceil(num_paragraphs / num_pages)

        # 分割段落并写入多个 HTML 文件
        for i in range(num_pages):
            start = i * paragraphs_per_page
            end = min((i + 1) * paragraphs_per_page, num_paragraphs)
            html_content = ''.join(paragraphs[start:end])

            output_file = f"{output_file_prefix}_{i+1}.html"
            with open(output_file, 'w', encoding='utf-8') as file:
                file.write(html_content)

            print(f"HTML content for page {i+1} has been successfully written to {output_file}")

    except Exception as e:
        print(f"An error occurred: {e}")

# 示例用法
input_file = 'input.txt'  # 替换为你的输入文件路径
output_file_prefix = 'output'  # 输出文件的前缀
num_pages = 10  # 需要分割的页数

txt_to_html(input_file, output_file_prefix, num_pages)
