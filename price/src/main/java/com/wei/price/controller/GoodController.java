package com.wei.price.controller;

import com.wei.price.dto.GoodRequest;
import com.wei.price.entity.Good;
import com.wei.price.service.GoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/goods")
@CrossOrigin(origins = "*")
public class GoodController {
    @Autowired
    private GoodService goodService;

    // 增
    @PostMapping
    public Good createGood(@RequestBody GoodRequest goodRequest) {
        return goodService.createGood(goodRequest);
    }

    // 查
    @GetMapping
    public List<Good> getAllGoods() {
        return goodService.getAllGoods();
    }

    // 分页查
    @GetMapping("/getAllGoodsPaginated")
    public ResponseEntity<Page<Good>> getAllGoodsPaginated(@RequestParam(defaultValue = "0") int page,
                                                           @RequestParam(defaultValue = "10") int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Good> goods = goodService.getAllGoodsPaginated(pageable);
        return ResponseEntity.ok(goods);
    }

    // 根据商品名称查询商品
    @GetMapping("/search")
    public List<Good> searchGoodsByName(@RequestParam String name) {
        return goodService.searchGoodsByName(name);
    }

    @GetMapping("/{id}")
    public Optional<Good> getGoodById(@PathVariable Long id) {
        return goodService.getGoodById(id);
    }

    // 改
    @PutMapping("/{id}")
    public Good updateGood(@PathVariable Long id, @RequestBody GoodRequest goodRequest) {
        return goodService.updateGood(id, goodRequest);
    }

    // 删
    @DeleteMapping("/{id}")
    public boolean deleteGood(@PathVariable Long id) {
        return goodService.deleteGood(id);
    }
}
