import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EList, IItemCard, ItemCardComponent, ListComponent } from '@w-monorepo/ui';
import { EArticleTags } from '@w-monorepo/warhammer';
import { ARTICLES_MAP } from '../../shared/constants/data.constants';
import { EMode } from '@w-monorepo/enums';
import { AnalysisHttpService } from '@w-monorepo/analysis';

interface IQa {
  q: string;
  a: string;
}

@Component({
  selector: 'app-war-school',
  standalone: true,
  imports: [CommonModule, ItemCardComponent, ListComponent],
  templateUrl: './war-school.component.html',
  styleUrl: './war-school.component.scss',
  providers: [AnalysisHttpService]
})
export class WarSchoolComponent {
  protected readonly eMode = EMode;
  protected mode = EMode.HOME;
  protected readonly eList = EList;
  protected practicalTeaching: IItemCard[] = ARTICLES_MAP[EArticleTags.PRACTICAL_TEACHING];
  protected basicKnowledge: IItemCard[] = ARTICLES_MAP[EArticleTags.BASIC_KNOWLEDGE];
  protected warSchoolVideo: IItemCard[] = ARTICLES_MAP[EArticleTags.WAR_SCHOOL_VIDEO];
  protected qa: IQa | undefined = undefined;
  protected qas: IQa[] = [
    {
      q: '什么法术强？',
      a: '强力法术有 生命、金属、纳垢，其次奸奇、天堂、火焰、阴影'
    },
    {
      q: '天堂法什么技能好用？',
      a: '夜风诅咒和卡莎朵拉彗星。夜风诅咒减攻击和护甲，彗星爆炸范围巨大，适合清兵。'
    },
    {
      q: '光明系法术有什么特点？',
      a: '阿明托克之网，这个技能可以让敌军无法移动，是很好的战略法术。'
    },
    {
      q: '野兽系法术有什么特点？',
      a: '卡堂变形术，可以召唤蝎尾狮子，这是强大的飞行作战单位。安拉海尔的诅咒，可以降低范围内敌军的近战攻防、射击精度、移速，非常实用。'
    }
  ];

  public constructor(private readonly analysisHttpService: AnalysisHttpService) {
  }

  protected onCardClick(item: IItemCard) {
    if (item.sourceUrl) {
      window.open(item.sourceUrl, '_blank');
    }
  }

  protected onListItemClick(item: IItemCard): void {
    if (item.sourceUrl) {
      window.open(item.sourceUrl, '_blank');
    }
  }

  protected onQaClick(qa: IQa): void {
    this.qa = qa;
    this.mode = EMode.DETAIL;
    this.analysisHttpService.submitString('查看问题: ' + qa.q).subscribe((response: any) => {
      // console.log('String submitted successfully!', response);
    }, (error: any) => {
      console.error('Error submitting string:', error);
    });
  }

  protected goBack(): void {
    this.mode = EMode.HOME;
  }
}
