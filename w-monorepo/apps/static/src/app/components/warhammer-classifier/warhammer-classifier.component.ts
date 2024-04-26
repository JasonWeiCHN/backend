import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EItemCardMode, ItemCardComponent } from '@w-monorepo/ui';
import { Router } from '@angular/router';
import { EWarhammerClassifierMode } from './shared/enums/warhammer-classifier.enum';
import { IImageFile, IWarhammerClassifier, WARHAMMER_CLASSIFIERS } from '@w-monorepo/warhammer';

@Component({
  selector: 'st-warhammer-classifier',
  standalone: true,
  imports: [CommonModule, ItemCardComponent],
  templateUrl: './warhammer-classifier.component.html',
  styleUrl: './warhammer-classifier.component.scss'
})
export class WarhammerClassifierComponent {
  /**
   * @description
   * Different mode will display different layout
   * @type {EWarhammerClassifierMode}
   * @default EWarhammerClassifierMode.LIST
   */
  @Input()
  public mode: EWarhammerClassifierMode = EWarhammerClassifierMode.LIST;

  protected eWarhammerClassifierMode = EWarhammerClassifierMode;

  public constructor(private _router: Router) {
  }

  public data: IWarhammerClassifier[] = WARHAMMER_CLASSIFIERS;

  public onImgBoxClick(item: IImageFile): void {
    this._router.navigate([`/article/${item.id}`]);
  }

  protected readonly eItemCardMode = EItemCardMode;
}
