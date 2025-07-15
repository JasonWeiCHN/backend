import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GameRelationHttpService } from '../../shared/services/game-relation.http.service';
import { IGameRelation } from '../../shared/interfaces/game-relation.interface';

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.scss',
  providers: [GameRelationHttpService],
})
export class GameListComponent {
  private gameService = inject(GameRelationHttpService);
  records: IGameRelation[] = [];
  keyword = '';

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.gameService.getAll().subscribe((data) => {
      this.records = data.sort((a, b) => b.id - a.id);
    });
  }

  search(): void {
    const keyword = this.keyword.trim().toLowerCase();
    this.gameService.getAll().subscribe((data) => {
      this.records = data.filter(
        (g) =>
          g.note?.toLowerCase().includes(keyword) ||
          String(g.gameId).includes(keyword)
      );
    });
  }

  delete(id: number): void {
    if (confirm('确定删除这个游戏关联记录吗？')) {
      this.gameService.delete(id).subscribe(() => this.load());
    }
  }

  format(dateStr: string): string {
    const d = new Date(dateStr);
    return `${d.getFullYear()}-${
      d.getMonth() + 1
    }-${d.getDate()} ${d.getHours()}:${d.getMinutes()}`;
  }
}
