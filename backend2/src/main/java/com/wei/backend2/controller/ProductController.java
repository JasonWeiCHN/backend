package com.wei.backend2.controller;

import com.wei.backend2.entity.Product;
import com.wei.backend2.payload.request.AddProduct;
import com.wei.backend2.service.ProductService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product")
//@Api(tags = "product Controller")
public class ProductController {
    private ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/findAll")
//    @ApiOperation(value = "Find all product information")
    public List<Product> findAll(){
        return productService.findAll();
    }

    @PostMapping("/savePro")
//    @ApiOperation(value = "Add product")
    public void saveProduct(@RequestBody AddProduct product){
        productService.saveProduct(product);
    }
}
