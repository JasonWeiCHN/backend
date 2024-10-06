import re

def process_text(input_file, output_file):
    try:
        # 读取输入文件
        with open(input_file, 'r', encoding='utf-8') as file:
            content = file.read()

        # 清除形如【数字】或[数字]的字符组
        content = re.sub(r'[【\[]\d+[】\]]', '', content)

        # 处理句号后换行，支持半角句号和全角句号
        # 1. 句号后如果有双引号，则在双引号后换行并加一个空行
        content = re.sub(r'([。.])(\s*)(?=")', r'\1\n\n', content)  # 句号后紧跟双引号时换行并加空行

        # 2. 其他情况下，句号后直接换行并加一个空行
        content = re.sub(r'([。.])(\s*)', r'\1\n\n', content)  # 所有句号后换行并加空行

        # 打印部分内容检查
        print("处理后的内容预览：")
        print(content[:500])  # 打印文件前500个字符

        # 将处理后的内容保存到新的文件
        with open(output_file, 'w', encoding='utf-8') as file:
            file.write(content)

        print(f"处理完成，文件已保存为: {output_file}")

    except FileNotFoundError:
        print(f"文件 {input_file} 未找到，请检查文件路径是否正确。")
    except Exception as e:
        print(f"发生错误: {e}")

# 输入和输出文件路径
input_file = 'input.txt'  # 输入文件路径
output_file = 'output.txt'  # 输出文件路径

# 调用函数进行处理
process_text(input_file, output_file)
