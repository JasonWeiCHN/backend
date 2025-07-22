import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../shared/interfaces/product.interface';
import { ProductHttpService } from '../../shared/services/product.http.service';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
  providers: [ProductHttpService],
})
export class ProductFormComponent implements OnInit {
  protected router = inject(Router);
  private route = inject(ActivatedRoute);
  private fb = inject(FormBuilder);
  private service = inject(ProductHttpService);

  form!: FormGroup;
  isEditMode = false;
  productId?: number;
  submitting = false; // ✅ 防止重复点击用这个
  errorMessage = ''; // ✅ 显示错误信息用这个
  productCategories = ['游戏', '游戏机', '电脑及配件', '食品/饮料', '其他'];

  ngOnInit(): void {
    this.form = this.fb.group({
      productName: ['', Validators.required],
      productCategory: ['', Validators.required],
      productCode: ['', Validators.required],
      purchasePrice: [0, Validators.required],
      sellingPrice: [0, Validators.required],
      inventory: [0, Validators.required],
      description: [''],
    });

    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.isEditMode = true;
      this.productId = +idParam;
      this.service.getById(this.productId).subscribe((product) => {
        if (product) this.form.patchValue(product);
      });
    }
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    const data: IProduct = {
      id: this.productId ?? Date.now(),
      ...this.form.value,
    };

    const save$ = this.isEditMode
      ? this.service.update(data.id, data)
      : this.service.create(data);

    save$.subscribe({
      next: () => this.router.navigate(['/products']),
      error: (err) => {
        alert(err.error || '提交失败，请稍后再试');
      },
    });
  }
}
