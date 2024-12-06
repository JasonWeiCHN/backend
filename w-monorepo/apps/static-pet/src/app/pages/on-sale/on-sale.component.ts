import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from '@w-monorepo/ui';

@Component({
  selector: 'pet-on-sale',
  standalone: true,
  imports: [CommonModule, GalleryComponent],
  templateUrl: './on-sale.component.html',
  styleUrl: './on-sale.component.scss',
})
export class OnSaleComponent {
  protected images: string[] = [
    'assets/images/dogs/dog1.jpg',
    'assets/images/dogs/dog2.jpg',
    'assets/images/dogs/dog3.jpg',
    'assets/images/dogs/dog4.jpg',
    'assets/images/dogs/dog5.jpg',
    'assets/images/dogs/dog6.jpg',
    'assets/images/dogs/dog7.jpg',
    'assets/images/dogs/dog8.jpg',
    'assets/images/dogs/dog9.jpg',
    'assets/images/dogs/dog10.jpg',
    'assets/images/dogs/dog11.jpg',
    'assets/images/dogs/dog1.jpg',
    'assets/images/dogs/dog2.jpg',
    'assets/images/dogs/dog3.jpg',
  ];
}
