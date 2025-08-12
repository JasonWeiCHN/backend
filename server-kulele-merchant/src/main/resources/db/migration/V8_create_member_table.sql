CREATE TABLE IF NOT EXISTS member (
    id SERIAL PRIMARY KEY,
    version INTEGER,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    total_play_time INTEGER NOT NULL DEFAULT 0
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
    amount NUMERIC(10, 2) NOT NULL,
    order_id INTEGER NOT NULL,
    consumption_time TIMESTAMP NOT NULL
);
