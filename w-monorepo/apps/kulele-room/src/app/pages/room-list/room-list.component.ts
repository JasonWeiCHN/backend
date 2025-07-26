import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IRoom } from '../../shared/interfaces/room.interface';
import { RoomHttpService } from '../../shared/services/room.http.service';

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.scss',
})
export class RoomListComponent {
  private roomService = inject(RoomHttpService);
  records: IRoom[] = [];
  pagedRecords: IRoom[] = [];

  pageSize = 50;
  currentPage = 1;
  totalPages = 1;
  searchKeyword = '';

  constructor() {
    this.loadRecords();
  }

  loadRecords(): void {
    this.roomService.getAllRooms().subscribe((data) => {
      this.records = data.sort((a, b) => b.id - a.id);
      this.totalPages = Math.ceil(this.records.length / this.pageSize);
      this.updatePagedRecords();
    });
  }

  search(): void {
    const keyword = this.searchKeyword.trim().toLowerCase();
    if (!keyword) return this.loadRecords();

    this.roomService.getAllRooms().subscribe((data) => {
      this.records = data.filter((r) =>
        [r.roomNumber, r.roomType, r.description].some((f) =>
          f?.toLowerCase().includes(keyword)
        )
      );
      this.currentPage = 1;
      this.totalPages = Math.ceil(this.records.length / this.pageSize);
      this.updatePagedRecords();
    });
  }

  updatePagedRecords(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedRecords = this.records.slice(startIndex, endIndex);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagedRecords();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagedRecords();
    }
  }

  delete(id: number): void {
    if (confirm('确定要删除该包房吗？')) {
      this.roomService.deleteRoom(id).subscribe(() => {
        this.records = this.records.filter((r) => r.id !== id);
        this.totalPages = Math.ceil(this.records.length / this.pageSize);
        this.updatePagedRecords();
      });
    }
  }
}
