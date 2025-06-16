package com.wei.games.repository;
import com.wei.games.entity.Game;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface GameRepository extends JpaRepository<Game, Long> {
    Optional<Game> findByNameIgnoreCase(String name);
}
