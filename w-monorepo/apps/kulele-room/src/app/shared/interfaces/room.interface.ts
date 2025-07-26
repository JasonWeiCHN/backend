export interface IRoom {
  id: number;
  roomNumber: string;
  roomType?: string;
  capacity: number;
  pricePerHour: number;
  description?: string;
  status: 'AVAILABLE' | 'OCCUPIED' | 'MAINTENANCE';
  createdAt: string;
  updatedAt: string;
}
