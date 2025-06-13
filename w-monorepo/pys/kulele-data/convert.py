import json
from datetime import datetime

# 读取 games.json
with open("games.json", "r", encoding="utf-8") as f:
    games = json.load(f)

# 读取 games_map.json
with open("games_map.json", "r", encoding="utf-8") as f:
    games_map = json.load(f)

def parse_date(date_str):
    try:
        return datetime.strptime(date_str.strip(), "%Y 年 %m 月 %d 日").strftime("%Y-%m-%d")
    except Exception:
        return None

converted_games = []

for game in games:
    game_id = str(game["id"])
    base = {
        "id": game["id"],
        "name": game["name"],
        "image": game["image"],
        "tags": game.get("type", []),
        "searchKeywords": game.get("search", "")
    }

    # 来自 games_map.json 的额外信息
    extra = games_map.get(game_id, {})
    base["description"] = extra.get("short_description", "")
    base["releaseDate"] = parse_date(extra.get("release_date", {}).get("date", "")) if extra.get("release_date") else None

    # genres 转换为 IGenre[]
    genres = []
    for genre in extra.get("genres", []):
        genres.append({
            "id": genre.get("id", ""),
            "name": genre.get("description", "")
        })
    if genres:
        base["genres"] = genres

    # guides 转换为 IGameGuide[]
    guides = []
    for guide in extra.get("guides", []):
        guides.append({
            "title": guide["title"],
            "description": guide.get("description", ""),
            "author": guide.get("author", ""),
            "sourceUrl": guide["sourceUrl"]
        })
    if guides:
        base["guides"] = guides

    converted_games.append(base)

# 导出为 JSON 文件
with open("merged_games.json", "w", encoding="utf-8") as f:
    json.dump(converted_games, f, ensure_ascii=False, indent=2)

print("✅ 已成功导出 merged_games.json，共包含 {} 个游戏".format(len(converted_games)))
