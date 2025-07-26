CREATE TABLE IF NOT EXISTS room (
    id BIGSERIAL PRIMARY KEY,
    version INTEGER NOT NULL DEFAULT 0,

    room_number VARCHAR(50) NOT NULL,
    room_type VARCHAR(100),
    capacity INTEGER NOT NULL DEFAULT 1,
    price_per_hour NUMERIC(10, 2) NOT NULL,
    description TEXT,

    status VARCHAR(50) NOT NULL DEFAULT 'AVAILABLE',

    created_at TIMESTAMP NOT NULL DEFAULT now(),
    updated_at TIMESTAMP NOT NULL DEFAULT now()
);
