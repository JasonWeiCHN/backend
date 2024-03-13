import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IClassifierItem } from './shared/interfaces/classifier.interface';

@Component({
  selector: 'wei-front-classifier',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './classifier.component.html',
  styleUrls: ['./classifier.component.scss'],
})
export class ClassifierComponent {
  public classifierItems: IClassifierItem[] = [];

  constructor() {
    // 添加新数据到 classifierItems 数组
    this.addClassifierItems();
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
      // 检查是否已存在该项，避免重复添加
      if (!this.classifierItems.some(existingItem => existingItem.name === item)) {
        this.classifierItems.push({
          id: this.classifierItems.length + index + 1,
          name: item
        });
      }
    });
  }
}