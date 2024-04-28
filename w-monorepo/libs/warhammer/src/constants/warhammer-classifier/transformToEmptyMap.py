import json

# 读取原始JSON文件
with open('array.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# 创建一个新的JSON对象
new_data = {}

# 遍历每个类别
for classifier in data:
    # 遍历每个文件
    for file in classifier['files']:
        # 获取文件ID
        file_id = file['id']
        # 设置ID为键，空数组为值
        new_data[file_id] = []

# 将新数据写入新的JSON文件
with open('warhammer-classifier-empty-map.json', 'w', encoding='utf-8') as f:
    json.dump(new_data, f, indent=4, ensure_ascii=False)

print("New JSON file created successfully!")
