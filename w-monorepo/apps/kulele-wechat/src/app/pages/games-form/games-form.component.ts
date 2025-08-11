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
  activeTab: 'category' | 'editGame' | 'allGames' = 'editGame';
  gameSearch = '';
  searchResults: any[] = [];
  allGamesFilter = ''; // 全部模式下的过滤关键字
  filteredAllGames: any[] = []; // 全部模式下的过滤结果

  tagOptions = [
    { id: '1', name: 'PS4' },
    { id: '10', name: '类魂' },
    { id: '11', name: '赛车' },
    { id: '12', name: '热门' },
    { id: '13', name: '亲子' },
    { id: '14', name: '解谜' },
    { id: '2', name: 'PS5' },
    { id: '3', name: 'SWITCH' },
    { id: '4', name: '剧情' },
    { id: '5', name: '体育' },
    { id: '6', name: '动作' },
    { id: '7', name: '休闲' },
    { id: '8', name: '双人' },
    { id: '9', name: '开放世界' },
  ];

  genreOptions = [
    { id: '1', name: '动作' },
    { id: '2', name: '休闲' },
    { id: '3', name: '体育' },
    { id: '4', name: '策略' },
    { id: '5', name: '独立' },
    { id: '6', name: '冒险' },
    { id: '7', name: '模拟' },
    { id: '8', name: '角色扮演' },
  ];

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

          // 导入解析完成后，做数据清洗
          this.data.games.forEach((game: any) => {
            game.tags = game.tags.map((t: any) => {
              const found = this.tagOptions.find(
                (opt) => opt.id === t || opt.name === t
              );
              return found ? found.id : t;
            });
          });
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

    const confirmed = confirm(
      `确定要删除游戏 "${this.selectedGame.name}" 吗？此操作将把游戏从您的游戏库移除！`
    );
    if (!confirmed) return;

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
    if (!game.imagesForDetail) {
      game.imagesForDetail = [];
    }

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

  updateGenreName(genre: any) {
    const found = this.genreOptions.find((g) => g.id === genre.id);
    if (found) {
      genre.name = found.name;
    } else {
      genre.name = '';
    }
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

  viewAllGames() {
    if (!this.data?.games) return;
    this.activeTab = 'allGames';
    this.allGamesFilter = '';
    this.filteredAllGames = [...this.data.games];
  }

  // 全部模式过滤
  filterAllGames() {
    const keyword = this.allGamesFilter.toLowerCase().trim();
    if (!keyword) {
      this.filteredAllGames = [...this.data.games];
    } else {
      this.filteredAllGames = this.data.games.filter(
        (g: any) =>
          g.name?.toLowerCase().includes(keyword) ||
          g.searchKeywords?.toLowerCase().includes(keyword)
      );
    }
  }

  // 点击选择某个游戏（从全部列表）
  selectFromAll(game: any) {
    this.selectedGame = game;
    this.activeTab = 'editGame';
  }

  // 搜索过滤
  searchGame() {
    if (!this.data?.games) return;

    const keyword = this.gameSearch?.toLowerCase().trim();
    if (!keyword) {
      this.searchResults = [];
      this.selectedGame = null;
      return;
    }

    // ✅ 获取所有匹配项
    this.searchResults = this.data.games.filter(
      (g: any) =>
        g.name?.toLowerCase().includes(keyword) ||
        g.searchKeywords?.toLowerCase().includes(keyword)
    );

    // 如果只有一个匹配项，直接选中
    if (this.searchResults.length === 1) {
      this.selectedGame = this.searchResults[0];
    } else {
      this.selectedGame = null; // 让用户自己点击选择
    }
  }

  // 用户点击某个搜索结果
  selectGame(game: any) {
    this.selectedGame = game;
    this.searchResults = []; // 选中后清空结果列表
    this.gameSearch = game.name; // 把输入框改成已选游戏名
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
