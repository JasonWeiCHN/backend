import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'w-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input()
  public items = [
    { label: '控制', link: '/user' },
    { label: '文章', link: '/article' },
    { label: '图片', link: '/image' },
    { label: '图片', link: '/picture' },
    { label: '图片', link: '/pictures' },
    { label: '用户', link: '/user' },
    { label: '任务', link: '/task' },
    { label: '产品', link: '/product' },
    { label: '设置', link: '/user' }
  ];
}
