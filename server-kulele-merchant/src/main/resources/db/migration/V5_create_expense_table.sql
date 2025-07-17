CREATE TABLE IF NOT EXISTS expense (
    id BIGSERIAL PRIMARY KEY,
    version INTEGER NOT NULL,
    date_time TIMESTAMP NOT NULL,
    category VARCHAR(255) NOT NULL,
    description TEXT,
    amount NUMERIC(10, 2) NOT NULL
);
