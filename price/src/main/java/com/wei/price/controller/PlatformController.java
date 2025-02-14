package com.wei.price.controller;

import com.wei.price.dto.PlatformRequest;
import com.wei.price.entity.Platform;
import com.wei.price.service.PlatformService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/platforms")
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