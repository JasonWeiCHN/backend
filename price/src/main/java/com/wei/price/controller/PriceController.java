package com.wei.price.controller;

import com.wei.price.dto.PriceRequest;
import com.wei.price.entity.Price;
import com.wei.price.service.PriceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/prices")
@CrossOrigin(origins = "*")
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

    // 分页查
    @GetMapping("/getAllPricesPaginated")
    public ResponseEntity<Page<Price>> getAllPricesPaginated(@RequestParam(defaultValue = "0") int page,
                                                               @RequestParam(defaultValue = "10") int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Price> platform = priceService.getAllPricesPaginated(pageable);
        return ResponseEntity.ok(platform);
    }

    // 搜索
    @GetMapping("/search")
    public List<Price> searchPrices(@RequestParam String column, @RequestParam String keyword) {
        return priceService.searchPrices(column, keyword);
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
