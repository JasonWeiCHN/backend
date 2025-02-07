import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IItemCard } from '@w-monorepo/ui';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-gallery.component.html',
  styleUrl: './app-gallery.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppGalleryComponent implements OnInit, OnChanges {
  /**
   * @description
   * data for display
   * @type {IItemCard[]}
   * @default []
   */
  @Input()
  public data: IItemCard[] = [];

  @Output()
  public readonly itemClick: EventEmitter<IItemCard> =
    new EventEmitter<IItemCard>();

  public onItemClick(item: IItemCard): void {
    this.itemClick.emit(item);
  }

  // 修改为二维数组
  protected displayedPets: IItemCard[][] = [];
  protected columns = 5; // Default to 5 columns

  public constructor(private readonly _changeDetectorRef: ChangeDetectorRef) {}

  public ngOnInit(): void {
    // 模拟图片数据，实际应用中可能通过API获取
    this._updateLayout();
  }

  public ngOnChanges(): void {
    this._updateLayout();
    this._changeDetectorRef.markForCheck();
  }

  // Listen for window resize to adjust the layout dynamically
  @HostListener('window:resize', ['$event'])
  public onResize() {
    this._updateLayout();
  }

  // Update the layout based on window width
  private _updateLayout() {
    const width = window.innerWidth;

    if (width >= 1200) {
      this.columns = 5;
    } else if (width >= 1000) {
      this.columns = 4;
    } else if (width >= 800) {
      this.columns = 3;
    } else if (width >= 600) {
      this.columns = 2;
    } else {
      this.columns = 1;
    }

    // Distribute images across columns based on the current layout
    this._updateImageGroups();
  }

  // Distribute the images to match the number of columns
  private _updateImageGroups() {
    this.displayedPets = [];
    if (this.data.length <= 5) {
      this.displayedPets = this.data.map((item) => [item]);
      return;
    }

    // Split the images array into the required number of columns
    const chunkSize = Math.floor(this.data.length / this.columns);
    for (let i = 0; i < this.columns; i++) {
      this.displayedPets[i] = this.data.slice(
        i * chunkSize,
        (i + 1) * chunkSize
      );
    }
  }
}
