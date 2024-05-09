import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITag } from './shared/interfaces/tag-selector.interface';
import { AnalysisHttpService } from '@w-monorepo/analysis';

@Component({
  selector: 'w-tag-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tag-selector.component.html',
  styleUrl: './tag-selector.component.scss',
  providers: [AnalysisHttpService]
})
export class TagSelectorComponent {
  @Input()
  public tags: ITag[] = [];

  @Output()
  public tagSelected = new EventEmitter<number>();

  protected selectedTagIndex = 0;

  public constructor(private analysisHttpService: AnalysisHttpService) {
  }

  protected selectTag(tagIndex: number): void {
    this.selectedTagIndex = tagIndex;
    this.tagSelected.emit(tagIndex);

    this.analysisHttpService.submitString('切换tag: ' + this.tags[tagIndex].name).subscribe((response: any) => {
      // console.log('String submitted successfully!', response);
    }, (error: any) => {
      console.error('Error submitting string:', error);
    });
  }
}
