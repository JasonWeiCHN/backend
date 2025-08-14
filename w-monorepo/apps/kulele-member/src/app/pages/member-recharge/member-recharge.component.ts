import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberTransactionHttpService } from '../../shared/services/member-transaction.http.service';

@Component({
  selector: 'app-member-recharge',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './member-recharge.component.html',
})
export class MemberRechargeComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private txService = inject(MemberTransactionHttpService);
  protected router = inject(Router);

  memberId!: number;
  amount = 0;
  bonusAmount = 0;

  ngOnInit() {
    this.memberId = Number(this.route.snapshot.paramMap.get('id'));
  }

  submit() {
    this.txService
      .recharge({
        memberId: this.memberId,
        amount: this.amount,
        bonusAmount: this.bonusAmount,
      })
      .subscribe(() => {
        alert('充值成功');
        this.router.navigate(['/member']);
      });
  }
}
