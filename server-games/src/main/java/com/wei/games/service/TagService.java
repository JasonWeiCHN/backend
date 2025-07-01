package com.wei.games.service;

import com.wei.games.dto.TagDTO;
import com.wei.games.repository.TagRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TagService {

    private final TagRepository tagRepository;

    public TagService(TagRepository tagRepository) {
        this.tagRepository = tagRepository;
    }

    public List<TagDTO> getAll() {
        return tagRepository.findAll().stream().map(tag -> {
            TagDTO dto = new TagDTO();
            BeanUtils.copyProperties(tag, dto);
            return dto;
        }).toList();
    }
}

