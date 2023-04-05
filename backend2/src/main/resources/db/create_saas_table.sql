DROP TABLE IF EXISTS public.saas;

CREATE TABLE IF NOT EXISTS public.saas (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    url VARCHAR(255),
    category VARCHAR(50),
    status VARCHAR(20),
    create_time TIMESTAMP NOT NULL DEFAULT NOW(),
    update_time TIMESTAMP NOT NULL DEFAULT NOW()
);
