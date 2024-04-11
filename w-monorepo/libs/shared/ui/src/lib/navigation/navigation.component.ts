import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'w-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  public items: string[] = ['全派系', '战争讲堂','文章资料'];
  public activeItem  = '全派系';

  activateItem(item: string) {
    this.activeItem = item;
  }
}
