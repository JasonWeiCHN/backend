export enum ERoomStatus {
  AVAILABLE = 'AVAILABLE', // 空闲
  OCCUPIED = 'OCCUPIED', // 使用中
  DISABLED = 'DISABLED', // 停用
}

export const RoomStatusLabelMap: Record<ERoomStatus, string> = {
  [ERoomStatus.AVAILABLE]: '空闲',
  [ERoomStatus.OCCUPIED]: '使用中',
  [ERoomStatus.DISABLED]: '停用',
};
