import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { EList, IItemCard, ListComponent } from '@w-monorepo/ui';
import { ARTICLES_MAP } from '../../shared/constants/articles.constants';
import { IArticleMap } from '../../shared/interfaces/articles.interface';
import { IClan, IWarhammerClassifierMap, WARHAMMER_CLASSIFIERS_MAP } from '@w-monorepo/warhammer';

@Component({
  selector: 'st-article',
  standalone: true,
  imports: [CommonModule, ListComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent implements OnInit {
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
}
