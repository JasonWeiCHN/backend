import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // 需要引入FormsModule支持双向绑定
import { IGame } from '../../shared/interfaces/game.interface';
import { GameHttpService } from '../../shared/services/game.http.service';

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule], // 加入 FormsModule
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.scss',
  providers: [GameHttpService],
})
export class GameListComponent {
  private gameService = inject(GameHttpService);

  games: IGame[] = [];
  pagedGames: IGame[] = [];

  // 搜索相关
  searchField = 'name';
  searchKeyword = '';

  pageSize = 30;
  currentPage = 1;
  totalPages = 1;
  isSuperAdmin = false;

  constructor() {
    this.isSuperAdmin = localStorage.getItem('isSuperAdmin') === 'true';
    this.loadGames();
  }

  loadGames(): void {
    this.gameService.getAllGames().subscribe((data) => {
      this.games = data;
      this.totalPages = Math.ceil(this.games.length / this.pageSize);
      this.currentPage = 1;
      this.updatePagedGames();
    });
  }

  updatePagedGames(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedGames = this.games.slice(startIndex, endIndex);
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

  deleteGame(id?: number): void {
    if (!id) return;

    if (confirm('确定要删除这个游戏吗？')) {
      this.gameService.deleteGame(id).subscribe(() => {
        this.games = this.games.filter((g) => g.id !== id);
        this.totalPages = Math.ceil(this.games.length / this.pageSize);
        if (this.currentPage > this.totalPages) {
          this.currentPage = this.totalPages || 1;
        }
        this.updatePagedGames();
      });
    }
  }

  search(): void {
    const keyword = this.searchKeyword.trim().toLowerCase();
    if (!keyword) {
      // 关键字空，恢复全部数据
      this.loadGames();
      return;
    }

    // 本地过滤，也可以调用接口改成后端搜索
    this.gameService.getAllGames().subscribe((data) => {
      this.games = data.filter((game) => {
        const fieldValue = this.getSearchableValue(game, this.searchField);
        return fieldValue.includes(keyword);
      });
      this.currentPage = 1;
      this.totalPages = Math.ceil(this.games.length / this.pageSize);
      this.updatePagedGames();
    });
  }

  clearSearch(): void {
    this.searchKeyword = '';
    this.loadGames();
  }

  private getSearchableValue(game: IGame, field: string): string {
    switch (field) {
      case 'name':
        return game.name?.toLowerCase() || '';
      case 'tags':
        return (game.tags?.join(', ') || '').toLowerCase();
      case 'description':
        return game.description?.toLowerCase() || '';
      default:
        return '';
    }
  }
}
