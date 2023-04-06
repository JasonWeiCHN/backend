-- 产品信息表:
DROP TABLE IF EXISTS public.product;
CREATE TABLE IF NOT EXISTS public.product (
    id SERIAL PRIMARY KEY,
    saas_id VARCHAR(20) NOT NULL,
    spu_id VARCHAR(20) NOT NULL,
    title VARCHAR(255) NOT NULL,
    primary_image VARCHAR(255) NOT NULL,
    images VARCHAR[] NOT NULL,
    available INTEGER NOT NULL,
    min_sale_price INTEGER NOT NULL,
    old_sale_price INTEGER NOT NULL,
    spu_stock_quantity INTEGER NOT NULL,
    sold_num INTEGER NOT NULL,
    is_put_on_sale INTEGER NOT NULL,
    category_ids VARCHAR[] NOT NULL,
    sku_list JSON NOT NULL,
    spu_tag_list JSON NOT NULL,
    limit_info JSON NOT NULL,
    title VARCHAR(255) NOT NULL,
    create_time TIMESTAMP NOT NULL DEFAULT NOW(),
    update_time TIMESTAMP NOT NULL DEFAULT NOW()
    );

--specification表 自定义分类
DROP TABLE IF EXISTS public.spec;

CREATE TABLE IF NOT EXISTS public.spec (
    spec_id VARCHAR(20) PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    create_time TIMESTAMP NOT NULL DEFAULT NOW(),
    update_time TIMESTAMP NOT NULL DEFAULT NOW()
    );
--specification_value表
DROP TABLE IF EXISTS public.spec_value;

CREATE TABLE IF NOT EXISTS public.spec_value (
    id SERIAL PRIMARY KEY,
    spec_value_id VARCHAR(20) NOT NULL,
    spec_id VARCHAR(20) NOT NULL,
    spec_value VARCHAR(50) NOT NULL,
    image VARCHAR(255),
    create_time TIMESTAMP NOT NULL DEFAULT NOW(),
    update_time TIMESTAMP NOT NULL DEFAULT NOW()
    );
--product_specification表
DROP TABLE IF EXISTS public.product_spec;

CREATE TABLE IF NOT EXISTS public.product_spec (
    id SERIAL PRIMARY KEY,
    product_id VARCHAR(20) NOT NULL,
    spec_id VARCHAR(20) NOT NULL,
    spec_value_id VARCHAR(20) NOT NULL,
    create_time TIMESTAMP NOT NULL DEFAULT NOW(),
    update_time TIMESTAMP NOT NULL DEFAULT NOW()
    );

