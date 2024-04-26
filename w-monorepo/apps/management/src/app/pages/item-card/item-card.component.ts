import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IItemCard } from '@w-monorepo/ui';
import { ItemCardHttpService } from './shared/services/item-card.http.service';
import { FormsModule } from '@angular/forms';

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
    detail: ''
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
      detail: ''
    };
  }
}
