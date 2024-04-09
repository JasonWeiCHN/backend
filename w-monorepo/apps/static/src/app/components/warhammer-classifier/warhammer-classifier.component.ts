import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IImageFile, IWarhammerClassifier } from './shared/interfaces/warhammer-classifier';
import { ItemCardComponent } from '@w-monorepo/ui';
import { Router } from '@angular/router';
import { WARHAMMER_CLASSIFIERS } from './shared/constants/warhammer-classifier.constants';

@Component({
  selector: 'st-warhammer-classifier',
  standalone: true,
  imports: [CommonModule, ItemCardComponent],
  templateUrl: './warhammer-classifier.component.html',
  styleUrl: './warhammer-classifier.component.scss',
})
export class WarhammerClassifierComponent {
  constructor(private _router: Router) { }

  public data: IWarhammerClassifier[] = WARHAMMER_CLASSIFIERS;

  public onImgBoxClick(item: IImageFile, parentId: string): void {
    console.log(item)
    this._router.navigate([`/article/${parentId + '_' + item.id}`]);
  }
}
