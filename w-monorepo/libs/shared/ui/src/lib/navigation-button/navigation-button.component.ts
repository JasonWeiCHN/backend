import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'w-navigation-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation-button.component.html',
  styleUrls: ['./navigation-button.component.scss'],
})
export class NavigationButtonComponent {
  @Input() url = ''; // 接收外部传入的 URL
  @Input() buttonText = '返回导航'; // 接收外部传入的按钮文本

  protected goBack(): void {
    if (this.url) {
      window.open(this.url, '_self');
    } else {
      console.error('No URL provided');
    }
  }
}
