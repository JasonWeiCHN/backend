package com.wei.price.repository;

import com.wei.price.entity.Good;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GoodRepository extends JpaRepository<Good, Long> {
    // 你可以根据需求添加查询方法
    // 根据名称模糊查询商品
    List<Good> findByNameContainingIgnoreCase(String name);
}
