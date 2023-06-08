-- 删除名为public.picture的表，如果存在的话
DROP TABLE IF EXISTS public.picture;

-- 创建名为public.picture的表，如果不存在的话
CREATE TABLE IF NOT EXISTS public.picture (
    picture_id SERIAL PRIMARY KEY, -- 图片的唯一标识符
    name VARCHAR(255) NOT NULL, -- 图片的名称，最大长度为255个字符，不能为空
    hash VARCHAR(255) NOT NULL, -- 图片的哈希值，最大长度为255个字符，不能为空
    search_key VARCHAR(255) NOT NULL, -- 图片的搜索关键字，最大长度为255个字符，不能为空
    category VARCHAR(255), -- 图片的分类，最大长度为255个字符，可为空
    size INTEGER NOT NULL, -- 图片的大小（以字节为单位），不能为空
    create_time TIMESTAMP NOT NULL DEFAULT NOW(), -- 图片的创建时间，默认为当前时间，不能为空
    update_time TIMESTAMP NOT NULL DEFAULT NOW() -- 图片的更新时间，默认为当前时间，不能为空
);
