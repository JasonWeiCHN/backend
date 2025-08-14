-- 1. 添加 member_id 列（允许 NULL）
ALTER TABLE accounting_record
    ADD COLUMN member_id BIGINT;

-- 2. 添加外键约束，指向 member 表
ALTER TABLE accounting_record
    ADD CONSTRAINT fk_accounting_record_member
        FOREIGN KEY (member_id) REFERENCES member(id)
            ON DELETE SET NULL;  -- 会员被删除时将 member_id 设为 NULL

-- 可选：为 member_id 添加索引
CREATE INDEX idx_accounting_record_member_id ON accounting_record(member_id);

-- 3. 修改精度
ALTER TABLE accounting_record
ALTER COLUMN duration TYPE NUMERIC(10, 2) USING duration::NUMERIC(10, 2),
    ALTER COLUMN actual_amount TYPE NUMERIC(10, 2) USING actual_amount::NUMERIC(10, 2);

-- 4. 给 game_names 外键加级联删除（避免孤儿记录）
ALTER TABLE game_names
DROP CONSTRAINT IF EXISTS game_names_record_id_fkey,
    ADD CONSTRAINT game_names_record_id_fkey
        FOREIGN KEY (record_id) REFERENCES accounting_record(id) ON DELETE CASCADE;
