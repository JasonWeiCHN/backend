import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NavItem {
  title: string;
  description: string;
  link: string;
}

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'home-kulele';

  navItems: NavItem[] = [
    {
      title: '记账系统',
      description: '记录和统计每笔账单',
      link: 'http://localhost:4201',
    },
    {
      title: '预约系统',
      description: '管理用户预约信息',
      link: 'http://localhost:4202',
    },
    {
      title: '支出记录',
      description: '记录每笔花销',
      link: 'http://localhost:4203',
    },
    {
      title: '游戏库',
      description: '管理所有游戏信息',
      link: 'http://localhost:4204',
    },
    {
      title: '商品管理',
      description: '管理所有游戏信息',
      link: 'http://localhost:4205',
    },
  ];

  openLink(link: string): void {
    window.open(link, '_blank');
  }
}
