import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICity, IProvince } from './shared/interfaces/china-city-selector.interface';

@Component({
  selector: 'w-china-city-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './china-city-selector.component.html',
  styleUrl: './china-city-selector.component.scss'
})
export class ChinaCitySelectorComponent {
  @Input() selectedCity: ICity | undefined = undefined;
  @Input() provinces: IProvince[] = [];
  @Output() citySelected: EventEmitter<ICity> = new EventEmitter<ICity>();

  selectCity(city: ICity) {
    this.selectedCity = city;
    this.citySelected.emit(city);
  }
}
