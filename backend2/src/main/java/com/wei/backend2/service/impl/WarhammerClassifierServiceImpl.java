package com.wei.backend2.service.impl;

import com.wei.backend2.entity.WarhammerClassifier;
import com.wei.backend2.payload.request.AddWarhammerClassifier;
import com.wei.backend2.repositories.WarhammerClassifierRepository;
import com.wei.backend2.service.WarhammerClassifierService;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class WarhammerClassifierServiceImpl implements WarhammerClassifierService {
    private WarhammerClassifierRepository repository;

    public WarhammerClassifierServiceImpl(WarhammerClassifierRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<WarhammerClassifier> findAll() {
        return repository.findAll();
    }

    @Override
    public WarhammerClassifier saveWarhammerClassifier(AddWarhammerClassifier addWarhammerClassifier) {
        WarhammerClassifier warhammerClassifier = new WarhammerClassifier();
        BeanUtils.copyProperties(addWarhammerClassifier, warhammerClassifier);
        return repository.save(warhammerClassifier);
    }

    @Override
    public WarhammerClassifier findById(String id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("WarhammerClassifier not found with id: " + id));
    }
}
