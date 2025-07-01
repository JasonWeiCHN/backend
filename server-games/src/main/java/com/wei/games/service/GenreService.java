package com.wei.games.service;

import com.wei.games.dto.GenreDTO;
import com.wei.games.repository.GenreRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GenreService {

    private final GenreRepository genreRepository;

    public GenreService(GenreRepository genreRepository) {
        this.genreRepository = genreRepository;
    }

    public List<GenreDTO> getAll() {
        return genreRepository.findAll().stream().map(genre -> {
            GenreDTO dto = new GenreDTO();
            BeanUtils.copyProperties(genre, dto);
            return dto;
        }).toList();
    }
}
