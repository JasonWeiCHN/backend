export interface IExpense {
  id: number;
  dateTime: string; // ISO 格式的时间字符串，如 "2025-06-17T14:30"
  category: string; // 如：游戏机、游戏、装修 等
  description: string; // 描述信息
  amount: number; // 支出金额
}
