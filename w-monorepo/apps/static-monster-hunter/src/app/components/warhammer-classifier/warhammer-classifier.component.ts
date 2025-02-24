import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from '@w-monorepo/ui';
import { Router } from '@angular/router';
import { EWarhammerClassifierMode } from './shared/enums/warhammer-classifier.enum';
import {
  IWarhammerClassifier,
  IWarhammerImageFile,
  WARHAMMER_CLASSIFIERS,
} from '@w-monorepo/warhammer';
import { AnalysisHttpService } from '@w-monorepo/analysis';

@Component({
  selector: 'app-warhammer-classifier',
  standalone: true,
  imports: [CommonModule, ItemCardComponent],
  templateUrl: './warhammer-classifier.component.html',
  styleUrl: './warhammer-classifier.component.scss',
  providers: [AnalysisHttpService],
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

  public constructor(
    private analysisHttpService: AnalysisHttpService,
    private _router: Router
  ) {}

  public data: IWarhammerClassifier[] = WARHAMMER_CLASSIFIERS;

  public onImgBoxClick(item: IWarhammerImageFile): void {
    this._router.navigate([`/article/${item.id}`]);

    this.analysisHttpService.submitString('查看: ' + item.heroName).subscribe(
      (response: any) => {
        // console.log('String submitted successfully!', response);
      },
      (error: any) => {
        console.error('Error submitting string:', error);
      }
    );
  }
}
