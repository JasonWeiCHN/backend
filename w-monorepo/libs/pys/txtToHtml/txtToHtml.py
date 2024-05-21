def txt_to_html(input_file, output_file):
    try:
        # 读取输入文件的内容
        with open(input_file, 'r', encoding='utf-8') as file:
            lines = file.readlines()

        # 处理每一段落和空行
        paragraphs = []
        for line in lines:
            stripped_line = line.strip()
            if stripped_line:
                paragraphs.append(f"<p>{stripped_line}</p>")
            else:
                paragraphs.append("<br/>")

        # 将所有段落和 <br> 标签压缩成一行
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
