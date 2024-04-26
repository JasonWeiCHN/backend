import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAddItemCard } from '../../item-card.component';
import { IItemCard } from '@w-monorepo/ui';
import { Injectable } from '@angular/core';

@Injectable()
export class ItemCardHttpService {
  private baseUrl = 'http://localhost:8080/itemCard';

  constructor(private http: HttpClient) {
  }

  getAllItemCards(): Observable<IItemCard[]> {
    return this.http.get<IItemCard[]>(`${this.baseUrl}/findAll`);
  }

  addItemCard(addItemCard: IAddItemCard): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/saveItemCard`, addItemCard);
  }
}
