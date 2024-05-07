import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IItemCard, PaginationComponent } from '@w-monorepo/ui';
import { ItemCardHttpService } from './shared/services/item-card.http.service';
import { FormsModule } from '@angular/forms';
import { ARTICLES_MAP } from '@w-monorepo/warhammer';
import { Page } from '@w-monorepo/interfaces';

export interface IAddItemCard {
  typeId: string;
  imageUrl: string;
  sourceUrl: string;
  title: string;
  views: number;
  description: string;
  publisher: string;
  date: string;
  detail: string;
  referer: string;
  tagIds: string;
}


@Component({
  selector: 'm-item-card',
  standalone: true,
  imports: [CommonModule, FormsModule, PaginationComponent],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss',
  providers: [ItemCardHttpService]
})
export class ItemCardComponent implements OnInit {
  protected selectedItemDetail: IItemCard | null = null;
  protected selectedItemJson: string | null = null;
  protected currentPage = 0;
  protected totalPages = 0;
  protected pageSize = 15; // 每页显示数量

  protected selectedColumn = 'publisher'; // 默认选择 publisher 字段
  protected searchKeyword = '';

  // TODO 动态化
  columns: string[] = ['id', 'publisher', 'typeId', 'imageUrl', 'sourceUrl', 'title', 'views', 'description', 'tagIds', 'referer'];

  itemCards: IItemCard[] = [];
  public addItemCard: IAddItemCard = {
    typeId: '',
    imageUrl: '',
    sourceUrl: '',
    title: '',
    views: 0,
    description: '',
    publisher: '',
    date: '',
    detail: '',
    referer: '',
    tagIds: ''
  };

  constructor(private itemCardHttpService: ItemCardHttpService) {
  }

  ngOnInit(): void {
    this.loadItemCards();
  }

  // 点击搜索按钮时触发的方法
  protected search(): void {
    // 向后端发送搜索请求
    this.itemCardHttpService.searchItemCards(this.selectedColumn, this.searchKeyword).subscribe((itemCards: IItemCard[]) => {
      this.itemCards = itemCards; // 更新列表数据
    });
  }

  protected onItemClick(item: IItemCard): void {
    this.selectedItemDetail = item;
    this.selectedItemJson = JSON.stringify(item, null, 2); // 格式化JSON字符串
  }

  protected onDelete(itemId: string): void {
    this.itemCardHttpService.deleteItemCard(parseInt(itemId)).subscribe(
      () => {
        console.log('Item card deleted successfully!');
        // 删除成功后，重新加载数据
        this.loadItemCards();
        this.selectedItemDetail = null; // 清空选中的详情
      },
      (error: any) => {
        console.error('Failed to delete item card:', error);
      }
    );
  }


  protected loadItemCards(): void {
    this.itemCardHttpService.getAllItemCardsPaginated(this.currentPage, this.pageSize)
      .subscribe((page: Page<IItemCard>) => {
        this.itemCards = page.content;
        this.totalPages = page.totalPages;
      });
  }

  protected onPageChange(page: number): void {
    this.currentPage = page;
    this.loadItemCards();
  }

  protected downloadItemCardsAsJson(): void {
    this.itemCardHttpService.downloadItemCardsAsJson().subscribe(
      (data: any) => {
        const blob = new Blob([data], { type: 'application/json' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'item_cards.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      },
      (error: any) => {
        console.error('Failed to download item cards:', error);
      }
    );
  }

  protected uploadByArticlesMap(): void {
    for (const key of Object.keys(ARTICLES_MAP)) {
      const articles = ARTICLES_MAP[key];
      for (const article of articles) {
        const views: number = typeof article.views === 'string' ? parseInt(article.views) : article.views || 0;
        const addItemCard: IAddItemCard = {
          typeId: key,
          imageUrl: article.imageUrl,
          sourceUrl: article.sourceUrl ?? '',
          title: article.title,
          views: views,
          description: article.description,
          publisher: article.publisher ?? '',
          date: article.date,
          detail: article.detail,
          referer: article.referer ?? '', // 添加 referer 属性
          tagIds: article.tagIds.join(';')
        };

        this.itemCardHttpService.addItemCard(addItemCard).subscribe(
          () => {
            console.log('Item card saved successfully!');
            this.loadItemCards(); // Reload item cards after adding a new one
          },
          (error: any) => {
            console.error('Failed to save item card:', error);
          }
        );
      }
    }
  }

  onSubmit(): void {
    this.itemCardHttpService.addItemCard(this.addItemCard).subscribe(
      () => {
        console.log('Item card saved successfully!');
        this.loadItemCards(); // Reload item cards after adding a new one
        this.clearForm(); // Clear the form after successful submission
      },
      (error: any) => {
        console.error('Failed to save item card:', error);
      }
    );
  }

  private clearForm(): void {
    this.addItemCard = {
      typeId: '',
      imageUrl: '',
      sourceUrl: '',
      title: '',
      views: 0,
      description: '',
      publisher: '',
      date: '',
      detail: '',
      referer: '',
      tagIds: ''
    };
  }
}
