import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EItemCardMode, IItemCard, ItemCardComponent } from '../item-card';
import { EList } from './shared/enums/list.enum';
import { AnalysisHttpService } from '@w-monorepo/analysis';

@Component({
  selector: 'w-list',
  standalone: true,
  imports: [CommonModule, ItemCardComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  providers: [AnalysisHttpService]
})
export class ListComponent {
  /**
   * @description
   * Different mode will display different layout
   * @type {EList}
   * @default EList.DEFAULT
   */
  @Input()
  public mode: EList = EList.DEFAULT;

  @Input()
  public data: IItemCard[] = [];

  @Input()
  public isAnalysis = true;

  @Output('listItemClick')
  public readonly itemClick: EventEmitter<IItemCard> = new EventEmitter<IItemCard>();

  public constructor(private analysisHttpService: AnalysisHttpService) {
  }

  protected readonly eList = EList;
  protected readonly cardMode: EItemCardMode = EItemCardMode.LIST;

  public onItemClick(item: IItemCard): void {
    this.itemClick.emit(item);

    this.analysisHttpService.submitString(item.title).subscribe((response: any) => {
      // console.log('String submitted successfully!', response);
    }, (error: any) => {
      console.error('Error submitting string:', error);
    });
  }
}
