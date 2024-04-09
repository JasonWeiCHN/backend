import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IClan,
  IWarhammerClassifierMap
} from '../../components/warhammer-classifier/shared/interfaces/warhammer-classifier';
import {
  WARHAMMER_CLASSIFIERS_MAP
} from '../../components/warhammer-classifier/shared/constants/warhammer-classifier.constants';
import { ActivatedRoute } from '@angular/router';
import { ListComponent } from '@w-monorepo/ui';

@Component({
  selector: 'st-article',
  standalone: true,
  imports: [CommonModule, ListComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent implements OnInit{
  public constructor(
    private readonly _activatedRoute: ActivatedRoute,
  ) {}

  public warhammerClassifiersMap: IWarhammerClassifierMap = WARHAMMER_CLASSIFIERS_MAP;
  public title= ''
  public data: IClan | undefined = undefined;

  public ngOnInit(): void {
    const { id } = this._activatedRoute.snapshot.params;
    console.log(id)
    this.data = this.warhammerClassifiersMap[id];
  }
}
