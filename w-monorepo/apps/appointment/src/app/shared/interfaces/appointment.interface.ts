export interface IAppointment {
  id: number;
  dateTime: string; // ISO 格式
  name: string;
  contactType: '微信' | '电话';
  contactValue: string;
  description?: string;
}
