import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GameRelationHttpService } from '../../shared/services/game-relation.http.service';
import { GameHttpService } from '../../shared/services/game.http.service';
import { IGame } from '../../shared/interfaces/game.interface';
import { IGameRelation } from '../../shared/interfaces/game-relation.interface';

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.scss',
  providers: [GameRelationHttpService, GameHttpService],
})
export class GameListComponent {
  private relationService = inject(GameRelationHttpService);
  private gameService = inject(GameHttpService);

  keyword = '';
  searchField = 'name';

  relations: IGameRelation[] = [];
  games: IGame[] = [];
  pagedGames: IGame[] = [];
  pageSize = 30;
  currentPage = 1;
  totalPages = 1;

  ngOnInit(): void {
    this.loadGames();
  }

  loadGames(): void {
    this.relationService.getAll().subscribe((relations) => {
      this.relations = relations;
      const gameIds = relations.map((r) => r.gameId);
      this.gameService.getGamesByIds(gameIds).subscribe((games) => {
        this.games = games;
        this.totalPages = Math.ceil(this.games.length / this.pageSize);
        this.currentPage = 1;
        this.updatePagedGames();
      });
    });
  }

  deleteGame(gameId?: number): void {
    if (!gameId) return;

    const relation = this.relations.find((r) => r.gameId === gameId);
    if (!relation) {
      alert('找不到对应的游戏关联关系，无法删除。');
      return;
    }

    if (confirm('确定要删除这个游戏吗？')) {
      this.relationService
        .delete(relation.id)
        .subscribe(() => this.loadGames());
    }
  }

  openGameLink(link: string): void {
    const token = localStorage.getItem('token');

    if (token) {
      const urlWithToken = `https://kulele.club/games${link}?token=${encodeURIComponent(
        token
      )}`;
      window.open(urlWithToken, '_blank');
    } else {
      alert('未登录，token 缺失');
    }
  }

  updatePagedGames(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.pagedGames = this.games.slice(start, end);
  }

  syncAllGames(): void {
    if (!confirm('是否要将主游戏库中所有游戏同步到本商户？')) return;

    this.gameService.getAllGames().subscribe((allGames) => {
      const existingGameIds = this.relations.map((r) => r.gameId);
      const newGames = allGames.filter(
        (game) => game.id !== undefined && !existingGameIds.includes(game.id)
      );

      if (newGames.length === 0) {
        alert('所有游戏都已同步，无需操作。');
        return;
      }

      const requests = newGames.map((game) => ({
        gameId: game.id ?? 0, // 如果万一 undefined，用 0（视后台是否允许）
        note: '',
      }));

      this.relationService.createBatch(requests).subscribe({
        next: () => {
          alert(`已成功同步 ${requests.length} 条游戏`);
          this.loadGames();
        },
        error: () => {
          alert('同步失败，请稍后重试');
        },
      });
    });
  }

  search(): void {
    const kw = this.keyword.trim().toLowerCase();
    if (!kw) return this.loadGames();

    const matchedRelations = this.relations.filter(
      (r) => r.note?.toLowerCase().includes(kw) || String(r.gameId).includes(kw)
    );
    const ids = matchedRelations.map((r) => r.gameId);

    this.gameService.getGamesByIds(ids).subscribe((games) => {
      this.games = games;
      this.totalPages = Math.ceil(this.games.length / this.pageSize);
      this.currentPage = 1;
      this.updatePagedGames();
    });
  }

  clearSearch(): void {
    this.keyword = '';
    this.loadGames();
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagedGames();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagedGames();
    }
  }
}
