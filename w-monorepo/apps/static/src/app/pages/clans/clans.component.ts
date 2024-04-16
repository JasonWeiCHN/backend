import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassifierComponent, IClassifierItem } from '@w-monorepo/ui';
import { WarhammerClassifierComponent } from '../../components/warhammer-classifier/warhammer-classifier.component';

@Component({
  selector: 'st-clans',
  standalone: true,
  imports: [CommonModule, ClassifierComponent, WarhammerClassifierComponent],
  templateUrl: './clans.component.html',
  styleUrl: './clans.component.scss',
})
export class ClansComponent {
  public activeTypeId = '1';

  public onClassifierItemClick(item: IClassifierItem) {
    console.log(item);
    this.activeTypeId = item.id;
  }
}
