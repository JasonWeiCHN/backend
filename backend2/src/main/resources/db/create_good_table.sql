DROP TABLE IF EXISTS public.good;

CREATE TABLE IF NOT EXISTS public.good (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    hash VARCHAR(255) NOT NULL,
    category VARCHAR(255),
    price DECIMAL(10, 2) NOT NULL,
    description TEXT,
    keywords VARCHAR(255),
    create_time TIMESTAMP NOT NULL DEFAULT NOW(),
    update_time TIMESTAMP NOT NULL DEFAULT NOW()
);