import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EList, IItemCard, ListComponent } from '@w-monorepo/ui';
import { ARTICLES_MAP } from '../../shared/constants/data.constants';
import { EMode } from '@w-monorepo/enums';
import { APP_CONFIG } from '../../shared/constants/app.config.constans';

@Component({
  selector: 'app-free-demo',
  standalone: true,
  imports: [CommonModule, ListComponent],
  templateUrl: './free-demo.component.html',
  styleUrl: './free-demo.component.scss',
})
export class FreeDemoComponent implements OnInit {
  protected readonly eList = EList;
  protected readonly eMode = EMode;
  public data: IItemCard[] = ARTICLES_MAP['freeDemo'];
  protected game: IItemCard | undefined = undefined;
  protected mode = EMode.HOME;

  protected onSteamGameClick(item: IItemCard): void {
    this.game = item;
    this.mode = EMode.DETAIL;
    // this.analysisHttpService.submitString('查看: ' + item.title).subscribe(
    //   (response: any) => {
    //     // console.log('String submitted successfully!', response);
    //   },
    //   (error: any) => {
    //     console.error('Error submitting string:', error);
    //   }
    // );
  }

  ngOnInit(): void {
    this.updateData();
  }

  private updateData(): void {
    const processItem = (item: IItemCard) => {
      const desObj = JSON.parse(item.description);
      const price = {
        discountPercent: desObj.price_overview.discount_percent,
        initial: desObj.price_overview.initial_formatted,
        final: desObj.price_overview.final_formatted,
      };

      return {
        ...item,
        price,
        imageUrl: `${APP_CONFIG.fileServer}${item.imageUrl}/pic.jpg`,
        description: desObj.short_description,
      };
    };

    this.data = ARTICLES_MAP['freeDemo'].map(processItem);
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
