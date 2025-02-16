package com.wei.price.specifications;

import com.wei.price.entity.Good;
import com.wei.price.entity.Platform;
import com.wei.price.entity.Price;
import jakarta.persistence.criteria.Expression;
import jakarta.persistence.criteria.Path;
import org.springframework.data.jpa.domain.Specification;

public class PriceSpecifications {
    public static Specification<Price> containsTextInColumn(String column, String keyword) {
        return (root, query, cb) -> {
            Path<?> path = root.get(column); // 获取字段

            // 判断字段类型
            if (path.getJavaType().equals(String.class)) {
                // 只有当字段类型是 String 时才使用 LOWER 和 LIKE
                return cb.like(cb.lower((Path<String>) path), "%" + keyword.toLowerCase() + "%");
            } else if (path.getJavaType().equals(Good.class)) {
                // 如果字段是 Good 类型，查找 Good 的某个属性（比如 name）
                Path<String> goodNamePath = root.get("good").get("name"); // 假设 Good 类有 name 属性
                return cb.like(cb.lower(goodNamePath), "%" + keyword.toLowerCase() + "%");
            } else if (path.getJavaType().equals(Platform.class)) {
                // 如果字段是 Platform 类型，查找 Platform 的某个属性（比如 name）
                Path<String> platformNamePath = root.get("platform").get("name"); // 假设 Platform 类有 name 属性
                return cb.like(cb.lower(platformNamePath), "%" + keyword.toLowerCase() + "%");
            } else {
                // 对其他类型的字段直接使用相等比较
                return cb.equal(path, keyword);
            }
        };
    }
}
