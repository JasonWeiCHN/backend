import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { getData } from './shared/utils/constants';
import { starsRenderer } from './shared/renderers/stars';
import { progressBarRenderer } from './shared/renderers/progressBar';

import { alignHeaders, drawCheckboxInRowHeaders, addClassesToRows, changeCheckboxCell } from './shared/utils/hooks-callbacks';

@Component({
  selector: 'wei-front-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ProductComponent implements OnInit {
  dataset: any = [];
  alignHeaders = alignHeaders;
  drawCheckboxInRowHeaders = drawCheckboxInRowHeaders;
  addClassesToRows = addClassesToRows;
  changeCheckboxCell = changeCheckboxCell;
  progressBarRenderer = progressBarRenderer;
  starsRenderer = starsRenderer;
  colHeaders = ['Company name', 'Country', 'Name', 'Sell date', 'Order ID', 'In stock', 'Qty', 'Progress', 'Rating'];
  hiddenColumns = {
    indicators: true,
  };
  licenseKey = 'non-commercial-and-evaluation';

  public constructor(private readonly _changeDetectorRef: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this.dataset = getData();
    this._changeDetectorRef.markForCheck();
  }
}
