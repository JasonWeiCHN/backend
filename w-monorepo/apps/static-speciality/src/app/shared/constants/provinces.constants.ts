import { IProvince } from '@w-monorepo/ui';

export const PROVINCES: IProvince[] = [
  {
    'code': '11',
    'name': '北京市',
    'children': [
      {
        'code': '110105',
        'name': '朝阳区'
      }
    ]
  },
  {
    'code': '42',
    'name': '湖北省',
    'children': [
      {
        'code': '4201',
        'name': '武汉市'
      },
      {
        'code': '4212',
        'name': '咸宁市'
      }
    ]
  },
  {
    'code': '44',
    'name': '广东省',
    'children': [
      {
        'code': '4401',
        'name': '广州市'
      },
      {
        'code': '4403',
        'name': '深圳市'
      }
    ]
  },
  {
    'code': '22',
    'name': '吉林省',
    'children': [
      {
        'code': '2207',
        'name': '松原市'
      }
    ]
  }
];
