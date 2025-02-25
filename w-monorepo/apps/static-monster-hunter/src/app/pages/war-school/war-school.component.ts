import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  EList,
  IItemCard,
  ItemCardComponent,
  ListComponent,
} from '@w-monorepo/ui';
import { EArticleTags } from '@w-monorepo/warhammer';
import { ARTICLES_MAP } from '../../shared/constants/data.constants';
import { AnalysisHttpService } from '@w-monorepo/analysis';

@Component({
  selector: 'app-war-school',
  standalone: true,
  imports: [CommonModule, ItemCardComponent, ListComponent],
  templateUrl: './war-school.component.html',
  styleUrl: './war-school.component.scss',
  providers: [AnalysisHttpService],
})
export class WarSchoolComponent {
  protected readonly eList = EList;
  public data: IItemCard[] = ARTICLES_MAP[EArticleTags.PRACTICAL_TEACHING];

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
