import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { IClassifierItem } from './shared/interfaces/classifier.interface';

@Component({
  selector: 'w-classifier',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './classifier.component.html',
  styleUrl: './classifier.component.scss',
})
export class ClassifierComponent {

  @Output('classifierItemClick')
  public readonly itemClick: EventEmitter<IClassifierItem> = new EventEmitter<IClassifierItem>();

  public data: IClassifierItem[] = [];

  constructor() {
    this.addClassifierItems();
  }

  public onItemClick(item: IClassifierItem): void {
    this.itemClick.emit(item);
  }

  private addClassifierItems(): void {
    const newData: string[] = [
      '野兽人',
      '混沌恶魔',
      '帝国',
      '高等精灵',
      '蜥竭人',
      '食人魔王国',
      '古墓王',
      '吸血鬼伯爵',
      '巴托尼亚',
      '黑暗精灵',
      '震旦天朝',
      '恐店',
      '诺斯卡',
      '斯卡文鼠人',
      '奸奇',
      '混沌勇士',
      '混沌矮人',
      '矮人',
      '绿皮',
      '基斯里夫',
      '纳垢',
      '色敬',
      '吸血鬼海岸',
      '木精灵'
    ];

    newData.forEach((item, index) => {
      if (!this.data.some(existingItem => existingItem.name === item)) {
        this.data.push({
          id: `${index + 1}`,
          name: item
        });
      }
    });
  }
}
