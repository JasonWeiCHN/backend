package com.wei.games.service;

import com.wei.games.dto.*;
import com.wei.games.entity.Game;
import com.wei.games.entity.GameGuide;
import com.wei.games.entity.Genre;
import com.wei.games.entity.Tag;
import com.wei.games.exception.DuplicateGameNameException;
import com.wei.games.repository.GameRepository;
import com.wei.games.repository.GenreRepository;
import com.wei.games.repository.TagRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class GameService {

    private final GameRepository gameRepository;
    private final GenreRepository genreRepository;
    private final TagRepository tagRepository;

    public GameService(GameRepository gameRepository, GenreRepository genreRepository, TagRepository tagRepository) {
        this.gameRepository = gameRepository;
        this.genreRepository = genreRepository;
        this.tagRepository = tagRepository;
    }

    public GameResponse create(AddGameRequest request) {
        // 判断是否存在同名游戏（不区分大小写）
        List<Game> existing = gameRepository.findAll().stream()
                .filter(g -> g.getName().equalsIgnoreCase(request.getName()))
                .toList();

        if (!existing.isEmpty()) {
            throw new DuplicateGameNameException("已存在同名游戏！");
        }

        Game game = new Game();
        copyFromRequest(game, request);
        return toResponse(gameRepository.save(game));
    }

    public GameResponse update(Long id, UpdateGameRequest request) {
        Game game = gameRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Game not found"));
        copyFromRequest(game, request);
        return toResponse(gameRepository.save(game));
    }

    public void delete(Long id) {
        gameRepository.deleteById(id);
    }

    public GameResponse getById(Long id) {
        Game game = gameRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Game not found"));
        return toResponse(game);
    }

    public List<GameResponse> getAll() {
        return gameRepository.findAll()
                .stream()
                .map(this::toResponse)
                .collect(Collectors.toList());
    }

    // 用于 AddGameRequest
    private void copyFromRequest(Game game, AddGameRequest request) {
        applyRequestFields(game, request);
    }

    // 用于 UpdateGameRequest
    private void copyFromRequest(Game game, UpdateGameRequest request) {
        applyRequestFields(game, request);
    }

    // 提取重复字段处理逻辑
    private void applyRequestFields(Game game, BaseGameRequest request) {
        game.setName(request.getName());
        game.setImage(request.getImage());
        if (request.getTags() != null && !request.getTags().isEmpty()) {
            List<Tag> tags = tagRepository.findAllById(request.getTags());
            game.setTags(tags);
        } else {
            game.setTags(null);
        }
        game.setSearchKeywords(request.getSearchKeywords());
        game.setPath(request.getPath());
        if (request.getReleaseDate() != null) {
            game.setReleaseDate(LocalDate.parse(request.getReleaseDate()));
        }
        game.setDescription(request.getDescription());
        game.setVideos(request.getVideos());
        game.setImagesForDetail(request.getImagesForDetail());

        if (request.getGenres() != null && !request.getGenres().isEmpty()) {
            // 根据 genre id 列表查实体，设置到 game
            List<Genre> genres = genreRepository.findAllById(request.getGenres());
            game.setGenres(genres);
        } else {
            game.setGenres(null);
        }

        game.setGuides(request.getGuides() != null ?
                request.getGuides().stream().map(dto -> {
                    GameGuide guide = new GameGuide();
                    guide.setTitle(dto.getTitle());
                    guide.setDescription(dto.getDescription());
                    guide.setAuthor(dto.getAuthor());
                    guide.setSourceUrl(dto.getSourceUrl());
                    return guide;
                }).collect(Collectors.toList()) : null);
    }

    private GameResponse toResponse(Game game) {
        GameResponse resp = new GameResponse();
        BeanUtils.copyProperties(game, resp);

        // releaseDate 转换
        if (game.getReleaseDate() != null) {
            resp.setReleaseDate(game.getReleaseDate().toString()); // 或 format
        }

        if (game.getGenres() != null) {
            resp.setGenres(game.getGenres().stream().map(g -> {
                GenreDTO dto = new GenreDTO();
                BeanUtils.copyProperties(g, dto);
                return dto;
            }).collect(Collectors.toList()));
        }

        if (game.getGuides() != null) {
            resp.setGuides(game.getGuides().stream().map(g -> {
                GameGuideDTO dto = new GameGuideDTO();
                BeanUtils.copyProperties(g, dto);
                return dto;
            }).collect(Collectors.toList()));
        }

        if (game.getTags() != null) {
            resp.setTags(game.getTags().stream().map(t -> {
                TagDTO dto = new TagDTO();
                BeanUtils.copyProperties(t, dto);
                return dto;
            }).toList());
        }

        return resp;
    }

    public List<GameGuideDTO> getGuidesByGameId(Long id) {
        Game game = gameRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Game not found"));
        return game.getGuides().stream().map(guide -> {
            GameGuideDTO dto = new GameGuideDTO();
            BeanUtils.copyProperties(guide, dto);
            return dto;
        }).collect(Collectors.toList());
    }

    public List<GameGuideDTO> updateGuidesByGameId(Long id, List<GameGuideDTO> guideDTOs) {
        Game game = gameRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Game not found"));

        // 替换旧攻略
        if (guideDTOs != null) {
            List<GameGuide> guides = guideDTOs.stream().map(dto -> {
                GameGuide guide = new GameGuide();
                guide.setTitle(dto.getTitle());
                guide.setDescription(dto.getDescription());
                guide.setAuthor(dto.getAuthor());
                guide.setSourceUrl(dto.getSourceUrl());
                return guide;
            }).collect(Collectors.toList());
            game.setGuides(guides);
        } else {
            game.setGuides(null);
        }

        gameRepository.save(game);

        return guideDTOs;
    }

    public List<GameResponse> getGamesByIds(List<Long> ids) {
        return gameRepository.findAllById(ids).stream()
                .map(this::toResponse)
                .collect(Collectors.toList());
    }
}
