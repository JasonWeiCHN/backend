import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BackButtonComponent, EList, IItemCard, ITag, ListComponent, TagSelectorComponent } from '@w-monorepo/ui';
import {
  ARTICLES_MAP,
  EArticleTags,
  IArticleMap,
  IClan,
  IWarhammerClassifierMap,
  WARHAMMER_CLASSIFIERS_MAP
} from '@w-monorepo/warhammer';

@Component({
  selector: 'st-article',
  standalone: true,
  imports: [CommonModule, ListComponent, TagSelectorComponent, BackButtonComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent implements OnInit {
  // TODO 优化: 没有数据的应该不显示
  protected tags: ITag[] = [
    { id: EArticleTags.ALL, name: '全部' },
    { id: EArticleTags.CLANS_DESCRIPTION, name: '派系说明' },
    { id: EArticleTags.LIVE_RECORDING, name: '实况录像' },
    { id: EArticleTags.TASK, name: '任务' },
    { id: EArticleTags.NEWER_TEACH, name: '萌新教学' },
    { id: EArticleTags.CLIP, name: '剪辑大片' },
    { id: EArticleTags.STORY, name: '讲故事' }
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
