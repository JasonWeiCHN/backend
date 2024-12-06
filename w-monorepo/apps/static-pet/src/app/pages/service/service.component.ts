import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pet-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss',
})
export class ServiceComponent {}
