// 会员信息
export interface IMember {
  id: number; // 编号
  name: string; // 姓名
  phone: string; // 电话
  remark: string; // 备注
  totalPlayTime: number; // 总游玩时长（分钟）
  createdAt: string; // 创建时间（ISO 格式）
}

// 单笔充值记录
export interface IMemberRecharge {
  id: number;
  memberId: number; // 关联会员
  amount: number; // 充值金额
  bonusAmount: number; // 赠送金额
  rechargeTime: string; // ISO 格式时间
}

// 单笔消费记录
export interface IMemberConsumption {
  id: number;
  memberId: number; // 关联会员
  amount: number; // 消费金额
  orderId: number; // 关联订单 ID
  consumptionTime: string; // ISO 格式时间
}
