package com.wei.serverkulelemultiple.merchant.repository;

import com.wei.serverkulelemultiple.merchant.entity.Merchant;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MerchantRepository extends JpaRepository<Merchant, Long> {
    Optional<Merchant> findByTenantId(String tenantId);
}
