package com.wei.games.controller;

import com.wei.games.dto.*;
import com.wei.games.service.GameService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/games")
public class GameController {

    private final GameService gameService;

    public GameController(GameService gameService) {
        this.gameService = gameService;
    }

    @GetMapping
    public ResponseEntity<List<GameResponse>> getAllGames() {
        return ResponseEntity.ok(gameService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<GameResponse> getGameById(@PathVariable Long id) {
        return ResponseEntity.ok(gameService.getById(id));
    }

    @PostMapping
    public ResponseEntity<GameResponse> createGame(@RequestBody AddGameRequest request) {
        return ResponseEntity.ok(gameService.create(request));
    }

    @PutMapping("/{id}")
    public ResponseEntity<GameResponse> updateGame(@PathVariable Long id, @RequestBody UpdateGameRequest request) {
        return ResponseEntity.ok(gameService.update(id, request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteGame(@PathVariable Long id) {
        gameService.delete(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}/guides")
    public ResponseEntity<List<GameGuideDTO>> getGuidesByGameId(@PathVariable Long id) {
        return ResponseEntity.ok(gameService.getGuidesByGameId(id));
    }

    @PutMapping("/{id}/guides")
    public ResponseEntity<List<GameGuideDTO>> updateGuidesByGameId(
            @PathVariable Long id,
            @RequestBody UpdateGameGuideRequest request
    ) {
        return ResponseEntity.ok(gameService.updateGuidesByGameId(id, request.getGuides()));
    }

    @PostMapping("/batch")
    public ResponseEntity<List<GameResponse>> getGamesByIds(@RequestBody List<Long> ids) {
        return ResponseEntity.ok(gameService.getGamesByIds(ids));
    }
}

