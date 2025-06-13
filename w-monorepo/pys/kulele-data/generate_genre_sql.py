import json

with open("merged_games.json", "r", encoding="utf-8") as f:
    games = json.load(f)

genre_map = {}

for game in games:
    for genre in game.get("genres", []):
        genre_id_str = genre.get("id", "").strip()
        name = genre.get("name", "").strip().replace("'", "''")

        # 跳过没有 id 或 name 的 genre
        if not genre_id_str or not name:
            continue

        try:
            genre_id = int(genre_id_str)
            genre_map[genre_id] = name
        except ValueError:
            print(f"⚠️ 跳过非法 genre id: {genre_id_str}")
            continue

# 写入 SQL 文件
with open("insert_genres.sql", "w", encoding="utf-8") as f:
    f.write("-- SQL insert statements for genre table\n")
    if genre_map:
        f.write("INSERT INTO public.genre(id, description, name) VALUES\n")
        rows = [f"  ({gid}, '', '{gname}')" for gid, gname in genre_map.items()]
        f.write(",\n".join(rows))
        f.write(";\n")
    else:
        f.write("-- 没有可插入的 genre 数据\n")

print("✅ insert_genres.sql 已生成，共生成", len(genre_map), "条 genre")
