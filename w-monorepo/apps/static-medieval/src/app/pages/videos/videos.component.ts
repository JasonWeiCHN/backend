import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EList, IItemCard, ListComponent } from '@w-monorepo/ui';
import { ARTICLES_MAP } from '../../shared/constants/data.constants';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [CommonModule, ListComponent],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss',
})
export class VideosComponent {
  protected readonly eList = EList;

  public strategy: IItemCard[] = ARTICLES_MAP['strategy'];
  public liveRecording: IItemCard[] = ARTICLES_MAP['liveRecording'];
  public backgroundKnowledge: IItemCard[] = ARTICLES_MAP['backgroundKnowledge'];

  public onListItemClick(item: IItemCard): void {
    if (item.sourceUrl) {
      window.open(item.sourceUrl, '_blank');
    }
  }
}
