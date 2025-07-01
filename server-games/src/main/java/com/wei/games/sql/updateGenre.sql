-- 参数定义（替换成你实际想更新的 ID）
DO $$
DECLARE
old_id TEXT := 'action';        -- 原 genre.id
    new_id TEXT := 'action_new';    -- 新 genre.id
    genre_name TEXT;
    genre_desc TEXT;
BEGIN
    -- Step 1: 获取旧 genre 的 name 和 description
SELECT name, description INTO genre_name, genre_desc
FROM genre
WHERE id = old_id;

-- Step 2: 插入新的 genre 记录（如果不存在）
IF NOT EXISTS (SELECT 1 FROM genre WHERE id = new_id) THEN
        INSERT INTO genre (id, name, description)
        VALUES (new_id, genre_name, genre_desc);
END IF;

    -- Step 3: 更新 game_genre 表中的外键引用
UPDATE game_genre
SET genre_id = new_id
WHERE genre_id = old_id;

-- Step 4: 删除旧的 genre 记录
DELETE FROM genre
WHERE id = old_id;
END $$;
