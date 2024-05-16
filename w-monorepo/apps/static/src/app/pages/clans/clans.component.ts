import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassifierComponent, ITag, SlideshowComponent, TagSelectorComponent } from '@w-monorepo/ui';
import { WarhammerClassifierComponent } from '../../components/warhammer-classifier/warhammer-classifier.component';
import { ClansNavigationComponent } from '../../components/clans-navigation/clans-navigation.component';
import { AnalysisHttpService } from '@w-monorepo/analysis';

@Component({
  selector: 'st-clans',
  standalone: true,
  imports: [CommonModule, ClassifierComponent, WarhammerClassifierComponent, TagSelectorComponent, ClansNavigationComponent, SlideshowComponent],
  templateUrl: './clans.component.html',
  styleUrl: './clans.component.scss',
  providers: [AnalysisHttpService]
})
export class ClansComponent {
  public activeModeId = 'map'; // list / map
  protected mapImageSrc1400 = 'assets/images/warhammer/cfdg_1400.jpg'; // 高分辨率图片的URL
  protected mapImageSrcHigh = 'assets/images/warhammer/cfdg_high.jpg'; // 高分辨率图片的URL

  protected tags: ITag[] = [
    { id: 'map', name: '图表' },
    { id: 'list', name: '列表' }
  ];

  public constructor(private analysisHttpService: AnalysisHttpService) {
  }

  protected openImage(type: string) {
    switch (type) {
      case '1400':
        window.open(this.mapImageSrc1400, '_blank');
        break;
      case 'high':
        window.open(this.mapImageSrcHigh, '_blank');
        break;
      default:
        break;
    }

    this.analysisHttpService.submitString('打开: ' + type + '地图').subscribe((response: any) => {
      // console.log('String submitted successfully!', response);
    }, (error: any) => {
      console.error('Error submitting string:', error);
    });
  }

  // TODO 没有配置https 部署后不支持下载！
  // protected downloadHighResImage() {
  //   // 下载高分辨率图片
  //   const link = document.createElement('a');
  //   link.href = this.mapImageSrcHigh;
  //   link.download = '超凡帝国高清地图.jpg';
  //   link.click();
  // }

  protected onTagSeclet(tagIndex: number): void {
    this.activeModeId = this.tags[tagIndex].id;
  }
}
