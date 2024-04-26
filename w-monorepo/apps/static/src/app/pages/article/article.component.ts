import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BackButtonComponent, EList, IItemCard, ITag, ListComponent, TagSelectorComponent } from '@w-monorepo/ui';
import { ARTICLES_MAP } from '../../shared/constants/articles.constants';
import { IArticleMap } from '../../shared/interfaces/articles.interface';
import { IClan, IWarhammerClassifierMap, WARHAMMER_CLASSIFIERS_MAP } from '@w-monorepo/warhammer';

@Component({
  selector: 'st-article',
  standalone: true,
  imports: [CommonModule, ListComponent, TagSelectorComponent, BackButtonComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent implements OnInit {
  protected tags: ITag[] = [
    { id: 'all', name: '全部' },
    { id: 'clansDescription', name: '派系说明' },
    { id: 'liveRecording', name: '实况录像' },
    { id: 'newerTeach', name: '萌新教学' },
    { id: 'clip', name: '剪辑大片' },
    { id: 'story', name: '讲故事' }
  ];
  protected articlesMap: IArticleMap = ARTICLES_MAP;
  protected warhammerClassifiersMap: IWarhammerClassifierMap = WARHAMMER_CLASSIFIERS_MAP;
  protected title = '';
  protected clan: IClan | undefined = undefined;
  protected readonly eList = EList;
  protected data: IItemCard[] | undefined = undefined;

  public constructor(
    private readonly _activatedRoute: ActivatedRoute
  ) {
  }

  public ngOnInit(): void {
    const { id } = this._activatedRoute.snapshot.params;
    this.clan = this.warhammerClassifiersMap[id];
    this.data = this.articlesMap[id];
    console.log(this.data);
  }

  public onListItemClick(item: IItemCard): void {
    if (item.sourceUrl) {
      window.open(item.sourceUrl, '_blank');
    }
  }

  protected onTagSeclet(tagIndex: number): void {
    const { id } = this._activatedRoute.snapshot.params;
    const selectedTagId = this.tags[tagIndex].id;

    if (selectedTagId === 'all') {
      // 如果选择了 "全部" 标签，则显示所有文章
      this.data = this.articlesMap[id];
    } else {
      // 否则，根据选择的标签 ID 筛选相应的文章
      this.data = (this.articlesMap[id]).filter(article =>
        article.tagIds?.includes(selectedTagId)
      );
    }
  }
}
