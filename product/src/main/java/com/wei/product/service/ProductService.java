package com.wei.product.service;

import com.wei.product.dto.AddProductRequest;
import com.wei.product.entity.Product;
import com.wei.product.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository repository;

    public List<Product> getAll() {
        return repository.findAll();
    }

    public Optional<Product> getById(Long id) {
        return repository.findById(id);
    }

    public Product create(AddProductRequest request) {
        Product product = new Product();
        copyProperties(product, request);
        return repository.save(product);
    }

    public Product update(Long id, AddProductRequest request) {
        Product product = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("未找到商品记录: id=" + id));
        copyProperties(product, request);
        return repository.save(product);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    private void copyProperties(Product p, AddProductRequest r) {
        p.setProductName(r.getProductName());
        p.setProductCategory(r.getProductCategory());
        p.setProductCode(r.getProductCode());
        p.setPurchasePrice(r.getPurchasePrice());
        p.setSellingPrice(r.getSellingPrice());
        p.setInventory(r.getInventory());
        p.setDescription(r.getDescription());
    }
}
