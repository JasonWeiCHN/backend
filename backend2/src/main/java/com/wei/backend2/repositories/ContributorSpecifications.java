package com.wei.backend2.repositories;

import com.wei.backend2.entity.Contributor;
import org.springframework.data.jpa.domain.Specification;

public class ContributorSpecifications{
    public static Specification<Contributor> containsTextInColumn(String column, String keyword) {
        return (root, query, cb) -> cb.like(cb.lower(root.get(column)), "%" + keyword.toLowerCase() + "%");
    }
}
