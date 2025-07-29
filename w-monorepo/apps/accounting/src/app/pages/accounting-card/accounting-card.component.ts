import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountingHttpService } from '../../shared/services/accounting.http.service';
import { Router } from '@angular/router';
import { IRoomStatus } from '../../shared/interfaces/room.interface';

@Component({
  selector: 'app-accounting-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accounting-card.component.html',
  styleUrls: ['./accounting-card.component.scss'],
})
export class AccountingCardComponent implements OnInit {
  rooms: IRoomStatus[] = [];
  selectedRoom: IRoomStatus | null = null;

  constructor(
    private accountingService: AccountingHttpService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.accountingService.getRoomStatusList().subscribe((rooms) => {
      this.rooms = rooms.map((room) => ({
        ...room,
        remainingTime: this.calculateRemainingTime(room.endTime),
      }));
    });

    setInterval(() => {
      this.rooms.forEach((room) => {
        if (room.status === '使用中' && room.endTime) {
          const now = new Date().getTime();
          const end = new Date(room.endTime).getTime();
          const diff = Math.max(end - now, 0);
          room.remainingTime = this.formatCountdown(diff);
        }
      });
    }, 1000);
  }

  openStartForm(room: IRoomStatus): void {
    this.selectedRoom = room;
    this.router.navigate(['/accounting/new'], {
      queryParams: { roomId: room.id },
    });
  }

  setRoomStatus(room: IRoomStatus, status: '空闲' | '停用'): void {
    room.status = status;
    if (status === '空闲') {
      room.startTime = undefined;
      room.endTime = undefined;
      room.remainingTime = undefined;
    }
  }

  endRoomUsage(room: IRoomStatus): void {
    room.status = '空闲';
    room.startTime = undefined;
    room.endTime = undefined;
    room.remainingTime = undefined;
  }

  formatCountdown(ms: number): string {
    const totalSeconds = Math.floor(ms / 1000);
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    return `${h}h ${m}m ${s}s`;
  }

  getRoomClass(room: IRoomStatus): string {
    return room.status;
  }

  private calculateRemainingTime(endTime?: string): string | undefined {
    if (!endTime) return undefined;
    const now = new Date().getTime();
    const end = new Date(endTime).getTime();
    const diff = Math.max(end - now, 0);
    return this.formatCountdown(diff);
  }
}
