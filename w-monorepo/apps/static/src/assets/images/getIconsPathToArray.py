import os
import json

def list_files(directory):
    """
    遍历指定目录及其子目录，获取所有文件的路径
    :param directory: 待遍历的目录路径
    :return: 文件路径列表
    """
    files_list = []

    for root, dirs, files in os.walk(directory):
        for file in files:
            file_path = os.path.join(root, file)
            files_list.append(file_path)

    return files_list

def generate_directory_structure(directory, prefix=""):
    """
    生成子目录名及其下文件名的双层数组对象
    :param directory: 待遍历的目录路径
    :param prefix: 前缀字符串
    :return: 对象数组
    """
    directory_structure = []

    for root, dirs, files in os.walk(directory):
        dir_name = os.path.basename(root)
        files_info = []
        for file in files:
            file_name = os.path.splitext(file)[0]
            file_path = os.path.join(root, file)
            if prefix:
                file_path = os.path.join(prefix, file_path)
            files_info.append({"name": file_name, "path": file_path})
        directory_structure.append({"directory": dir_name, "files": files_info})

    return directory_structure

def generate_json(directory_structure):
    """
    生成JSON文件
    :param directory_structure: 对象数组
    """
    with open("directory_structure.json", "w") as json_file:
        json.dump(directory_structure, json_file, indent=4)

if __name__ == "__main__":
    directory = input("请输入要遍历的目录路径：")
    prefix = input("请输入要添加的前缀字符串（如果不需要可以留空）：")
    directory_structure = generate_directory_structure(directory, prefix)
    generate_json(directory_structure)
