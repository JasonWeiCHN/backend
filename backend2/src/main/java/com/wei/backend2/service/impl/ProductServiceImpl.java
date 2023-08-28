package com.wei.backend2.service.impl;

import com.wei.backend2.entity.Product;
import com.wei.backend2.payload.request.AddProduct;
import com.wei.backend2.repositories.ProductRepository;
import com.wei.backend2.service.ProductService;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {
    private ProductRepository repository;

    public ProductServiceImpl(ProductRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Product> findAll() {
        return repository.findAll();
    }

    @Override
    public void saveProduct(AddProduct addProduct) {
        Product product = new Product();
        BeanUtils.copyProperties(addProduct, product);
        repository.save(product);
    }
}
