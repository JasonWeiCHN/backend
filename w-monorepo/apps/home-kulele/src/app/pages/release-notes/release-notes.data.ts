export interface ReleaseNote {
  version: string;
  date: string;
  changes: string[];
}

export const releaseNotes: ReleaseNote[] = [
  {
    version: 'v1.0.0',
    date: '2025-08-17',
    changes: ['会员列表增加导出功能', '主页面增加发布日志功能'],
  },
];
