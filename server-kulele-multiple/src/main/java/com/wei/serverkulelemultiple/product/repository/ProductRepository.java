package com.wei.serverkulelemultiple.product.repository;

import com.wei.serverkulelemultiple.product.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
