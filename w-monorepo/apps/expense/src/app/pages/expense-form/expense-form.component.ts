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
}
