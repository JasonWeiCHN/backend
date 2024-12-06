import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {
  BackButtonComponent,
  EList,
  IItemCard,
  ITag,
  ListComponent,
  SnackbarService,
  TagSelectorComponent,
} from '@w-monorepo/ui';
import {
  EArticleTags,
  IClan,
  IWarhammerClassifierMap,
  WARHAMMER_CLASSIFIERS_MAP,
} from '@w-monorepo/warhammer';
import { IArticleMap, IContributor } from '@w-monorepo/interfaces';
import { ARTICLES_MAP } from '../../shared/constants/data.constants';
import { AnalysisHttpService } from '@w-monorepo/analysis';
import { VoteHttpService } from '@w-monorepo/vote';
import {
  CLAN_MAP,
  IClanExtra,
  IClanMap,
} from '../../shared/constants/local-data.constants';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [
    CommonModule,
    ListComponent,
    TagSelectorComponent,
    BackButtonComponent,
  ],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
  encapsulation: ViewEncapsulation.None,
  providers: [AnalysisHttpService, VoteHttpService],
})
export class ArticleComponent implements OnInit {
  // TODO 优化: 没有数据的应该不显示
  protected tags: ITag[] = [
    { id: EArticleTags.ALL, name: '全部' },
    { id: EArticleTags.VOTE, name: '投票' },
    { id: EArticleTags.CLANS_DESCRIPTION, name: '派系说明' },
    { id: EArticleTags.LIVE_RECORDING, name: '实况录像' },
    { id: EArticleTags.TASK, name: '任务' },
    { id: EArticleTags.NEWER_TEACH, name: '萌新教学' },
    { id: EArticleTags.CLIP, name: '剪辑大片' },
    { id: EArticleTags.STORY, name: '讲故事' },
  ];
  protected articlesMap: IArticleMap = ARTICLES_MAP;
  protected warhammerClassifiersMap: IWarhammerClassifierMap =
    WARHAMMER_CLASSIFIERS_MAP;
  protected clanMap: IClanMap = CLAN_MAP;
  protected title = '';
  protected clan: IClan | undefined = undefined;
  protected clanExtra: IClanExtra | undefined = undefined;
  protected readonly eList = EList;
  protected readonly EArticleTags = EArticleTags;
  protected data: IItemCard[] | undefined = undefined;
  protected selectedTagId: string = EArticleTags.ALL;
  protected votes: Record<string, number> = {};

  public constructor(
    private snackbarService: SnackbarService,
    private readonly voteHttpService: VoteHttpService,
    private readonly analysisHttpService: AnalysisHttpService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _viewportScroller: ViewportScroller
  ) {}

  public ngOnInit(): void {
    this._viewportScroller.scrollToPosition([0, 0]); // 滚动到顶部
    const { id } = this._activatedRoute.snapshot.params;
    this.clan = this.warhammerClassifiersMap[id];
    this.clanExtra = this.clanMap[id];
    this.data = this.articlesMap[id];
    this.getVotes();
  }

  protected onListItemClick(item: IItemCard): void {
    if (item.sourceUrl) {
      window.open(item.sourceUrl, '_blank');
    }
  }

  protected onTagSeclet(tagIndex: number): void {
    const { id } = this._activatedRoute.snapshot.params;
    const selectedTagId = this.tags[tagIndex].id;
    this.selectedTagId = selectedTagId;

    if (selectedTagId === EArticleTags.ALL) {
      // 如果选择了 "全部" 标签，则显示所有文章
      this.data = this.articlesMap[id];
    } else {
      // 否则，根据选择的标签 ID 筛选相应的文章
      this.data = this.articlesMap[id].filter((article) =>
        article.tagIds?.includes(selectedTagId)
      );
    }
  }

  protected onContributorClick(contributor: IContributor): void {
    this.analysisHttpService
      .submitString('跳转: ' + contributor.name)
      .subscribe(
        (response: any) => {
          // console.log('String submitted successfully!', response);
        },
        (error: any) => {
          console.error('Error submitting string:', error);
        }
      );
  }

  protected onVoteClick(subjectId: string, mechanismId: string): void {
    this.voteHttpService.submitVote(subjectId, mechanismId).subscribe(
      (response: any) => {
        if (response.error) {
          // TODO hard code
          if (response.error === 'You have already voted') {
            // alert('你已经给他投过票啦!');
            this.snackbarService.show('你已经给他投过票啦!');
          }
        } else {
          this.logVote(subjectId, mechanismId);
          this.getVotes();
        }
      },
      (error: any) => {
        console.error('Error submitting string:', error);
      }
    );
  }

  private getVotes(): void {
    this.voteHttpService.getSubjectVotes(this.clan?.file.id || '').subscribe(
      (response: any) => {
        this.votes = response;
      },
      (error: any) => {
        console.error('Error submitting string:', error);
      }
    );
  }

  private logVote(subjectId: string, mechanismId: string): void {
    this.analysisHttpService
      .submitString(`投票: ${subjectId} ${mechanismId}`)
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
