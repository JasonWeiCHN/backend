import json

# 读取输入的 JSON 文件
input_file_path = 'clan_data.json'
output_file_path = 'updated_clan_data.json'

with open(input_file_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

# 为每个 clan 和每个文件添加 order 字段
for clan_order, clan in enumerate(data, start=1):
    clan['order'] = clan_order  # 添加 clan 的 order
    for file_order, file in enumerate(clan['files'], start=1):
        file['order'] = file_order  # 添加文件的 order

# 将更新后的数据转换为 JSON 格式字符串
json_output = json.dumps(data, ensure_ascii=False, indent=4)

# 输出 JSON 字符串到文件
with open(output_file_path, 'w', encoding='utf-8') as f:
    f.write(json_output)

print(f"JSON 数据已更新并保存到 '{output_file_path}'")
