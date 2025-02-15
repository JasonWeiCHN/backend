package com.wei.price.controller;

import com.wei.price.dto.PlatformRequest;
import com.wei.price.entity.Good;
import com.wei.price.entity.Platform;
import com.wei.price.service.PlatformService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/platforms")
@CrossOrigin(origins = "*")
public class PlatformController {
    @Autowired
    private PlatformService platformService;

    // 增
    @PostMapping
    public Platform createPlatform(@RequestBody PlatformRequest platformRequest) {
        return platformService.createPlatform(platformRequest);
    }

    // 查
    @GetMapping
    public List<Platform> getAllPlatforms() {
        return platformService.getAllPlatforms();
    }

    // 分页查
    @GetMapping("/getAllPlatformsPaginated")
    public ResponseEntity<Page<Platform>> getAllGoodsPaginated(@RequestParam(defaultValue = "0") int page,
                                                           @RequestParam(defaultValue = "10") int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Platform> platform = platformService.getAllPlatformsPaginated(pageable);
        return ResponseEntity.ok(platform);
    }

    @GetMapping("/{id}")
    public Optional<Platform> getPlatformById(@PathVariable Long id) {
        return platformService.getPlatformById(id);
    }

    // 改
    @PutMapping("/{id}")
    public Platform updatePlatform(@PathVariable Long id, @RequestBody PlatformRequest platformRequest) {
        return platformService.updatePlatform(id, platformRequest);
    }

    // 删
    @DeleteMapping("/{id}")
    public boolean deletePlatform(@PathVariable Long id) {
        return platformService.deletePlatform(id);
    }
}