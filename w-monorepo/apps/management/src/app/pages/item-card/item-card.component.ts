import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IItemCard } from '@w-monorepo/ui';
import { ItemCardHttpService } from './shared/services/item-card.http.service';
import { FormsModule } from '@angular/forms';
import { ARTICLES_MAP } from '@w-monorepo/warhammer';

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
  imports: [CommonModule, FormsModule],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss',
  providers: [ItemCardHttpService]
})
export class ItemCardComponent implements OnInit {
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

  loadItemCards(): void {
    this.itemCardHttpService.getAllItemCards().subscribe((itemCards: IItemCard[]) => {
      this.itemCards = itemCards;
    });
  }

  public uploadByArticlesMap(): void {
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
