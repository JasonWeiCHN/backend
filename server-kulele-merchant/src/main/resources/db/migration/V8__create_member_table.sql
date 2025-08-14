CREATE TABLE IF NOT EXISTS member (
    id SERIAL PRIMARY KEY,
    version INTEGER,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    remark VARCHAR(255),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE IF NOT EXISTS member_recharge (
    id SERIAL PRIMARY KEY,
    version INTEGER,
    member_id INTEGER NOT NULL REFERENCES member(id) ON DELETE CASCADE,
    amount NUMERIC(10, 2) NOT NULL,
    bonus_amount NUMERIC(10, 2) NOT NULL,
    recharge_time TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS member_consumption (
    id SERIAL PRIMARY KEY,
    version INTEGER,
    member_id INTEGER NOT NULL REFERENCES member(id) ON DELETE CASCADE,
    remark VARCHAR(255),
    amount NUMERIC(10, 2) NOT NULL,
    consumption_time TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS member_order (
    id SERIAL PRIMARY KEY,
    version INTEGER,
    member_id BIGINT NOT NULL REFERENCES member(id) ON DELETE CASCADE,
    order_type VARCHAR(50) NOT NULL, -- 'RECHARGE', 'CONSUMPTION', 'ROOM'
    related_id BIGINT,               -- 对应的充值记录id / 消费记录id / 开台记录id
    amount NUMERIC(10, 2) NOT NULL,  -- 变动金额（正数充值，负数扣费）
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
