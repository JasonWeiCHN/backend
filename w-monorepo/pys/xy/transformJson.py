import json
import random
import string

def generate_random_id(length=6):
    """生成一个由数字和大小写字母组成的随机字符串"""
    return ''.join(random.choices(string.ascii_letters + string.digits, k=length))

def format_price(price_str):
    """格式化价格，去掉货币符号，保留两位小数"""
    if price_str.startswith("¥"):
        price_num = price_str[1:]
        try:
            formatted_price = f"{float(price_num):.2f}"
            return formatted_price
        except ValueError:
            return price_str
    return price_str

def transform_data(input_file, output_file):
    """读取 JSON 数据，转换格式并保存"""
    with open(input_file, 'r', encoding='utf-8') as f:
        data = json.load(f)

    transformed_data = []
    for item in data:
        random_id = generate_random_id()
        formatted_price = format_price(item["price"])
        transformed_item = {
            "sourceUrl": "",
            "date": "",
            "description": item["title"],
            "detail": json.dumps({"price": {"xy": formatted_price}}, ensure_ascii=False),
            "id": random_id,
            "imageUrl": item["img_src"],
            "tagIds": ["待整理"],
            "title": item["title"],
            "price": {
                "discountPercent": 100,
                "initial": formatted_price,
                "final": formatted_price,
            },
        }
        transformed_data.append(transformed_item)

    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(transformed_data, f, ensure_ascii=False, indent=2)

    print(f"转换完成，结果已保存至 {output_file}")

# 示例调用
transform_data('input.json', 'output.json')
