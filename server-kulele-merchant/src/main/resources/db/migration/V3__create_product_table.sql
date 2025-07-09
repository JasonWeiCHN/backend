CREATE TABLE IF NOT EXISTS product (
    id SERIAL PRIMARY KEY,
    version INTEGER,
    product_name VARCHAR(255) NOT NULL,
    product_category VARCHAR(255) NOT NULL,
    product_code VARCHAR(255) NOT NULL UNIQUE,
    purchase_price DOUBLE PRECISION NOT NULL,
    selling_price DOUBLE PRECISION NOT NULL,
    inventory INTEGER NOT NULL,
    description VARCHAR(255)
);