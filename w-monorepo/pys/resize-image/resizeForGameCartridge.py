import os
import json
import re
import random
import string
from PIL import Image

def generate_unique_id(length=6):
    """生成唯一 ID"""
    return ''.join(random.choices(string.ascii_letters + string.digits, k=length))

def extract_title_price(filename):
    """从文件名提取 title 和 price"""
    parts = filename.rsplit('-', 1)  # 以最后一个 '-' 分割
    title = parts[0].strip() if len(parts) > 1 else filename.strip()

    price_match = re.search(r'(\d+)', parts[1]) if len(parts) > 1 else None
    price = f"{int(price_match.group(1)):.2f}" if price_match else "0.00"  # 提取价格并格式化

    return title, price

def resize_images_in_directory(input_dir, output_base_dir, target_height):
    """调整图片大小并重命名，同时生成 JSON 数据"""
    data_list = []

    for filename in os.listdir(input_dir):
        input_path = os.path.join(input_dir, filename)

        if os.path.isfile(input_path):
            try:
                # 解析文件名
                title, price = extract_title_price(filename)
                unique_id = generate_unique_id()
                file_extension = os.path.splitext(filename)[1].lower()

                # 创建对应的输出目录
                output_dir = os.path.join(output_base_dir, title)
                os.makedirs(output_dir, exist_ok=True)

                # 目标文件路径
                new_filename = unique_id + file_extension
                output_path = os.path.join(output_dir, new_filename)

                # 打开并调整图片大小
                with Image.open(input_path) as img:
                    width, height = img.size
                    aspect_ratio = width / height
                    new_width = int(target_height * aspect_ratio)
                    resized_img = img.resize((new_width, target_height), Image.LANCZOS)
                    resized_img.save(output_path, quality=95)

                # 构造 JSON 结构
                image_data = {
                    "sourceUrl": "",
                    "date": "",
                    "description": "",
                    "detail": "",
                    "id": unique_id,
                    "imageUrl": f"assets/images/ps5/{unique_id}{file_extension}",
                    "tagIds": [],
                    "title": title,
                    "price": {
                        "discountPercent": 100,
                        "initial": price,
                        "final": price,
                    },
                }

                data_list.append(image_data)
                print(f"图片处理完成：{filename} → {new_filename}")

            except Exception as e:
                print(f"处理 {filename} 时出错: {e}")

    # 保存 JSON 文件
    all_json_data = []
    for image_data in data_list:
        json_output_path = os.path.join(output_base_dir, image_data["title"], "data.json")
        with open(json_output_path, "w", encoding="utf-8") as f:
            json.dump(image_data, f, ensure_ascii=False, indent=4)
        print(f"JSON 文件已保存：{json_output_path}")
        all_json_data.append(image_data)

    # 生成总 JSON 文件
    all_json_output_path = os.path.join(output_base_dir, "all_data.json")
    with open(all_json_output_path, "w", encoding="utf-8") as f:
        json.dump(all_json_data, f, ensure_ascii=False, indent=4)
    print(f"总 JSON 文件已保存：{all_json_output_path}")

# 示例用法
if __name__ == "__main__":
    input_directory = "F:/04.游戏数据采集/新封面/PS5"
    output_directory = "F:/output_images"  # 目标文件夹
    target_height = 240  # 目标高度

    resize_images_in_directory(input_directory, output_directory, target_height)
