import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';
import {
  BannerComponent,
  EList,
  IItemCard,
  IProjectSwitcher,
  ListComponent,
  NavigationComponent,
  ProjectSwitcherComponent
} from '@w-monorepo/ui';
import { NgIf } from '@angular/common';
import { IApp } from '@w-monorepo/interfaces';
import { APP_CONFIG } from './shared/constants/app.config.constans';
import { ARTICLES_MAP } from './shared/constants/data.constants';

@Component({
  standalone: true,
  imports: [HttpClientModule, NxWelcomeComponent, RouterModule, BannerComponent, NavigationComponent, NgIf, ProjectSwitcherComponent, ListComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected appConfig: IApp = APP_CONFIG;
  protected selectedProject: IProjectSwitcher = {
    id: '3',
    label: '全面战争·法老',
    url: 'http://111.230.29.99:4001/'
  };
  protected projects: IProjectSwitcher[] = [
    {
      id: '1',
      label: '全面战争·幕府将军',
      url: 'http://111.230.29.99:4000/'
    },
    {
      id: '2',
      label: '全面战争·战锤3',
      url: 'http://111.230.29.99/'
    },
    {
      id: '3',
      label: '全面战争·法老',
      url: 'http://111.230.29.99:4001/'
    }
  ];

  protected readonly eList = EList;

  public strategy: IItemCard[] = ARTICLES_MAP['strategy'];
  public liveRecording: IItemCard[] = ARTICLES_MAP['liveRecording'];
  public backgroundKnowledge: IItemCard[] = ARTICLES_MAP['backgroundKnowledge'];

  public onListItemClick(item: IItemCard): void {
    if (item.sourceUrl) {
      window.open(item.sourceUrl, '_blank');
    }
  }

  protected onProjectSelected(item: IProjectSwitcher) {
    const { url } = item;
    if (url) {
      window.open(url, '_self');
    }
  }
}
