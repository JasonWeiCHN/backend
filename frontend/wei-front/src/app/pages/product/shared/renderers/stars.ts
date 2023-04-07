import Handsontable from 'handsontable';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const starsRenderer: Handsontable.renderers.Base = (
  instance: Handsontable.Core,
  td: HTMLTableCellElement,
  row: number,
  column: number,
  prop: string | number,
  value: number,
  cellProperties: Handsontable.CellProperties
) => {
  Handsontable.renderers.TextRenderer.apply(this, [instance, td, row, column, prop, '★'.repeat(value), cellProperties]);
};
