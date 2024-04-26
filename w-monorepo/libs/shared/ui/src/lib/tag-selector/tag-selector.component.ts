import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITag } from './shared/interfaces/tag-selector.interface';

@Component({
  selector: 'w-tag-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tag-selector.component.html',
  styleUrl: './tag-selector.component.scss'
})
export class TagSelectorComponent {
  @Input()
  public tags: ITag[] = [];

  @Output()
  public tagSelected = new EventEmitter<number>();

  protected selectedTagIndex = 0;

  protected selectTag(tagIndex: number): void {
    this.selectedTagIndex = tagIndex;
    this.tagSelected.emit(tagIndex);
  }
}
