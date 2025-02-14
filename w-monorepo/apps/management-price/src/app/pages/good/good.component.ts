import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IGood } from './good.interface';
import { GoodHttpService } from './good.http.service';
import { Page } from '@w-monorepo/interfaces';

@Component({
  selector: 'm-price-good',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './good.component.html',
  styleUrl: './good.component.scss',
  providers: [GoodHttpService],
})
export class GoodComponent implements OnInit {
  protected Goods: IGood[] = [];
  protected totalPages = 0;
  protected currentPage = 0;
  protected pageSize = 15; // 每页显示数量

  public constructor(private goodHttpService: GoodHttpService) {}

  public ngOnInit() {
    this.loadGoods();
  }

  protected loadGoods(): void {
    this.goodHttpService
      .getAllGoodsPaginated(this.currentPage, this.pageSize)
      .subscribe((page: Page<IGood>) => {
        this.Goods = page.content;
        this.totalPages = page.totalPages;
      });
  }

  protected onItemClick(item: IGood): void {
    console.log(item);
  }
}
