package com.wei.serverkulelemultiple.game.service;

import com.wei.serverkulelemultiple.game.dto.AddGameRelationRequest;
import com.wei.serverkulelemultiple.game.entity.GameRelation;
import com.wei.serverkulelemultiple.game.repository.GameRelationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class GameRelationService {

    @Autowired
    private GameRelationRepository repository;

    public List<GameRelation> getAll() {
        return repository.findAll();
    }

    public Optional<GameRelation> getById(Long id) {
        return repository.findById(id);
    }

    public GameRelation create(AddGameRelationRequest request) {
        if (repository.existsByGameId(request.getGameId())) {
            throw new IllegalArgumentException("该游戏已经添加，不能重复添加！");
        }

        GameRelation game = new GameRelation();
        game.setGameId(request.getGameId());
        game.setNote(request.getNote());
        game.setAddedAt(LocalDateTime.now());
        return repository.save(game);
    }

    public GameRelation update(Long id, AddGameRelationRequest request) {
        GameRelation game = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("未找到游戏关联记录: id=" + id));
        game.setGameId(request.getGameId());
        game.setNote(request.getNote());
        return repository.save(game);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}
