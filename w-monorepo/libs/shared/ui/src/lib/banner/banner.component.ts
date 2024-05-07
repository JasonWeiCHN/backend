import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EBannerMode } from './shared/enums/banner.enum';
import { NavigationComponent } from '../navigation/navigation.component';
import { IBanner } from './shared/interfaces/banner.interface';

@Component({
  selector: 'w-banner',
  standalone: true,
  imports: [CommonModule, NavigationComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  /**
   * @description
   * Different mode will display different layout
   * @type {EBannerMode}
   * @default EItemCardMode.SIMPLE
   */
  @Input()
  public mode: EBannerMode = EBannerMode.SIMPLE;

  /**
   * Title of the banner
   */
  @Input()
  public data: IBanner = {
    title: '',
    subtitle: '',
    rightContent: ''
  };

  protected readonly eBannerMode = EBannerMode;
}
