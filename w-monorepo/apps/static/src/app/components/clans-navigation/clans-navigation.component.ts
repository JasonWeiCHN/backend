import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IImageFile, WARHAMMER_CLASSIFIERS } from '@w-monorepo/warhammer';
import { Router } from '@angular/router';

@Component({
  selector: 'st-clans-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clans-navigation.component.html',
  styleUrl: './clans-navigation.component.scss'
})
export class ClansNavigationComponent {
  public constructor(private _router: Router) {
  }

  protected readonly data = WARHAMMER_CLASSIFIERS;

  public onImgBoxClick(item: IImageFile): void {
    this._router.navigate([`/article/${item.id}`]);
  }
}
