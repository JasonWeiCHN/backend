CREATE TABLE IF NOT EXISTS genre (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT
);

CREATE TABLE IF NOT EXISTS tag (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT
);

CREATE TABLE IF NOT EXISTS game (
    id SERIAL PRIMARY KEY,
    version INTEGER,
    name VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    search_keywords VARCHAR(255),
    path VARCHAR(255),
    release_date DATE,
    description TEXT,
    video VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS game_tag (
    game_id BIGINT NOT NULL REFERENCES game(id),
    tag_id VARCHAR(255) NOT NULL REFERENCES tag(id)
);

CREATE TABLE IF NOT EXISTS game_genre (
    game_id BIGINT NOT NULL REFERENCES game(id),
    genre_id VARCHAR(255) NOT NULL REFERENCES genre(id)
);

CREATE TABLE IF NOT EXISTS game_guides (
    game_id BIGINT NOT NULL REFERENCES game(id),
    title VARCHAR(255),
    description VARCHAR(255),
    author VARCHAR(255),
    source_url VARCHAR(255)
);