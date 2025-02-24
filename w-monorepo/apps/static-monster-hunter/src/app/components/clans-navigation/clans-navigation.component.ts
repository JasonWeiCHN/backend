import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IWarhammerImageFile,
  WARHAMMER_CLASSIFIERS,
} from '@w-monorepo/warhammer';
import { Router } from '@angular/router';
import { AnalysisHttpService } from '@w-monorepo/analysis';

@Component({
  selector: 'app-weapons-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clans-navigation.component.html',
  styleUrl: './clans-navigation.component.scss',
  providers: [AnalysisHttpService],
})
export class ClansNavigationComponent {
  public constructor(
    private analysisHttpService: AnalysisHttpService,
    private _router: Router
  ) {}

  protected readonly data = WARHAMMER_CLASSIFIERS;

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
