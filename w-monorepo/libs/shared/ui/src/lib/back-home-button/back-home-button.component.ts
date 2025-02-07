import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'w-back-home-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './back-home-button.component.html',
  styleUrl: './back-home-button.component.scss',
})
export class BackHomeButtonComponent {
  protected goBack(): void {
    // TODO to be input
    window.open('http://111.230.29.99/', '_self');
  }
}
