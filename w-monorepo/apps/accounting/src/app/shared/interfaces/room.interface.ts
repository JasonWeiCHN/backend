export interface IRoom {
  id: number;
  roomNumber: string;
  roomType: string;
  capacity: number;
  description: string;
  status: string;
}

export interface IRoomStatus {
  id: number;
  roomNumber: string;
  roomType: string;
  status: '空闲' | '使用中' | '停用';
  startTime?: string;
  endTime?: string;
  accountingId?: number;
  customerName?: string;
  customerPhone?: string;
  remainingTime?: string;
}
