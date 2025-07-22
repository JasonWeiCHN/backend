import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpenseHttpService } from '../../shared/services/expense.http.service';
import { IExpense } from '../../shared/interfaces/expense.interface';

@Component({
  selector: 'app-expense-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './expense-form.component.html',
  styleUrl: './expense-form.component.scss',
  providers: [ExpenseHttpService],
})
export class ExpenseFormComponent implements OnInit {
  protected router = inject(Router);
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private expenseService = inject(ExpenseHttpService);

  form!: FormGroup;
  isEditMode = false;
  expenseId?: number;
  categoryTypes = [
    '游戏',
    '游戏机',
    '装修',
    '设备',
    '消耗品',
    '工具',
    '服务',
    '玩具/摆件',
    '电脑及配件',
    '食品/饮料',
    '其他',
  ];

  ngOnInit(): void {
    this.form = this.fb.group({
      dateTime: ['', Validators.required],
      category: ['', Validators.required],
      description: [''],
      amount: [0, [Validators.required, Validators.min(0)]],
    });

    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.isEditMode = true;
      this.expenseId = +idParam;
      this.expenseService
        .getExpenseById(this.expenseId)
        .subscribe((expense) => {
          this.form.patchValue(expense);
        });
    }
  }

  onSubmit(): void {
    if (this.form.invalid) {
      console.log('表单验证失败');
      return;
    }

    const data: IExpense = {
      id: this.expenseId ?? Date.now(),
      ...this.form.value,
    };

    const save$ = this.isEditMode
      ? this.expenseService.updateExpense(data.id, data)
      : this.expenseService.createExpense(data);

    save$.subscribe(() => this.router.navigate(['/expense']));
  }

  openDatePicker(event: FocusEvent): void {
    const input = event.target as HTMLInputElement;
    if (input && 'showPicker' in input) {
      input.showPicker(); // Chrome、Edge 支持
    }
  }
}
