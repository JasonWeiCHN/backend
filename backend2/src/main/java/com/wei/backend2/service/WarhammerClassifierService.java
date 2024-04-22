package com.wei.backend2.service;

import com.wei.backend2.entity.WarhammerClassifier;
import com.wei.backend2.payload.request.AddWarhammerClassifier;

import java.util.List;

public interface WarhammerClassifierService {
    List<WarhammerClassifier> findAll();

    WarhammerClassifier saveWarhammerClassifier(AddWarhammerClassifier warhammerClassifier);

    WarhammerClassifier findById(String id);
}
