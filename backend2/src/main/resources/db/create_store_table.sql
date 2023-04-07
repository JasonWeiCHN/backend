DROP TABLE IF EXISTS public.store;

CREATE TABLE IF NOT EXISTS public.store (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    saas_id INTEGER NOT NULL,
    description TEXT,
    logo_url VARCHAR(255),
    contact_name VARCHAR(255),
    contact_email VARCHAR(255),
    contact_phone VARCHAR(255),
    address VARCHAR(255),
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
    FOREIGN KEY (saas_id) REFERENCES saas(id)
);


-- id: 商店ID，主键
-- name: 商店名称，不能为空
-- saas_id: 所属的SAAS系统ID，不能为空，外键引用了SAAS表的ID
-- description: 商店描述
-- logo_url: 商店LOGO的URL地址
-- contact_name: 商店联系人名称
-- contact_email: 商店联系人邮箱
-- contact_phone: 商店联系人电话
-- address: 商店地址
-- created_at: 商店创建时间，默认为当前时间
-- updated_at: 商店最后更新时间，默认为当前时间