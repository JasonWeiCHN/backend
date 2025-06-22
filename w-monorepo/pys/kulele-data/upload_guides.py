import json
import requests

BASE_URL = 'http://localhost:8081/api/games'
JSON_FILE = 'games_map.json'

def load_json():
    with open(JSON_FILE, 'r', encoding='utf-8') as f:
        return json.load(f)

def get_game_name_id_map():
    """从后端获取所有游戏列表，返回 {name: id} 映射"""
    response = requests.get(BASE_URL)
    response.raise_for_status()
    games = response.json()
    return {game['name']: game['id'] for game in games}

def update_guides(game_id, guides):
    url = f'{BASE_URL}/{game_id}/guides'
    payload = {'guides': guides}
    response = requests.put(url, json=payload)
    if response.status_code == 200:
        print(f'✅ 攻略已更新: game_id = {game_id}')
    else:
        print(f'❌ 更新失败: game_id = {game_id}, status = {response.status_code}, error = {response.text}')

def main():
    data = load_json()
    name_to_id = get_game_name_id_map()

    for game_key, game_data in data.items():
        name = game_data.get('name')
        guides = game_data.get('guides')

        if not name or not guides:
            print(f'⚠️ 跳过无效条目: {game_key}')
            continue

        game_id = name_to_id.get(name)
        if not game_id:
            print(f'❌ 未找到游戏ID: {name}')
            continue

        update_guides(game_id, guides)

if __name__ == '__main__':
    main()
