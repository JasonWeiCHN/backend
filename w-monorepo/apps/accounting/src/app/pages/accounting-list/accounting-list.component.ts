import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IAccountingRecord } from '../../shared/interfaces/accounting-record.interface';
import { AccountingHttpService } from '../../shared/services/accounting.http.service';

@Component({
  selector: 'app-accounting-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './accounting-list.component.html',
  styleUrl: './accounting-list.component.scss',
  providers: [AccountingHttpService],
})
export class AccountingListComponent {
  private accountingService = inject(AccountingHttpService);
  records: IAccountingRecord[] = [];

  constructor() {
    this.loadRecords();
  }

  loadRecords(): void {
    this.accountingService.getAllRecords().subscribe((data) => {
      this.records = data;
    });
  }

  delete(id: number): void {
    if (confirm('确定要删除这条记录吗？')) {
      this.accountingService.deleteRecord(id).subscribe(() => {
        this.records = this.records.filter((r) => r.id !== id);
      });
    }
  }

  formatTimeRange(start: string, end: string): string {
    const startDate = new Date(start);
    const endDate = new Date(end);

    const pad = (n: number) => n.toString().padStart(2, '0');

    const startDateStr = `${startDate.getFullYear()}-${pad(
      startDate.getMonth() + 1
    )}-${pad(startDate.getDate())}`;
    const startTimeStr = `${pad(startDate.getHours())}:${pad(
      startDate.getMinutes()
    )}`;
    const endDateStr = `${endDate.getFullYear()}-${pad(
      endDate.getMonth() + 1
    )}-${pad(endDate.getDate())}`;
    const endTimeStr = `${pad(endDate.getHours())}:${pad(
      endDate.getMinutes()
    )}`;

    if (startDateStr === endDateStr) {
      return `${startDateStr} ${startTimeStr} - ${endTimeStr}`;
    } else {
      return `${startDateStr} ${startTimeStr} - ${endDateStr} ${endTimeStr}`;
    }
  }
}
