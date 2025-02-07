from PIL import Image
import os

def resize_images_in_directory(input_dir, output_dir, target_height):
    # 确保输出目录存在
    os.makedirs(output_dir, exist_ok=True)

    for filename in os.listdir(input_dir):
        input_path = os.path.join(input_dir, filename)
        output_path = os.path.join(output_dir, filename)

        if os.path.isfile(input_path):
            try:
                with Image.open(input_path) as img:
                    # 获取原始尺寸
                    width, height = img.size

                    # 计算新的宽度，保持纵横比
                    aspect_ratio = width / height
                    new_width = int(target_height * aspect_ratio)

                    # 调整大小
                    resized_img = img.resize((new_width, target_height), Image.LANCZOS)

                    # 保存图片，保持原格式
                    resized_img.save(output_path, quality=95)

                    print(f"图片已缩小并保存到 {output_path}，新尺寸: {new_width}x{target_height}")
            except Exception as e:
                print(f"处理 {filename} 时出错: {e}")

# 示例用法
if __name__ == "__main__":
    input_directory = "F:/backend/w-monorepo/apps/static-game-cartridge/src/assets/images/switch"  # 替换为你的输入目录
    output_directory = "output_images"  # 替换为你的输出目录
    target_height = 240  # 目标高度，单位 PX

    resize_images_in_directory(input_directory, output_directory, target_height)
