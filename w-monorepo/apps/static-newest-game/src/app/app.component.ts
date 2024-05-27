import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {
  BannerComponent,
  EList,
  IItemCard,
  ISwitcherProject,
  ListComponent,
  NavigationComponent,
  ProjectSwitcherComponent
} from '@w-monorepo/ui';
import { NgIf } from '@angular/common';
import { IApp } from '@w-monorepo/interfaces';
import { APP_CONFIG } from './shared/constants/app.config.constans';
import { HttpClientModule } from '@angular/common/http';
import { ARTICLES_MAP } from './shared/constants/data.constants';
import { EMode } from '@w-monorepo/enums';
import { AnalysisHttpService } from '@w-monorepo/analysis';

@Component({
  standalone: true,
  imports: [HttpClientModule, NxWelcomeComponent, RouterModule, BannerComponent, NavigationComponent, NgIf, ProjectSwitcherComponent, ListComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [AnalysisHttpService]
})
export class AppComponent implements OnInit {
  protected readonly eMode = EMode;
  protected mode = EMode.HOME;
  protected appConfig: IApp = APP_CONFIG;
  protected selectedProject: ISwitcherProject | undefined = APP_CONFIG.project;
  protected projects: ISwitcherProject[] = APP_CONFIG.projects || [];
  protected game: IItemCard | undefined = undefined;

  protected readonly eList = EList;

  public discount: IItemCard[] = ARTICLES_MAP['discount'];
  public new: IItemCard[] = ARTICLES_MAP['new'];

  public constructor(private readonly analysisHttpService: AnalysisHttpService) {
  }

  ngOnInit(): void {
    this.updateImageUrls();
  }

  public onListItemClick(item: IItemCard): void {
    if (item.sourceUrl) {
      window.open(item.sourceUrl, '_blank');
    }
  }

  public onDiscountItemClick(item: IItemCard): void {
    this.game = item;
    this.mode = EMode.DETAIL;
    this.analysisHttpService.submitString('查看: ' + item.title).subscribe((response: any) => {
      // console.log('String submitted successfully!', response);
    }, (error: any) => {
      console.error('Error submitting string:', error);
    });
  }

  protected onProjectSelected(item: ISwitcherProject) {
    const { url } = item;
    if (url) {
      window.open(url, '_self');
    }
  }

  private updateImageUrls(): void {
    this.discount = ARTICLES_MAP['discount'].map(item => {
      const desObj = JSON.parse(item.description);
      const price = {
        discountPercent: desObj.price_overview.discount_percent,
        initial: desObj.price_overview.initial_formatted,
        final: desObj.price_overview.final_formatted
      };

      return {
        ...item,
        price,
        imageUrl: `${APP_CONFIG.fileServer}${item.imageUrl}/pic.jpg`,
        description: desObj.short_description
      };
    });
  }

  protected goSteam(item: IItemCard): void {
    if (item.sourceUrl) {
      window.open(item.sourceUrl, '_blank');
    }
  }

  protected goBack(): void {
    this.mode = EMode.HOME;
  }
}
