package com.wei.price.repository;

import com.wei.price.entity.Good;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GoodRepository extends JpaRepository<Good, Long> {
    // 你可以根据需求添加查询方法
}
