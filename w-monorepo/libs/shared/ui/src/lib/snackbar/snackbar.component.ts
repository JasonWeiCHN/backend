import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { SnackbarService } from './shared/services/snackbar.service';

@Component({
  selector: 'w-snackbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  animations: [
    trigger('snackbarAnimation', [
      state('void', style({
        opacity: 0,
        transform: 'translateY(-100%)'
      })),
      state('*', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('void <=> *', animate('300ms ease-in-out'))
    ])
  ]
})
export class SnackbarComponent implements OnInit {
  message: string | null = null;

  constructor(private snackbarService: SnackbarService) {
  }

  ngOnInit() {
    this.snackbarService.snackbarState.subscribe(message => {
      this.message = message;
      setTimeout(() => this.message = null, 3000); // 显示3秒后隐藏
    });
  }
}
