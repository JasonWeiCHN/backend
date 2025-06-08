import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IGame } from '../../shared/interfaces/game.interface';
import { GameHttpService } from '../../shared/services/game.http.service';

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.scss',
  providers: [GameHttpService],
})
export class GameListComponent {
  private gameService = inject(GameHttpService);
  games: IGame[] = [];

  constructor() {
    this.loadGames();
  }

  loadGames(): void {
    this.gameService.getAllGames().subscribe((data) => {
      this.games = data;
    });
  }

  deleteGame(id?: number): void {
    if (!id) return;

    if (confirm('确定要删除这个游戏吗？')) {
      // 你可以根据需要添加 deleteGame 接口
      // 假设你实现了 deleteGame 方法
      this.gameService.deleteGame(id).subscribe(() => {
        this.games = this.games.filter((g) => g.id !== id);
      });
    }
  }
}
