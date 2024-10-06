import PyPDF2

def pdf_to_text(pdf_file, txt_file):
    # 打开PDF文件
    with open(pdf_file, 'rb') as file:
        # 创建PDF阅读器对象
        reader = PyPDF2.PdfReader(file)

        # 提取每一页的文本
        with open(txt_file, 'w', encoding='utf-8') as output_file:
            for page_num in range(len(reader.pages)):
                page = reader.pages[page_num]
                text = page.extract_text()
                output_file.write(text)
                output_file.write('\n')  # 分隔每一页

    print(f"PDF文本已成功提取到 {txt_file}")

# 示例用法
pdf_file_path = '提格兰-叛教者朱利安时代的故事.pdf'  # 你的PDF文件路径
txt_file_path = '提格兰-叛教者朱利安时代的故事.txt'  # 输出的TXT文件路径

pdf_to_text(pdf_file_path, txt_file_path)
