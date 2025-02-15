import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationComponent } from '@w-monorepo/ui';
import { Page } from '@w-monorepo/interfaces';
import { IAddPrice, IPrice } from './price.interface';
import { PriceHttpService } from './price.http.service';
import { debounceTime, of, switchMap } from 'rxjs';
import { GoodHttpService } from '../good/good.http.service';
import { IGood } from '../good/good.interface';
import { IPlatform } from '../platform/platform.interface';
import { PlatformHttpService } from '../platform/platform.http.service';

@Component({
  selector: 'm-price',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    PaginationComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './price.component.html',
  styleUrl: './price.component.scss',
  providers: [PriceHttpService, PlatformHttpService, GoodHttpService],
})
export class PriceComponent implements OnInit {
  protected Prices: IPrice[] = [];
  protected totalPages = 0;
  protected currentPage = 0;
  protected pageSize = 2; // 每页显示数量
  public isAddModalVisible = false; // 控制新增价格表单显示
  public addPrice: IAddPrice = {
    goodId: '',
    platformId: '',
    date: '',
    price: 0,
    sourceUrl: '',
  }; // 用于绑定新增价格数据
  public isEditModalVisible = false; // 控制编辑价格表单显示
  public editPrice: IPrice = {
    id: '',
    goodId: '',
    platformId: '',
    date: '',
    price: 0,
    sourceUrl: '',
  }; // 用于绑定编辑价格数据
  protected goodSearchTerm = ''; // 商品名称搜索关键字
  protected goods: IGood[] = [];
  public platforms: IPlatform[] = []; // 存储平台数据

  public constructor(
    private priceHttpService: PriceHttpService,
    private goodHttpService: GoodHttpService,
    private platformHttpService: PlatformHttpService
  ) {}

  public ngOnInit() {
    this.loadPrices();
    this.loadPlatforms(); // 加载平台信息
  }

  protected loadPrices(): void {
    this.priceHttpService
      .getAllPricesPaginated(this.currentPage, this.pageSize)
      .subscribe((page: Page<IPrice>) => {
        this.Prices = page.content;
        this.totalPages = page.totalPages;
      });
  }

  protected loadPlatforms() {
    this.platformHttpService.getAllPlatforms().subscribe((platforms) => {
      this.platforms = platforms;
    });
  }

  protected onItemClick(item: IPrice): void {
    console.log(item);
  }

  protected onPageChange(page: number): void {
    this.currentPage = page;
    this.loadPrices();
  }

  // 打开新增价格表单
  public openAddModal(): void {
    this.isAddModalVisible = true;
  }

  // 关闭新增价格表单
  public closeAddModal(): void {
    this.isAddModalVisible = false;
    this.addPrice = {
      goodId: '',
      platformId: '',
      date: '',
      price: 0,
      sourceUrl: '',
    }; // 清空表单数据
  }

  // 提交新增价格
  public addPriceFormSubmit(): void {
    if (
      this.addPrice.goodId &&
      this.addPrice.platformId &&
      this.addPrice.date &&
      this.addPrice.price > 0
    ) {
      this.priceHttpService.createPrice(this.addPrice).subscribe(
        (price) => {
          this.Prices.push(price); // 将新增的价格添加到价格列表
          this.closeAddModal(); // 关闭表单
        },
        (error) => {
          console.error('新增价格失败', error);
        }
      );
    }
  }

  // 打开修改价格表单
  public openEditModal(item: IPrice): void {
    this.editPrice = { ...item }; // 将选中的价格数据填充到编辑表单
    this.isEditModalVisible = true;
  }

  // 关闭修改价格表单
  public closeEditModal(): void {
    this.isEditModalVisible = false;
    this.editPrice = {
      id: '',
      goodId: '',
      platformId: '',
      date: '',
      price: 0,
      sourceUrl: '',
    }; // 清空表单数据
  }

  // 提交修改价格
  public editPriceFormSubmit(): void {
    if (
      this.editPrice.goodId &&
      this.editPrice.platformId &&
      this.editPrice.date &&
      this.editPrice.price > 0
    ) {
      this.priceHttpService
        .updatePrice(this.editPrice.id, this.editPrice)
        .subscribe(
          (updatedPrice) => {
            // 更新价格列表中的数据
            const index = this.Prices.findIndex(
              (price) => price.id === updatedPrice.id
            );
            if (index !== -1) {
              this.Prices[index] = updatedPrice;
            }
            this.closeEditModal(); // 关闭表单
          },
          (error) => {
            console.error('修改价格失败', error);
          }
        );
    }
  }

  // 删除价格
  public deletePrice(id: string): void {
    this.priceHttpService.deletePrice(id).subscribe(
      () => {
        this.Prices = this.Prices.filter((price) => price.id !== id); // 从列表中删除价格
      },
      (error) => {
        console.error('删除价格失败', error);
      }
    );
  }

  // 防抖查询
  onGoodSearchChange(searchTerm: string) {
    this.goodSearchTerm = searchTerm;
    of(searchTerm)
      .pipe(
        debounceTime(300), // 设置防抖时间
        switchMap((term) => {
          return this.goodHttpService.searchGoodsByName(term); // 根据输入的商品名称查询商品
        })
      )
      .subscribe((goods) => {
        this.goods = goods; // 更新商品列表
      });
  }
}
