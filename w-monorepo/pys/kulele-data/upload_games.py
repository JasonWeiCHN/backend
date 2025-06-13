import json
import requests

BASE_URL = "http://localhost:8081/api/games"

with open("merged_games.json", "r", encoding="utf-8") as f:
    games = json.load(f)

headers = {"Content-Type": "application/json"}

success_count = 0
fail_count = 0

for game in games:
    # 提取 genre id 列表
    genres = [g.get("id") for g in game.get("genres", []) if g.get("id")]

    # 提取 tags，确保是字符串数组
    tags_raw = game.get("tags", [])
    if tags_raw and isinstance(tags_raw[0], dict):
        tags = [t.get("name") for t in tags_raw if "name" in t]
    else:
        tags = tags_raw

    payload = {
        "name": game.get("name"),
        "image": game.get("image"),
        "tags": tags,
        "searchKeywords": game.get("searchKeywords"),
        "path": game.get("path"),
        "releaseDate": game.get("releaseDate"),
        "description": game.get("description"),
        "genres": genres,  # 只传 genre ID 字符串列表
        "video": game.get("video")
        # 不传 guides
    }

    print("上传的 payload：", json.dumps(payload, ensure_ascii=False))  # 打印结构

    try:
        response = requests.post(BASE_URL, json=payload, headers=headers)
        if response.status_code == 200:
            print(f"✅ 成功上传游戏：{game['name']}")
            success_count += 1
        else:
            print(f"❌ 上传失败：{game['name']}，状态码：{response.status_code}，响应：{response.text}")
            fail_count += 1
    except Exception as e:
        print(f"❌ 异常错误：{game['name']}，错误信息：{e}")
        fail_count += 1

print("\n📦 上传完成")
print(f"成功上传：{success_count} 条")
print(f"上传失败：{fail_count} 条")
