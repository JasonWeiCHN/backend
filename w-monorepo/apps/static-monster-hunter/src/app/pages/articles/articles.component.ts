import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EList, IItemCard, ListComponent } from '@w-monorepo/ui';
import { ARTICLES_MAP } from '../../shared/constants/data.constants';
import { AnalysisHttpService } from '@w-monorepo/analysis';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule, ListComponent],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss',
  encapsulation: ViewEncapsulation.None,
  providers: [AnalysisHttpService],
})
export class ArticlesComponent {
  protected readonly eList = EList;
  public data: IItemCard[] = ARTICLES_MAP['articles'];

  public constructor(
    private readonly analysisHttpService: AnalysisHttpService
  ) {}

  public onListItemClick(item: IItemCard): void {
    if (item.sourceUrl) {
      this.analysisHttpService.submitString('查看: ' + item.title).subscribe(
        (response: any) => {
          // console.log('String submitted successfully!', response);
        },
        (error: any) => {
          console.error('Error submitting string:', error);
        }
      );

      window.open(item.sourceUrl, '_blank');
    }
  }
}
