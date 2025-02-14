import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IAddGood, IGood } from './good.interface';
import { GoodHttpService } from './good.http.service';
import { Page } from '@w-monorepo/interfaces';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from '@w-monorepo/ui';

@Component({
  selector: 'm-price-good',
  standalone: true,
  imports: [CommonModule, FormsModule, PaginationComponent],
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
  public addGood: IAddGood = { name: '' }; // 用于绑定新增商品数据
  public isEditModalVisible = false; // 控制编辑商品表单显示
  public editGood: IGood = { id: '', name: '' }; // 用于绑定编辑商品数据

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

  protected onPageChange(page: number): void {
    this.currentPage = page;
    this.loadGoods();
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

  // 打开修改商品表单
  public openEditModal(item: IGood): void {
    this.editGood = { ...item }; // 将选中的商品数据填充到编辑表单
    this.isEditModalVisible = true;
  }

  // 关闭修改商品表单
  public closeEditModal(): void {
    this.isEditModalVisible = false;
    this.editGood = { id: '', name: '' }; // 清空表单数据
  }

  // 提交修改商品
  public editGoodFormSubmit(): void {
    if (this.editGood.name.trim()) {
      this.goodHttpService
        .updateGood(this.editGood.id, this.editGood)
        .subscribe(
          (updatedGood) => {
            // 更新商品列表中的数据
            const index = this.Goods.findIndex(
              (good) => good.id === updatedGood.id
            );
            if (index !== -1) {
              this.Goods[index] = updatedGood;
            }
            this.closeEditModal(); // 关闭表单
          },
          (error) => {
            console.error('修改商品失败', error);
          }
        );
    }
  }

  // 删除商品
  public deleteGood(id: string): void {
    this.goodHttpService.deleteGood(id).subscribe(
      () => {
        this.Goods = this.Goods.filter((good) => good.id !== id); // 从列表中删除商品
      },
      (error) => {
        console.error('删除商品失败', error);
      }
    );
  }
}
