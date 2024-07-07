def convert_text_to_html(input_file, output_file):
    with open(input_file, 'r', encoding='utf-8') as file:
        lines = file.readlines()

    # 创建HTML文件并写入头部信息
    with open(output_file, 'w', encoding='utf-8') as file:
        file.write('<div class="static-article">\n')

        # 初始化变量
        in_en_block = False
        in_cn_block = False
        current_block = []

        def write_block(block, lang):
            if block:
                file.write(f'  <div class="block {lang}">\n')
                for line in block:
                    file.write(f'    <p>{line.strip()}</p>\n')
                file.write('  </div>\n')

        for line in lines:
            # 如果是空行，跳过
            if not line.strip():
                continue

            # 判断当前行是否为中文
            is_chinese = any('\u4e00' <= char <= '\u9fff' for char in line)

            # 根据语言块的类型处理
            if is_chinese:
                if in_en_block:
                    write_block(current_block, 'en')
                    current_block = []
                in_en_block = False
                in_cn_block = True
            else:
                if in_cn_block:
                    write_block(current_block, 'cn')
                    current_block = []
                in_cn_block = False
                in_en_block = True

            current_block.append(line)

        # 处理最后一个块
        if in_en_block:
            write_block(current_block, 'en')
        elif in_cn_block:
            write_block(current_block, 'cn')

        # 写入尾部信息
        file.write('</div>')

# 指定输入和输出文件路径
input_file = 'input.txt'
output_file = 'output.html'

# 调用函数进行转换
convert_text_to_html(input_file, output_file)
