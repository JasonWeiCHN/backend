import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalysisHttpService } from '@w-monorepo/analysis';
import { ClansNavigationComponent } from '../../components/clans-navigation/clans-navigation.component';
import { IImageFile } from '@w-monorepo/interfaces';

@Component({
  selector: 'app-weapons',
  standalone: true,
  imports: [CommonModule, ClansNavigationComponent],
  templateUrl: './weapons.component.html',
  styleUrl: './weapons.component.scss',
  providers: [AnalysisHttpService],
})
export class WeaponsComponent {
  protected weaponImages: IImageFile[] = [];

  protected onItemClick(item: IImageFile) {
    console.log(item);
  }
}
