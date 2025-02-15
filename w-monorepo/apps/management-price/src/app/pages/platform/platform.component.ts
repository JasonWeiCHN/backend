import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationComponent } from '@w-monorepo/ui';
import { Page } from '@w-monorepo/interfaces';
import { IAddPlatform, IPlatform } from './platform.interface';
import { PlatformHttpService } from './platform.http.service';

@Component({
  selector: 'm-price-platform',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    PaginationComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './platform.component.html',
  styleUrl: './platform.component.scss',
  providers: [PlatformHttpService],
})
export class PlatformComponent {
  protected Platforms: IPlatform[] = [];
  protected totalPages = 0;
  protected currentPage = 0;
  protected pageSize = 2; // 每页显示数量
  public isAddModalVisible = false; // 控制新增商品表单显示
  public addPlatform: IAddPlatform = { name: '' }; // 用于绑定新增商品数据
  public isEditModalVisible = false; // 控制编辑商品表单显示
  public editPlatform: IPlatform = { id: '', name: '' }; // 用于绑定编辑商品数据

  public constructor(private platformHttpService: PlatformHttpService) {}

  public ngOnInit() {
    this.loadPlatforms();
  }

  protected loadPlatforms(): void {
    this.platformHttpService
      .getAllPlatformsPaginated(this.currentPage, this.pageSize)
      .subscribe((page: Page<IPlatform>) => {
        this.Platforms = page.content;
        this.totalPages = page.totalPages;
      });
  }

  protected onItemClick(item: IPlatform): void {
    console.log(item);
  }

  protected onPageChange(page: number): void {
    this.currentPage = page;
    this.loadPlatforms();
  }

  // 打开新增商品表单
  public openAddModal(): void {
    this.isAddModalVisible = true;
  }

  // 关闭新增商品表单
  public closeAddModal(): void {
    this.isAddModalVisible = false;
    this.addPlatform = { name: '' }; // 清空表单数据
  }

  // 提交新增商品
  public addPlatformFormSubmit(): void {
    if (this.addPlatform.name.trim()) {
      this.platformHttpService.createPlatform(this.addPlatform).subscribe(
        (platform) => {
          this.Platforms.push(platform); // 将新增的商品添加到商品列表
          this.closeAddModal(); // 关闭表单
        },
        (error) => {
          console.error('新增商品失败', error);
        }
      );
    }
  }

  // 打开修改商品表单
  public openEditModal(item: IPlatform): void {
    this.editPlatform = { ...item }; // 将选中的商品数据填充到编辑表单
    this.isEditModalVisible = true;
  }

  // 关闭修改商品表单
  public closeEditModal(): void {
    this.isEditModalVisible = false;
    this.editPlatform = { id: '', name: '' }; // 清空表单数据
  }

  // 提交修改商品
  public editPlatformFormSubmit(): void {
    if (this.editPlatform.name.trim()) {
      this.platformHttpService
        .updatePlatform(this.editPlatform.id, this.editPlatform)
        .subscribe(
          (updatedPlatform) => {
            // 更新商品列表中的数据
            const index = this.Platforms.findIndex(
              (platform) => platform.id === updatedPlatform.id
            );
            if (index !== -1) {
              this.Platforms[index] = updatedPlatform;
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
  public deletePlatform(id: string): void {
    this.platformHttpService.deletePlatform(id).subscribe(
      () => {
        this.Platforms = this.Platforms.filter(
          (platform) => platform.id !== id
        ); // 从列表中删除商品
      },
      (error) => {
        console.error('删除商品失败', error);
      }
    );
  }
}
