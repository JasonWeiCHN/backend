import json

def json_to_txt(json_file, txt_file):
    # 读取JSON文件
    try:
        with open(json_file, 'r', encoding='utf-8') as f:
            json_data = json.load(f)
    except FileNotFoundError:
        print(f"文件 {json_file} 未找到")
        return
    except json.JSONDecodeError:
        print("JSON 文件格式错误")
        return

    # 将JSON数据转换为字符串
    text_data = json.dumps(json_data, ensure_ascii=False, indent=4)  # 以格式化的方式输出

    # 写入TXT文件
    with open(txt_file, 'w', encoding='utf-8') as f:
        f.write(text_data)

    print(f"转换完成，结果已保存到 {txt_file}")

# 示例调用
json_to_txt('cookies.json', 'cookies.txt')
