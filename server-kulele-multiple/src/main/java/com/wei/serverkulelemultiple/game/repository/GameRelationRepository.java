package com.wei.serverkulelemultiple.game.repository;

import com.wei.serverkulelemultiple.game.entity.GameRelation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GameRelationRepository extends JpaRepository<GameRelation, Long> {
    boolean existsByGameId(Long gameId);
}
