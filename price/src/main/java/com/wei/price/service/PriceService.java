package com.wei.price.service;

import com.wei.price.dto.PriceRequest;
import com.wei.price.entity.Good;
import com.wei.price.entity.Platform;
import com.wei.price.entity.Price;
import com.wei.price.repository.GoodRepository;
import com.wei.price.repository.PlatformRepository;
import com.wei.price.repository.PriceRepository;
import com.wei.price.specifications.PriceSpecifications;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PriceService {
    @Autowired
    private PriceRepository priceRepository;

    @Autowired
    private GoodRepository goodRepository;

    @Autowired
    private PlatformRepository platformRepository;

    // 增
    public Price createPrice(PriceRequest priceRequest) {
        Price price = new Price();

        // 获取 Good 和 Platform 实体
        Optional<Good> good = goodRepository.findById(priceRequest.getGoodId());
        Optional<Platform> platform = platformRepository.findById(priceRequest.getPlatformId());

        // 如果对应的 Good 和 Platform 存在，则设置到 Price 实体中
        if (good.isPresent() && platform.isPresent()) {
            price.setGood(good.get());
            price.setPlatform(platform.get());
            price.setDate(priceRequest.getDate());
            price.setPrice(priceRequest.getPrice());
            price.setSourceUrl(priceRequest.getSourceUrl());
            return priceRepository.save(price);
        } else {
            // 如果找不到对应的 Good 或 Platform，返回 null 或抛出异常
            return null;
        }
    }

    // 查
    public List<Price> getAllPrices() {
        return priceRepository.findAll();
    }

    public Page<Price> getAllPricesPaginated(Pageable pageable) {
        return priceRepository.findAll(pageable);
    }

    public List<Price> searchPrices(String column, String keyword) {
        Specification<Price> spec = PriceSpecifications.containsTextInColumn(column, keyword);
        return priceRepository.findAll(spec);
    }

    public Optional<Price> getPriceById(Long id) {
        return priceRepository.findById(id);
    }

    // 改
    public Price updatePrice(Long id, PriceRequest priceRequest) {
        Optional<Price> existingPrice = priceRepository.findById(id);
        if (existingPrice.isPresent()) {
            // 更新除 id 外的其他字段
            Price priceToUpdate = existingPrice.get();
            priceToUpdate.setDate(priceRequest.getDate());
            priceToUpdate.setPrice(priceRequest.getPrice());
            priceToUpdate.setSourceUrl(priceRequest.getSourceUrl());
            return priceRepository.save(priceToUpdate);  // JPA 会根据 id 自动更新记录
        } else {
            return null;
        }
    }

    // 删
    public boolean deletePrice(Long id) {
        if (priceRepository.existsById(id)) {
            priceRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
}