import os
import shutil

def is_image_file(filename):
    """判断文件是否是图片格式"""
    image_extensions = {'.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff', '.webp'}
    return os.path.splitext(filename)[1].lower() in image_extensions

def copy_images(src_dir, dest_dir):
    """遍历源目录下的所有子目录，复制图片到目标目录"""
    if not os.path.exists(dest_dir):
        os.makedirs(dest_dir)

    for root, _, files in os.walk(src_dir):
        for file in files:
            if is_image_file(file):
                src_path = os.path.join(root, file)
                dest_path = os.path.join(dest_dir, file)

                # 避免文件重名
                base, ext = os.path.splitext(file)
                counter = 1
                while os.path.exists(dest_path):
                    dest_path = os.path.join(dest_dir, f"{base}_{counter}{ext}")
                    counter += 1

                shutil.copy2(src_path, dest_path)
                print(f"复制 {src_path} -> {dest_path}")

if __name__ == "__main__":
    source_directory = "F:/output_images"  # 这里填入你的源目录路径
    destination_directory = "F:/backend/w-monorepo/apps/static-game-cartridge/src/assets/images/switch"  # 这里填入你的目标目录路径
    copy_images(source_directory, destination_directory)
    print("图片复制完成！")
