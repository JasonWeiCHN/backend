DROP TABLE IF EXISTS public.user;

-- 创建 user 表
CREATE TABLE IF NOT EXISTS public.user (
    userId SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    gender VARCHAR(10),
    role VARCHAR(20),
    dateOfBirth DATE,
    country VARCHAR(255),
    city VARCHAR(255),
    streetAddress VARCHAR(255),
    zipCode VARCHAR(20),
    lastLoginTime TIMESTAMP,
    creationTime TIMESTAMP NOT NULL,
    modificationTime TIMESTAMP NOT NULL,
    status VARCHAR(20),
    avatar VARCHAR(255),
    timezone VARCHAR(50),
    language VARCHAR(50),
    occupation VARCHAR(255),
    company VARCHAR(255),
    interests TEXT,
    education TEXT,
    biography TEXT,
    authenticationToken VARCHAR(255),
    socialMediaLinks VARCHAR(255)
);

-- 添加注释
COMMENT ON COLUMN public.user.userId IS 'The unique identifier of the user.';

-- 创建序列
-- CREATE SEQUENCE user_id_seq
--     START WITH 1
--     INCREMENT BY 1
--     NO MINVALUE
--     NO MAXVALUE
--     CACHE 1;

-- user_id 自增
-- ALTER TABLE public.user ALTER COLUMN userId SET DEFAULT nextval('user_id_seq');

-- 添加注释
-- COMMENT ON TABLE user IS 'This table stores information about users.';
-- COMMENT ON COLUMN user.userId IS 'The unique identifier of the user.';
-- COMMENT ON COLUMN user.username IS 'The username of the user.';
-- COMMENT ON COLUMN user.password IS 'The password of the user.';
-- COMMENT ON COLUMN user.email IS 'The email address of the user.';
-- COMMENT ON COLUMN user.phone IS 'The phone number of the user.';
-- COMMENT ON COLUMN user.firstName IS 'The first name of the user.';
-- COMMENT ON COLUMN user.lastName IS 'The last name of the user.';
-- COMMENT ON COLUMN user.gender IS 'The gender of the user.';
-- COMMENT ON COLUMN user.role IS 'The role of the user.';
-- COMMENT ON COLUMN user.dateOfBirth IS 'The date of birth of the user.';
-- COMMENT ON COLUMN user.country IS 'The country of the user.';
-- COMMENT ON COLUMN user.city IS 'The city of the user.';
-- COMMENT ON COLUMN user.streetAddress IS 'The street address of the user.';
-- COMMENT ON COLUMN user.zipCode IS 'The zip code of the user.';
-- COMMENT ON COLUMN user.lastLoginTime IS 'The timestamp of the user s last login.';
-- COMMENT ON COLUMN user.creationTime IS 'The timestamp of the user s creation.';
-- COMMENT ON COLUMN user.modificationTime IS 'The timestamp of the user s last modification.';
-- COMMENT ON COLUMN user.status IS 'The status of the user.';
-- COMMENT ON COLUMN user.avatar IS 'The URL of the user s avatar.';
-- COMMENT ON COLUMN user.timezone IS 'The timezone of the user.';
-- COMMENT ON COLUMN user.language IS 'The language of the user.';
-- COMMENT ON COLUMN user.occupation IS 'The occupation of the user.';
-- COMMENT ON COLUMN user.company IS 'The company of the user.';
-- COMMENT ON COLUMN user.interests IS 'The interests of the user.';
-- COMMENT ON COLUMN user.education IS 'The education of the user.';
-- COMMENT ON COLUMN user.biography IS 'The biography of the user.';
-- COMMENT ON COLUMN user.authenticationToken IS 'The authentication token of the user.';
-- COMMENT ON COLUMN user.socialMediaLinks IS 'The social media links of the user.';
