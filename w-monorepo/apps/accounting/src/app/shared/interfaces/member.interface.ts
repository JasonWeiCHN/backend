// 会员信息
export interface IMember {
  id: number; // 编号
  name: string; // 姓名
  phone: string; // 电话
  remark: string; // 备注
  totalPlayTime: number; // 总游玩时长（分钟）
  createdAt: string; // 创建时间（ISO 格式）
}
