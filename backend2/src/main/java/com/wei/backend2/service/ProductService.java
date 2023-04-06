package com.wei.backend2.service;

import com.wei.backend2.entity.Product;
import com.wei.backend2.payload.request.AddProduct;

import java.util.List;

public interface ProductService {
    List<Product> findAll();

    void saveProduct(AddProduct product);
}
