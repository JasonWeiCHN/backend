package com.wei.games.repository;

import com.wei.games.entity.Genre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GenreRepository extends JpaRepository<Genre, String> {
    // String 是 Genre 的主键类型，如果不是 String 改成实际类型
}
