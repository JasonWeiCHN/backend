package com.wei.serverkulelemultiple.game.controller;

import com.wei.serverkulelemultiple.game.dto.AddGameRelationRequest;
import com.wei.serverkulelemultiple.game.entity.GameRelation;
import com.wei.serverkulelemultiple.game.service.GameRelationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/games")
public class GameRelationController {

    @Autowired
    private GameRelationService service;

    @GetMapping
    public List<GameRelation> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public GameRelation getById(@PathVariable Long id) {
        return service.getById(id).orElseThrow(() -> new RuntimeException("未找到游戏关联记录"));
    }

    @PostMapping
    public GameRelation create(@RequestBody AddGameRelationRequest request) {
        return service.create(request);
    }

    @PutMapping("/{id}")
    public GameRelation update(@PathVariable Long id, @RequestBody AddGameRelationRequest request) {
        return service.update(id, request);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

    @PostMapping("/batch")
    public List<GameRelation> createBatch(@RequestBody List<AddGameRelationRequest> requests) {
        return service.createBatch(requests);
    }
}
