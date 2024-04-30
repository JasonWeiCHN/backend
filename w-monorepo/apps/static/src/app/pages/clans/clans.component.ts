import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassifierComponent, ITag, TagSelectorComponent } from '@w-monorepo/ui';
import { WarhammerClassifierComponent } from '../../components/warhammer-classifier/warhammer-classifier.component';
import { ClansNavigationComponent } from '../../components/clans-navigation/clans-navigation.component';

@Component({
  selector: 'st-clans',
  standalone: true,
  imports: [CommonModule, ClassifierComponent, WarhammerClassifierComponent, TagSelectorComponent, ClansNavigationComponent],
  templateUrl: './clans.component.html',
  styleUrl: './clans.component.scss'
})
export class ClansComponent {
  public activeModeId = 'map'; // list / map
  protected tags: ITag[] = [
    { id: 'map', name: '图表' },
    { id: 'list', name: '列表' }
  ];

  protected onTagSeclet(tagIndex: number): void {
    this.activeModeId = this.tags[tagIndex].id;
  }
}
