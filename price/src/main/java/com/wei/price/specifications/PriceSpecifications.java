package com.wei.price.specifications;

import com.wei.price.entity.Price;
import org.springframework.data.jpa.domain.Specification;

public class PriceSpecifications {
    public static Specification<Price> containsTextInColumn(String column, String keyword) {
        return (root, query, cb) -> cb.like(cb.lower(root.get(column)), "%" + keyword.toLowerCase() + "%");
    }
}
