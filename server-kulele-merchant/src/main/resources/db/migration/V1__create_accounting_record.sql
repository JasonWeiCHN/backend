CREATE TABLE IF NOT EXISTS accounting_record (
    id SERIAL PRIMARY KEY,
    version INTEGER,
    start_date_time TIMESTAMP NOT NULL,
    end_date_time TIMESTAMP NOT NULL,
    duration NUMERIC NOT NULL,
    console_type VARCHAR(255) NOT NULL,
    customer_type VARCHAR(255) NOT NULL,
    is_returning BOOLEAN NOT NULL,
    actual_amount NUMERIC NOT NULL,
    platform VARCHAR(255) NOT NULL,
    contact_type VARCHAR(255),
    contact_value VARCHAR(255),
    remark VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS game_names (
    record_id BIGINT NOT NULL REFERENCES accounting_record(id),
    game_name VARCHAR(255)
);