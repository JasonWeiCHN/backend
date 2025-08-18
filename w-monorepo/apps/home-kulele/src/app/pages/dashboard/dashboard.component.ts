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
      title: '开台记账',
      description: '开台和记录每笔账单',
      link: 'https://kulele.club/accounting/', // http://localhost:4201 https://kulele.club/accounting/
    },
    {
      title: '预约系统',
      description: '管理用户预约信息',
      link: 'https://kulele.club/appointment/', // http://localhost:4202 https://kulele.club/appointment/
    },
    {
      title: '支出记录',
      description: '记录每笔花销',
      link: 'https://kulele.club/expense/', // http://localhost:4203 https://kulele.club/expense/
    },
    {
      title: '游戏库（公共）',
      description: '管理所有游戏信息',
      link: 'https://kulele.club/games/', // http://localhost:4204 https://kulele.club/games/
    },
    {
      title: '游戏库（商户）',
      description: '管理商户游戏信息',
      link: 'https://kulele.club/merchant-games/', // http://localhost:4206 https://kulele.club/merchant-games/
    },
    {
      title: '商品管理',
      description: '管理所有游戏信息',
      link: 'https://kulele.club/product/', // http://localhost:4205 https://kulele.club/product/
    },
    {
      title: '包房管理',
      description: '管理所有包房信息',
      link: 'https://kulele.club/room/', // http://localhost:4207 https://kulele.club/room/
    },
    {
      title: '小程序管理',
      description: '管理小程序配置和数据',
      link: 'https://kulele.club/wechat/', // http://localhost:4208 https://kulele.club/wechat/
    },
    {
      title: '会员管理',
      description: '管理会员数据',
      link: 'http://localhost:4209', // http://localhost:4209 https://kulele.club/member/
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

  openReleaseNotes(): void {
    this.router.navigate(['/release-notes']);
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('tenantId');
    this.router.navigate(['/merchant-auth']);
  }
}
