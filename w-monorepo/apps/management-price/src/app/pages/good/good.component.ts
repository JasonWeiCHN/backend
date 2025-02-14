import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IAddGood, IGood } from './good.interface';
import { GoodHttpService } from './good.http.service';
import { Page } from '@w-monorepo/interfaces';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'm-price-good',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './good.component.html',
  styleUrl: './good.component.scss',
  providers: [GoodHttpService],
})
export class GoodComponent implements OnInit {
  protected Goods: IGood[] = [];
  protected totalPages = 0;
  protected currentPage = 0;
  protected pageSize = 15; // 每页显示数量
  public isAddModalVisible = false; // 控制新增商品表单显示
  public addGood: IAddGood = { name: '' }; // 用于绑定表单数据

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

  // 打开新增商品表单
  public openAddModal(): void {
    this.isAddModalVisible = true;
  }

  // 关闭新增商品表单
  public closeAddModal(): void {
    this.isAddModalVisible = false;
    this.addGood = { name: '' }; // 清空表单数据
  }

  // 提交新增商品
  public addGoodFormSubmit(): void {
    if (this.addGood.name.trim()) {
      this.goodHttpService.createGood(this.addGood).subscribe(
        (good) => {
          this.Goods.push(good); // 将新增的商品添加到商品列表
          this.closeAddModal(); // 关闭表单
        },
        (error) => {
          console.error('新增商品失败', error);
        }
      );
    }
  }
}
