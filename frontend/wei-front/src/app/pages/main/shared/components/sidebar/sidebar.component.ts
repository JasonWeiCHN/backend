import { Component } from '@angular/core';

@Component({
  selector: 'wei-front-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  public items = [
    { label: '控制台', link: '/user' },
    { label: '用户管理', link: '/user' },
    { label: '设置', link: '/user' }
  ];
}
