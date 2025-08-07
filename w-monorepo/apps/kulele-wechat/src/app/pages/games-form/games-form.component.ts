import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-games-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './games-form.component.html',
  styleUrls: ['./games-form.component.scss'],
})
export class GamesFormComponent {
  data: any = null;
  selectedGame: any = null;
  activeTab: 'category' | 'game' = 'category';
  gameSearch = '';

  // 读取并解析 games.js
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const text = reader.result as string;
      const match = text.match(/module\.exports\s*=\s*(\{[\s\S]*\})\s*$/);
      if (match) {
        try {
          const objStr = match[1];
          this.data = new Function('return ' + objStr)();
        } catch (err) {
          alert('解析失败，文件格式错误');
        }
      } else {
        alert('未找到 module.exports 对象');
      }
    };
    reader.readAsText(file);
  }

  // 分类处理
  addCategory() {
    this.data?.categories.push('');
  }

  removeCategory(i: number) {
    this.data?.categories.splice(i, 1);
  }

  // 游戏添加与选择
  addGame() {
    const newGame = {
      id: Date.now(),
      name: '',
      image: '',
      imagesForDetail: [],
      tags: [],
      searchKeywords: '',
      path: '',
      releaseDate: '',
      description: '',
      genres: [],
      guides: [],
      videos: [], // 改为数组
    };
    this.data?.games.push(newGame);
    this.selectedGame = newGame;
  }

  deleteSelectedGame() {
    if (!this.selectedGame) return;
    const index = this.data.games.findIndex(
      (g: any) => g.id === this.selectedGame.id
    );
    if (index >= 0) {
      this.data.games.splice(index, 1);
      this.selectedGame = null;
      this.gameSearch = '';
    }
  }

  // 编辑支持的数组字段
  addImage(game: any) {
    game.imagesForDetail.push('');
  }

  removeImage(game: any, index: number) {
    game.imagesForDetail.splice(index, 1);
  }

  addVideo() {
    if (!this.selectedGame.videos) this.selectedGame.videos = [];
    this.selectedGame.videos.push('');
  }

  removeVideo(index: number) {
    this.selectedGame.videos.splice(index, 1);
  }

  addGenre(game: any) {
    game.genres.push({ id: '', name: '', description: '' });
  }

  removeGenre(game: any, index: number) {
    game.genres.splice(index, 1);
  }

  addGuide(game: any) {
    game.guides.push({ title: '', description: '', author: '', sourceUrl: '' });
  }

  removeGuide(game: any, index: number) {
    game.guides.splice(index, 1);
  }

  addTag(game: any) {
    game.tags.push('');
  }

  removeTag(game: any, index: number) {
    game.tags.splice(index, 1);
  }

  // 搜索过滤
  searchGame() {
    if (!this.data?.games) return;

    const keyword = this.gameSearch?.toLowerCase().trim();
    if (!keyword) {
      this.selectedGame = null;
      return;
    }

    const result = this.data.games.find(
      (g: any) =>
        g.name?.toLowerCase().includes(keyword) ||
        g.searchKeywords?.toLowerCase().includes(keyword)
    );
    this.selectedGame = result || null;
  }

  // 下载为 JS
  download() {
    if (!this.data) return;

    const text = JSON.stringify(this.data, null, 2)
      .replace(/"([^"]+)":/g, '$1:')
      .replace(/"/g, `'`);
    const finalText = `module.exports = ${text};\n`;

    const blob = new Blob([finalText], { type: 'application/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'games.js';
    a.click();
    URL.revokeObjectURL(url);
  }
}
