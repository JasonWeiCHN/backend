DROP TABLE IF EXISTS public.user_info;
DROP TABLE IF EXISTS public.counts_data;
DROP TABLE IF EXISTS public.order_tag_infos;
DROP TABLE IF EXISTS public.customer_service_info;

-- 创建 user_info 表
CREATE TABLE IF NOT EXISTS public.user_info (
    id SERIAL PRIMARY KEY,
    avatar_url TEXT,
    nick_name TEXT,
    phone_number TEXT,
    gender INTEGER
);

-- 创建 counts_data 表
CREATE TABLE IF NOT EXISTS public.counts_data (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES user_info(id),
    num INTEGER,
    name TEXT,
    type TEXT
);

-- 创建 order_tag_infos 表
CREATE TABLE IF NOT EXISTS public.order_tag_infos (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES user_info(id),
    order_num INTEGER,
    tab_type INTEGER
);

-- 创建 customer_service_info 表
CREATE TABLE IF NOT EXISTS public.customer_service_info (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES user_info(id),
    service_phone TEXT,
    service_time_duration TEXT
);
