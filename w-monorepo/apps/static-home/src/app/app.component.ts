import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AnalysisHttpService } from '@w-monorepo/analysis';
import { HttpClientModule } from '@angular/common/http';

interface INavCard {
  imgUrl: string;
  title: string;
  sourceUrl: string;
  search: string;
}

@Component({
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [AnalysisHttpService],
})
export class AppComponent {
  protected searchQuery = ''; // 用于存储搜索框的输入

  // 假设你有一个图片数据数组
  protected data: INavCard[] = [
    {
      imgUrl: 'assets/F_game-cartridge.png',
      title: '游戏卡带之家',
      sourceUrl: 'http://111.230.29.99:4010/',
      search: '游戏卡带之家YXKDZJ',
    },
    {
      imgUrl: 'assets/F_monster-hunter.png',
      title: '怪物猎人',
      sourceUrl: 'http://111.230.29.99:4012/',
      search: '怪物猎人GWLR',
    },
    {
      imgUrl: 'assets/F_totalwar3.png',
      title: '全面战争·战锤3',
      sourceUrl: 'http://111.230.29.99:4008/',
      search: '全面战争·战锤3QMZZZC3',
    },
    {
      imgUrl: 'assets/F_shogun.png',
      title: '全面战争·幕府将军',
      sourceUrl: 'http://111.230.29.99:4000/',
      search: '全面战争·幕府将军QMZZMFJJ',
    },
    {
      imgUrl: 'assets/F_medieval.png',
      title: '全面战争·中世纪',
      sourceUrl: 'http://111.230.29.99:4003/',
      search: '全面战争·中世纪QMZZZSJ',
    },
    {
      imgUrl: 'assets/F_troy.png',
      title: '全面战争·特洛伊',
      sourceUrl: 'http://111.230.29.99:4004/',
      search: '全面战争·特洛伊QMZZTLY',
    },
    {
      imgUrl: 'assets/F_pharaoh.png',
      title: '全面战争·法老',
      sourceUrl: 'http://111.230.29.99:4001/',
      search: '全面战争·法老QMZZFL',
    },
    {
      imgUrl: 'assets/F_newest.png',
      title: '最新游戏资讯站',
      sourceUrl: 'http://111.230.29.99:4006/',
      search: '最新游戏ZXYX',
    },
    // 更多数据...
  ];

  public constructor(
    private readonly analysisHttpService: AnalysisHttpService
  ) {}

  protected onItemClick(item: INavCard): void {
    console.log(item);
    this.analysisHttpService.submitString('跳转: ' + item.title).subscribe(
      (response: any) => {
        // console.log('String submitted successfully!', response);
      },
      (error: any) => {
        console.error('Error submitting string:', error);
      }
    );
  }

  // 过滤数据的函数
  protected filteredData() {
    if (!this.searchQuery) {
      return this.data; // 如果搜索框为空，显示所有数据
    }
    return this.data.filter((item) =>
      item.search.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
