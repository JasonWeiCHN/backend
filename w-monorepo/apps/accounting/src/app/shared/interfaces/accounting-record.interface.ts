export interface IAccountingRecord {
  id: number;
  startDateTime: string; // e.g. "2025-06-01T23:00"
  endDateTime: string; // e.g. "2025-06-02T02:00"
  duration: number; // 4
  consoleType: string; // "PS5"
  gameNames: string[]; // ["双影奇境"]
  customerType: string; // "情侣"
  isReturning: boolean;
  actualAmount: number;
  platform: '美团' | '抖音' | '门市' | '小红书' | string;
  contactType?: string | null;
  contactValue?: string | null;
}
