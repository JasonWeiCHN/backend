package com.wei.price.service;

import com.wei.price.dto.GoodRequest;
import com.wei.price.entity.Good;
import com.wei.price.repository.GoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GoodService {
    @Autowired
    private GoodRepository goodRepository;

    // 增
    public Good createGood(GoodRequest goodRequest) {
        Good good = new Good();
        good.setName(goodRequest.getName());
        return goodRepository.save(good);
    }

    // 查
    public List<Good> getAllGoods() {
        return goodRepository.findAll();
    }

    public Page<Good> getAllGoodsPaginated(Pageable pageable) {
        return goodRepository.findAll(pageable);
    }

    // 根据名称查询商品
    public List<Good> searchGoodsByName(String name) {
        return goodRepository.findByNameContainingIgnoreCase(name); // 使用模糊查询
    }

    public Optional<Good> getGoodById(Long id) {
        return goodRepository.findById(id);
    }

    // 改
    public Good updateGood(Long id, GoodRequest goodRequest) {
        Optional<Good> existingGood = goodRepository.findById(id);
        if (existingGood.isPresent()) {
            Good goodToUpdate = existingGood.get();
            goodToUpdate.setName(goodRequest.getName());
            return goodRepository.save(goodToUpdate);
        } else {
            return null;
        }
    }

    // 删
    public boolean deleteGood(Long id) {
        if (goodRepository.existsById(id)) {
            goodRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
}
