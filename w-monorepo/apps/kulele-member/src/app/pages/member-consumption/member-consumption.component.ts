import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberTransactionHttpService } from '../../shared/services/member-transaction.http.service';

@Component({
  selector: 'app-member-consumption',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './member-consumption.component.html',
})
export class MemberConsumptionComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private txService = inject(MemberTransactionHttpService);
  protected router = inject(Router);

  memberId!: number;
  amount = 0;
  remark = '';

  ngOnInit() {
    this.memberId = Number(this.route.snapshot.paramMap.get('id'));
  }

  submit() {
    this.txService
      .consume({
        memberId: this.memberId,
        amount: this.amount,
        remark: this.remark,
      })
      .subscribe(() => {
        alert('消费成功');
        this.router.navigate(['/member']);
      });
  }
}
