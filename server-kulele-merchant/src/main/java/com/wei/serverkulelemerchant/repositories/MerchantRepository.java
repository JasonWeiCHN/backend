package com.wei.serverkulelemerchant.repositories;

import com.wei.serverkulelemerchant.entity.Merchant;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MerchantRepository extends JpaRepository<Merchant, Long> {
    Optional<Merchant> findByUsername(String username);
    boolean existsByDatabaseName(String databaseName);
}
