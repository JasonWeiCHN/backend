import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IProduct } from '../../shared/interfaces/product.interface';
import { ProductHttpService } from '../../shared/services/product.http.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  providers: [ProductHttpService],
})
export class ProductListComponent implements OnInit {
  private service = inject(ProductHttpService);

  products: IProduct[] = [];
  pagedProducts: IProduct[] = [];
  searchKeyword = '';
  currentPage = 1;
  pageSize = 10;
  totalPages = 1;

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.service.getAll().subscribe((data) => {
      this.products = data;
      this.applyFilter();
    });
  }

  applyFilter(): void {
    let filtered = this.products;
    if (this.searchKeyword.trim()) {
      const keyword = this.searchKeyword.trim().toLowerCase();
      filtered = filtered.filter((p) =>
        `${p.productName} ${p.productCategory} ${p.productCode}`
          .toLowerCase()
          .includes(keyword)
      );
    }
    this.totalPages = Math.ceil(filtered.length / this.pageSize);
    this.currentPage = Math.min(this.currentPage, this.totalPages || 1);
    const start = (this.currentPage - 1) * this.pageSize;
    this.pagedProducts = filtered.slice(start, start + this.pageSize);
  }

  search(): void {
    this.currentPage = 1;
    this.applyFilter();
  }

  delete(id: number): void {
    if (confirm('确定要删除该商品吗？')) {
      this.service.delete(id).subscribe(() => this.load());
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.applyFilter();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.applyFilter();
    }
  }
}
