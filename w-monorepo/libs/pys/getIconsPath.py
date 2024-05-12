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

def files_to_string(files_list, prefix=""):
    """
    将文件路径列表整理成字符串，可添加前缀字符串
    :param files_list: 文件路径列表
    :param prefix: 前缀字符串
    :return: 整理后的字符串
    """
    files_string = '\n'.join(prefix + file_path for file_path in files_list)
    return files_string

def generate_json(files_list, prefix=""):
    """
    生成JSON文件
    :param files_list: 文件路径列表
    :param prefix: 前缀字符串
    """
    files_array = [prefix + file_path for file_path in files_list]
    with open("files_list.json", "w") as json_file:
        json.dump(files_array, json_file, indent=4)

if __name__ == "__main__":
    directory = input("请输入要遍历的目录路径：")
    prefix = input("请输入要添加的前缀字符串（如果不需要可以留空）：")
    generate_array = input("是否生成数组？(输入Y或N): ").lower() == 'y'
    files_list = list_files(directory)
    if generate_array:
        files_array = []
        for file_path in files_list:
            files_array.append(prefix + file_path)
        for file_path in files_array:
            print(file_path)
        generate_json(files_list, prefix)
    else:
        files_string = files_to_string(files_list, prefix)
        print(files_string)
