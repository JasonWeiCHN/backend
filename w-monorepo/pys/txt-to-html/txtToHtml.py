import re

def txt_to_html(input_file, output_file):
    try:
        # 读取输入文件的内容
        with open(input_file, 'r', encoding='utf-8') as file:
            content = file.read()

        # 使用正则表达式清除多余的换行符，使每个段落在一行
        content = re.sub(r'\n+', ' ', content)  # 将多个换行符替换为空格
        content = content.strip()  # 去除首尾多余的空格

        # 将文本按句号、感叹号、问号等标点符号分割
        sentences = re.split(r'([.!?])', content)  # 保留标点符号

        paragraphs = []
        current_paragraph = ''

        for i in range(0, len(sentences)-1, 2):  # 每两个元素组合为一个完整的句子
            sentence = sentences[i].strip() + sentences[i+1].strip()  # 将句子与标点符号合并
            if sentence:
                if current_paragraph:
                    current_paragraph += ' ' + sentence  # 合并句子
                else:
                    current_paragraph = sentence

            # 如果句子以句号、感叹号或问号结尾，将其视为一个完整的段落
            if sentence[-1] in ['.', '!', '?']:
                paragraphs.append(f"<p>{current_paragraph}</p>\n")  # 添加换行符
                current_paragraph = ''  # 清空当前段落，准备下一个段落

        # 如果最后剩余未处理的部分，将其添加为段落
        if current_paragraph:
            paragraphs.append(f"<p>{current_paragraph}</p>\n")

        # 将所有段落连接成一个字符串
        html_content = ''.join(paragraphs)

        # 将生成的 HTML 内容写入输出文件
        with open(output_file, 'w', encoding='utf-8') as file:
            file.write(html_content)

        print(f"HTML content has been successfully written to {output_file}")
    except Exception as e:
        print(f"An error occurred: {e}")

# 示例用法
input_file = 'input.txt'  # 替换为你的输入文件路径
output_file = 'output.html'  # 替换为你希望输出的文件路径

txt_to_html(input_file, output_file)
