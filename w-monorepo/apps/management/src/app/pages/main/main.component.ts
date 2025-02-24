import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent, SidebarComponent } from '@w-monorepo/ui';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'm-main',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterOutlet, SidebarComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  public items = [
    { label: '主类', link: '/race' },
    { label: '次类', link: '/clans' },
    { label: '文章', link: '/item-cards' },
    { label: '贡献者', link: '/contributor' },
  ];
}
