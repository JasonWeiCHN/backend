import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'w-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public title = 'Management';
  public username = 'username';
}
