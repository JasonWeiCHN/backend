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
  selector: 'app-member-recharge',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './member-recharge.component.html',
  styleUrl: './member-recharge.component.scss',
  providers: [MemberTransactionHttpService],
})
export class MemberRechargeComponent implements OnInit {
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
      bonusAmount: [0, [Validators.min(0)]],
    });

    this.memberId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadRecords();
  }

  loadRecords() {
    this.txService.getRecharges(this.memberId).subscribe((res) => {
      this.records = res;
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      alert('请填写正确的充值信息！');
      return;
    }

    this.txService
      .recharge({
        memberId: this.memberId,
        ...this.form.value,
      })
      .subscribe(() => {
        alert('充值成功');
        this.loadRecords();
      });
  }
}
