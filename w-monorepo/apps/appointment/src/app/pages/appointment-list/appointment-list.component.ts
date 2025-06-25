import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppointmentHttpService } from '../../shared/services/appointment.http.service';
import { IAppointment } from '../../shared/interfaces/appointment.interface';

@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.scss',
  providers: [AppointmentHttpService],
})
export class AppointmentListComponent implements OnInit {
  private service = inject(AppointmentHttpService);
  protected router = inject(Router);

  appointments: IAppointment[] = [];
  pagedAppointments: IAppointment[] = [];
  searchKeyword = '';
  currentPage = 1;
  pageSize = 10;
  totalPages = 1;

  showReminder = false;
  reminderRecord: IAppointment | null = null;

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.service.getAllAppointments().subscribe((data) => {
      this.appointments = data;
      this.applyFilter();
    });
  }

  applyFilter(): void {
    let filtered = this.appointments;
    if (this.searchKeyword.trim()) {
      const keyword = this.searchKeyword.trim();
      filtered = filtered.filter(
        (a) =>
          a.name.includes(keyword) ||
          a.contactValue.includes(keyword) ||
          a.description?.includes(keyword)
      );
    }
    this.totalPages = Math.ceil(filtered.length / this.pageSize);
    this.currentPage = Math.min(this.currentPage, this.totalPages || 1);
    const start = (this.currentPage - 1) * this.pageSize;
    this.pagedAppointments = filtered.slice(start, start + this.pageSize);
  }

  search(): void {
    this.currentPage = 1;
    this.applyFilter();
  }

  delete(id: number): void {
    this.service.deleteAppointment(id).subscribe(() => this.load());
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

  formatDate(dateTime: string): string {
    const date = new Date(dateTime);
    return date.toLocaleString();
  }

  openReminderModal(record: IAppointment): void {
    this.reminderRecord = record;
    this.showReminder = true;
  }

  closeReminderModal(): void {
    this.showReminder = false;
    this.reminderRecord = null;
  }

  exportReminderAsImage(): void {
    const card = document.querySelector('.reminder-card') as HTMLElement;
    if (!card) return;

    import('html2canvas').then((html2canvas) => {
      html2canvas
        .default(card, { backgroundColor: '#ffffff' })
        .then((canvas) => {
          const link = document.createElement('a');
          link.href = canvas.toDataURL('image/png');
          link.download = '预约提醒卡片.png';
          link.click();
        });
    });
  }
}
