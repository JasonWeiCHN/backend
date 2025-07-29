import { ERoomStatus } from '../enums/room-status.enum';

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
  status: ERoomStatus;
  startTime?: string;
  endTime?: string;
  accountingId?: number;
  customerName?: string;
  customerPhone?: string;
  remainingTime?: string;
}

export type TRoomWithLoading = IRoomStatus & { loading?: boolean };
