package com.wei.backend2.repositories;

import com.wei.backend2.entity.ItemCard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemCardRepository extends JpaRepository<ItemCard, String> {
}
