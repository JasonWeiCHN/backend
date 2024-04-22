package com.wei.backend2.repositories;

import com.wei.backend2.entity.WarhammerClassifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WarhammerClassifierRepository extends JpaRepository<WarhammerClassifier, String> {
}

