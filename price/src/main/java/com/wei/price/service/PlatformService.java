package com.wei.price.service;

import com.wei.price.dto.PlatformRequest;
import com.wei.price.entity.Platform;
import com.wei.price.repository.PlatformRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PlatformService {
    @Autowired
    private PlatformRepository platformRepository;

    // 增
    public Platform createPlatform(PlatformRequest platformRequest) {
        Platform platform = new Platform();
        platform.setName(platformRequest.getName());
        return platformRepository.save(platform);
    }

    // 查
    public List<Platform> getAllPlatforms() {
        return platformRepository.findAll();
    }

    public Optional<Platform> getPlatformById(Long id) {
        return platformRepository.findById(id);
    }

    // 改
    public Platform updatePlatform(Long id, PlatformRequest platformRequest) {
        Optional<Platform> existingPlatform = platformRepository.findById(id);
        if (existingPlatform.isPresent()) {
            Platform platformToUpdate = existingPlatform.get();
            platformToUpdate.setName(platformRequest.getName());
            return platformRepository.save(platformToUpdate);
        } else {
            return null;
        }
    }

    // 删
    public boolean deletePlatform(Long id) {
        if (platformRepository.existsById(id)) {
            platformRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
}