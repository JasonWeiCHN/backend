import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberTransactionHttpService } from '../../shared/services/member-transaction.http.service';

@Component({
  selector: 'app-member-consumption',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './member-consumption.component.html',
  styleUrl: './member-consumption.component.scss',
  providers: [MemberTransactionHttpService],
})
export class MemberConsumptionComponent implements OnInit {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private txService = inject(MemberTransactionHttpService);
  protected router = inject(Router);

  form!: FormGroup;
  memberId!: number;
  records: any[] = [];

  ngOnInit(): void {
    this.form = this.fb.group({
      amount: [0, [Validators.required, Validators.min(0.01)]],
      remark: [''],
    });

    this.memberId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadRecords();
  }

  loadRecords() {
    this.txService.getConsumptions(this.memberId).subscribe((res) => {
      this.records = res;
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      alert('请填写正确的消费信息！');
      return;
    }

    this.txService
      .consume({
        memberId: this.memberId,
        ...this.form.value,
      })
      .subscribe(() => {
        alert('消费成功');
        this.loadRecords();
      });
  }
}
