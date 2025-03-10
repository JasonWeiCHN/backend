package com.wei.price.repository;

import com.wei.price.entity.Price;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface PriceRepository extends JpaRepository<Price, Long> , JpaSpecificationExecutor<Price> {
    // 你可以根据需求添加查询方法
}
