import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MemberHttpService } from '../../shared/services/member.http.service';

@Component({
  selector: 'app-member-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.scss'],
})
export class MemberDetailsComponent implements OnInit {
  memberId!: number;
  memberDetails: any;

  constructor(
    private route: ActivatedRoute,
    private memberHttp: MemberHttpService
  ) {}

  ngOnInit() {
    this.memberId = Number(this.route.snapshot.paramMap.get('id'));
    this.memberHttp
      .getMemberDetails(this.memberId)
      .subscribe((data: any) => (this.memberDetails = data));
  }
}
