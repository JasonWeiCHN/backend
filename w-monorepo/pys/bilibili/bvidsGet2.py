import json

# 读取JSON文件
with open('1.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# 提取bvid
bvid_list = [item['bvid'] for item in data]

# 写入新的JSON文件 (单行数组)
with open('bvids.json', 'w', encoding='utf-8') as f:
    json.dump(bvid_list, f, ensure_ascii=False)

print("新的JSON文件已生成：bvids.json")
