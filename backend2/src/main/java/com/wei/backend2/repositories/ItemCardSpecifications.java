package com.wei.backend2.repositories;

import com.wei.backend2.entity.ItemCard;
import org.springframework.data.jpa.domain.Specification;

public class ItemCardSpecifications {
    public static Specification<ItemCard> containsTextInColumn(String column, String keyword) {
        return (root, query, cb) -> cb.like(cb.lower(root.get(column)), "%" + keyword.toLowerCase() + "%");
    }
}
