-- 添加 room_id 字段到 accounting_record 表
ALTER TABLE accounting_record
    ADD COLUMN room_id BIGINT;

-- 添加外键约束，指向 room 表的 id 字段
ALTER TABLE accounting_record
    ADD CONSTRAINT fk_accounting_record_room
        FOREIGN KEY (room_id) REFERENCES room(id)
            ON DELETE SET NULL;  -- 房间被删除时将 room_id 设为 NULL（可按需调整）

-- 可选：为查询效率添加索引
CREATE INDEX idx_accounting_record_room_id ON accounting_record(room_id);
