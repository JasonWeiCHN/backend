-- ============================
-- 🛠️ 游戏 tag 数据迁移脚本
-- 目标：从旧的 game_tags 表迁移到 tag 和 game_tag 多对多结构
-- 执行环境：PostgreSQL
-- 日期：2025-07-01
-- ============================

BEGIN;

-- Step 0: 备份原始数据（可选）
CREATE TABLE IF NOT EXISTS game_tags_backup AS
SELECT * FROM game_tags;

-- Step 1: 创建 tag 表（如尚未存在）
CREATE TABLE IF NOT EXISTS tag (
                                   id VARCHAR PRIMARY KEY,
                                   name VARCHAR NOT NULL,
                                   description TEXT
);

-- Step 2: 创建 game_tag 关联表（如尚未存在）
CREATE TABLE IF NOT EXISTS game_tag (
                                        game_id BIGINT NOT NULL,
                                        tag_id VARCHAR NOT NULL,
                                        PRIMARY KEY (game_id, tag_id),
    FOREIGN KEY (game_id) REFERENCES game(id),
    FOREIGN KEY (tag_id) REFERENCES tag(id)
    );

-- Step 3: 插入唯一 tag 到 tag 表中（跳过已存在的 id）
INSERT INTO tag (id, name)
SELECT DISTINCT tag, tag
FROM game_tags
WHERE tag IS NOT NULL
  AND tag NOT IN (SELECT id FROM tag);

-- Step 4: 建立 game 与 tag 的关系
-- 通过将旧 game_tags 中的 tag 作为 tag_id，插入 game_tag 表
INSERT INTO game_tag (game_id, tag_id)
SELECT game_id, tag
FROM game_tags
WHERE tag IS NOT NULL;

-- Step 5: （可选）检查迁移结果
-- SELECT * FROM tag;
-- SELECT * FROM game_tag;

-- Step 6: （可选）删除旧表（⚠️ 建议手动删除）
-- DROP TABLE game_tags;

COMMIT;

-- ✅ 结束
-- 现在你可以将 Game 实体中的 tags 改为多对多关联 List<Tag>
