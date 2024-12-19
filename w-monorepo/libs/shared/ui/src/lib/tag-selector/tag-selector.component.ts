import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITag } from './shared/interfaces/tag-selector.interface';
import { AnalysisHttpService } from '@w-monorepo/analysis';
import { ETagSelector } from './shared/enums/tag-selector.enum';

@Component({
  selector: 'w-tag-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tag-selector.component.html',
  styleUrl: './tag-selector.component.scss',
  providers: [AnalysisHttpService],
})
export class TagSelectorComponent {
  /**
   * @description
   * Different mode will display different layout
   * @type {ETagSelector}
   * @default ETagSelector.DEFAULT
   */
  @Input()
  public mode: ETagSelector = ETagSelector.DEFAULT;

  @Input()
  public tags: ITag[] = [];

  @Input()
  public visibleTagCount = 100;

  @Output()
  public tagSelected = new EventEmitter<number>();

  protected selectedTagIndex = 0;
  protected readonly eTagSelector = ETagSelector;
  protected showAllTags = false;

  public constructor(private analysisHttpService: AnalysisHttpService) {}

  protected get displayedTags(): ITag[] {
    return this.showAllTags
      ? this.tags
      : this.tags.slice(0, this.visibleTagCount);
  }

  protected toggleTagDisplay(): void {
    this.showAllTags = !this.showAllTags;
  }

  protected selectTag(tagIndex: number): void {
    this.selectedTagIndex = tagIndex;
    this.tagSelected.emit(tagIndex);

    this.analysisHttpService
      .submitString('切换tag: ' + this.tags[tagIndex].name)
      .subscribe(
        (response: any) => {
          // console.log('String submitted successfully!', response);
        },
        (error: any) => {
          console.error('Error submitting string:', error);
        }
      );
  }
}
