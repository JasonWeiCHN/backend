CREATE TABLE IF NOT EXISTS appointment (
    id SERIAL PRIMARY KEY,
    version INTEGER,
    date_time TIMESTAMP NOT NULL,
    name VARCHAR(255) NOT NULL,
    contact_type VARCHAR(255) NOT NULL,
    contact_value VARCHAR(255) NOT NULL,
    description VARCHAR(255)
);