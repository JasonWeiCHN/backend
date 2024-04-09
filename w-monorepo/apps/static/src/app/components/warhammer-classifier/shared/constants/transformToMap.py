import json
import codecs

def transform_to_map(data):
    result_map = {}
    for entry in data:
        parent_id = entry['id']
        files = entry['files']
        for file_entry in files:
            file_id = file_entry['id']
            key = f"{parent_id}_{file_id}"
            result_map[key] = {
                'parentId': parent_id,
                'file': file_entry
            }
    return result_map

def main():
    input_file_path = 'array.json'  # 输入数组 JSON 文件路径
    output_file_path = 'output.json'  # 输出 Map JSON 文件路径

    with codecs.open(input_file_path, 'r', encoding='utf-8') as input_file:
        data = json.load(input_file)

    map_data = transform_to_map(data)

    with codecs.open(output_file_path, 'w', encoding='utf-8') as output_file:
        json.dump(map_data, output_file, ensure_ascii=False, indent=4)

    print("Map JSON 文件已生成.")

if __name__ == "__main__":
    main()
