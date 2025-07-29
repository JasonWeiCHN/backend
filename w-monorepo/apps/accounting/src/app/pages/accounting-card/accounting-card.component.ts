import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountingHttpService } from '../../shared/services/accounting.http.service';
import { Router } from '@angular/router';
import {
  IRoomStatus,
  TRoomWithLoading,
} from '../../shared/interfaces/room.interface';
import {
  ERoomStatus,
  RoomStatusLabelMap,
} from '../../shared/enums/room-status.enum';

@Component({
  selector: 'app-accounting-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accounting-card.component.html',
  styleUrls: ['./accounting-card.component.scss'],
})
export class AccountingCardComponent implements OnInit {
  rooms: TRoomWithLoading[] = [];
  selectedRoom: IRoomStatus | null = null;
  ERoomStatus = ERoomStatus; // 供模板中使用

  constructor(
    private accountingService: AccountingHttpService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.accountingService.getRoomStatusList().subscribe((rooms) => {
      this.rooms = rooms.map((room) => ({
        ...room,
        remainingTime: this.calculateRemainingTime(room.endTime),
        loading: false, // 初始为 false
      }));
    });

    setInterval(() => {
      this.rooms.forEach((room) => {
        if (room.status === ERoomStatus.OCCUPIED && room.endTime) {
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

  setRoomStatus(
    room: TRoomWithLoading,
    status: ERoomStatus.AVAILABLE | ERoomStatus.DISABLED
  ): void {
    room.loading = true; // 开始 loading
    this.accountingService.updateRoomStatus(room.id, status).subscribe({
      next: () => {
        room.status = status;
        if (status === ERoomStatus.AVAILABLE) {
          room.startTime = undefined;
          room.endTime = undefined;
          room.remainingTime = undefined;
        }
      },
      error: () => {
        alert('状态更新失败');
      },
      complete: () => {
        room.loading = false; // 结束 loading
      },
    });
  }

  endRoomUsage(room: TRoomWithLoading): void {
    room.loading = true;
    this.accountingService
      .updateRoomStatus(room.id, ERoomStatus.AVAILABLE)
      .subscribe({
        next: () => {
          room.status = ERoomStatus.AVAILABLE;
          room.startTime = undefined;
          room.endTime = undefined;
          room.remainingTime = undefined;
        },
        error: () => {
          alert('结束使用失败');
        },
        complete: () => {
          room.loading = false;
        },
      });
  }

  formatCountdown(ms: number): string {
    const totalSeconds = Math.floor(ms / 1000);
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    return `${h}h ${m}m ${s}s`;
  }

  getStatusLabel(status: ERoomStatus): string {
    return RoomStatusLabelMap[status] || status;
  }

  private calculateRemainingTime(endTime?: string): string | undefined {
    if (!endTime) return undefined;
    const now = new Date().getTime();
    const end = new Date(endTime).getTime();
    const diff = Math.max(end - now, 0);
    return this.formatCountdown(diff);
  }
}
