import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface NavItem {
  title: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  title = '酷乐乐游戏管理系统';
  subtitle = '恭喜发财，生意兴隆';

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
      title: '游戏库（公共）',
      description: '管理所有游戏信息',
      link: 'http://localhost:4204',
    },
    {
      title: '游戏库（商户）',
      description: '管理商户游戏信息',
      link: 'http://localhost:4206',
    },
    {
      title: '商品管理',
      description: '管理所有游戏信息',
      link: 'http://localhost:4205',
    },
  ];

  constructor(private router: Router) {}

  openLink(link: string): void {
    const token = localStorage.getItem('token');

    if (token) {
      const urlWithToken = `${link}?token=${encodeURIComponent(token)}`;
      window.open(urlWithToken, '_blank');
    } else {
      alert('未登录，token 缺失');
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('tenantId');
    this.router.navigate(['/merchant-auth']);
  }
}
