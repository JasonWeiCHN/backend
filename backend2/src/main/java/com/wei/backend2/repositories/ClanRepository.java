package com.wei.backend2.repositories;

import com.wei.backend2.entity.Clan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClanRepository extends JpaRepository<Clan, String> {
}
