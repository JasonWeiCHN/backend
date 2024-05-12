import os
import json

def generate_hero_data():
    # 获取当前目录下所有文件名
    file_names = os.listdir('.')
    hero_data = []

    for file_name in file_names:
        # 只处理文件，不包括文件夹
        if os.path.isfile(file_name):
            # 加上前缀作为 'heroAvatarPath'
            hero_avatar_path = 'assets/images/lords/' + file_name
            # 文件名作为 'heroName'
            hero_name = os.path.splitext(file_name)[0]
            # 构建英雄数据
            hero = {
                'heroNameEN': hero_name,
                'heroAvatarPath': hero_avatar_path
            }
            hero_data.append(hero)

    return hero_data

def save_to_json(data, filename='_heroes.json'):
    with open(filename, 'w') as f:
        json.dump(data, f, indent=4)

if __name__ == "__main__":
    hero_data = generate_hero_data()
    save_to_json(hero_data)
