package com.wei.price.controller;

import com.wei.price.dto.PriceRequest;
import com.wei.price.entity.Price;
import com.wei.price.service.PriceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/prices")
public class PriceController {
    @Autowired
    private PriceService priceService;

    // 增
    @PostMapping
    public Price createPrice(@RequestBody PriceRequest priceRequest) {
        return priceService.createPrice(priceRequest);
    }

    // 查
    @GetMapping
    public List<Price> getAllPrices() {
        return priceService.getAllPrices();
    }

    @GetMapping("/{id}")
    public Optional<Price> getPriceById(@PathVariable Long id) {
        return priceService.getPriceById(id);
    }

    // 改
    @PutMapping("/{id}")
    public Price updatePrice(@PathVariable Long id, @RequestBody PriceRequest priceRequest) {
        return priceService.updatePrice(id, priceRequest);
    }

    // 删
    @DeleteMapping("/{id}")
    public boolean deletePrice(@PathVariable Long id) {
        return priceService.deletePrice(id);
    }
}
