package com.wei.games.controller;

import com.wei.games.dto.*;
import com.wei.games.service.GameService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/games")
@CrossOrigin(origins = "*") // 可根据实际情况限制跨域来源
public class GameController {

    private final GameService gameService;

    public GameController(GameService gameService) {
        this.gameService = gameService;
    }

    /** 获取全部游戏 */
    @GetMapping
    public ResponseEntity<List<GameResponse>> getAllGames() {
        return ResponseEntity.ok(gameService.getAll());
    }

    /** 根据 ID 获取游戏 */
    @GetMapping("/{id}")
    public ResponseEntity<GameResponse> getGameById(@PathVariable Long id) {
        return ResponseEntity.ok(gameService.getById(id));
    }

    /** 创建新游戏 */
    @PostMapping
    public ResponseEntity<GameResponse> createGame(@RequestBody AddGameRequest request) {
        return ResponseEntity.ok(gameService.create(request));
    }

    /** 更新游戏 */
    @PutMapping("/{id}")
    public ResponseEntity<GameResponse> updateGame(@PathVariable Long id, @RequestBody UpdateGameRequest request) {
        return ResponseEntity.ok(gameService.update(id, request));
    }

    /** 删除游戏 */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteGame(@PathVariable Long id) {
        gameService.delete(id);
        return ResponseEntity.noContent().build();
    }

    // 获取游戏的攻略列表
    @GetMapping("/{id}/guides")
    public ResponseEntity<List<GameGuideDTO>> getGuidesByGameId(@PathVariable Long id) {
        return ResponseEntity.ok(gameService.getGuidesByGameId(id));
    }

    // 修改游戏的攻略（覆盖式更新）
    @PutMapping("/{id}/guides")
    public ResponseEntity<List<GameGuideDTO>> updateGuidesByGameId(
            @PathVariable Long id,
            @RequestBody UpdateGameGuideRequest request
    ) {
        return ResponseEntity.ok(gameService.updateGuidesByGameId(id, request.getGuides()));
    }
}
