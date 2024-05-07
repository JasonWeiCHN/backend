export interface Page<T> {
  content: T[]; // 当前页的数据列表
  totalPages: number; // 总页数
  totalElements: number; // 总记录数
  size: number; // 每页记录数
  number: number; // 当前页码
  // 其他分页相关的属性可以根据需求添加
}
