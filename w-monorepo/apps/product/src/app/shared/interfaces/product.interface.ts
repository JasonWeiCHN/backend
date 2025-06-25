export interface IProduct {
  id: number;
  productName: string;
  productCategory: string;
  productCode: string;
  purchasePrice: number;
  sellingPrice: number;
  inventory: number;
  description?: string;
}
