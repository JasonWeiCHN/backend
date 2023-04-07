import { Component } from '@angular/core';

@Component({
  selector: 'wei-front-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  public items = [
    { label: '控制', link: '/user' },
    { label: '图片', link: '/image' },
    { label: '用户', link: '/user' },
    { label: '任务', link: '/task' },
    { label: '产品', link: '/product' },
    { label: '设置', link: '/user' },
  ];
}
