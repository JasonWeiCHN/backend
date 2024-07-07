import os
import shutil

def copy_images(source_dir, dest_dir):
    # 检查目标文件夹是否存在，如果不存在则创建
    if not os.path.exists(dest_dir):
        os.makedirs(dest_dir)

    # 遍历源文件夹中的子目录
    for subdir, _, files in os.walk(source_dir):
        # 在目标文件夹中创建相同的子目录结构
        dest_subdir = os.path.join(dest_dir, os.path.relpath(subdir, source_dir))
        if not os.path.exists(dest_subdir):
            os.makedirs(dest_subdir)

        # 遍历子目录中的文件
        for file in files:
            if file == 'first_frame.png' or file == 'min.gif':
                # 如果文件是目标文件，则复制到目标文件夹中
                shutil.copy(os.path.join(subdir, file), dest_subdir)

if __name__ == "__main__":
    source_dir = r'F:\biliGet\beauty'
    dest_dir = r'F:\biliGet\beauty-web'
    copy_images(source_dir, dest_dir)
    print("操作完成")
