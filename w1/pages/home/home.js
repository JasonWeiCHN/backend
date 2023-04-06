import { fetchHome } from '../../services/home/home';
import { fetchGoodsList } from '../../services/good/fetchGoods';
import Toast from 'tdesign-miniprogram/toast/index';

Page({
  data: {
    imgSrcs: [],
    tabList: [],
    goodsList: [],
    goodsListLoadStatus: 0,
    pageLoading: false,
    current: 1,
    autoplay: true,
    duration: '500',
    interval: 5000,
    navigation: { type: 'dots' },
    swiperImageProps: { mode: 'scaleToFill' },
    list: [
      {
        id: 1,
        image:
          'https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/avatar/avatar-1.jpg',
        name: '田微',
        title: '高级工程师',
        description: '张三是一位资深工程师，有着10年的工作经验。他擅长开发高性能、高可用的分布式系统。',
      },
      {
        id: 2,
        image:
          'https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/avatar/avatar-2.jpg',
        name: '赵广顾',
        title: '产品经理',
        description: '李四是一位经验丰富的产品经理，曾在多个行业任职。他善于市场分析和用户研究，成功的产品上线经验。',
      },
      {
        id: 3,
        image:
          'https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/avatar/avatar-3.jpg',
        name: '杨晓英',
        title: '销售经理',
        description: '王五是一位多年经验的销售经理，擅长市场开拓和渠道拓展。带领团队完成了多个重大销售业绩目标。',
      },
      {
        id: 4,
        image:
          'https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/avatar/avatar-4.jpg',
        name: '王犇',
        title: 'java开发工程师',
        description: '王五是一位多年经验的销售经理，擅长市场开拓和渠道拓展。带领团队完成了多个重大销售业绩目标。',
      },
      {
        id: 5,
        image:
          'https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/avatar/avatar-5.jpg',
        name: '史玉珍',
        title: '前端开发',
        description: '王五是一位多年经验的销售经理，擅长市场开拓和渠道拓展。带领团队完成了多个重大销售业绩目标。',
      },
      {
        id: 6,
        image:
          'https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/avatar/avatar-1.jpg',
        name: '萧若然',
        title: '技术总监',
        description: '王五是一位多年经验的销售经理，擅长市场开拓和渠道拓展。带领团队完成了多个重大销售业绩目标。',
      },
    ],
  },

  goodListPagination: {
    index: 0,
    num: 20,
  },

  privateData: {
    tabIndex: 0,
  },

  onShow() {
    this.getTabBar().init();
  },

  onLoad() {
    // this.init();
  },

  onReachBottom() {
    if (this.data.goodsListLoadStatus === 0) {
      this.loadGoodsList();
    }
  },

  onPullDownRefresh() {
    this.init();
  },

  init() {
    this.loadHomePage();
  },

  loadHomePage() {
    wx.stopPullDownRefresh();

    this.setData({
      pageLoading: true,
    });
    fetchHome().then(({ swiper, tabList }) => {
      this.setData({
        tabList,
        imgSrcs: swiper,
        pageLoading: false,
      });
      this.loadGoodsList(true);
    });
  },

  tabChangeHandle(e) {
    this.privateData.tabIndex = e.detail;
    this.loadGoodsList(true);
  },

  onReTry() {
    this.loadGoodsList();
  },

  async loadGoodsList(fresh = false) {
    if (fresh) {
      wx.pageScrollTo({
        scrollTop: 0,
      });
    }

    this.setData({ goodsListLoadStatus: 1 });

    const pageSize = this.goodListPagination.num;
    let pageIndex = this.privateData.tabIndex * pageSize + this.goodListPagination.index + 1;
    if (fresh) {
      pageIndex = 0;
    }

    try {
      const nextList = await fetchGoodsList(pageIndex, pageSize);
      this.setData({
        goodsList: fresh ? nextList : this.data.goodsList.concat(nextList),
        goodsListLoadStatus: 0,
      });

      this.goodListPagination.index = pageIndex;
      this.goodListPagination.num = pageSize;
    } catch (err) {
      this.setData({ goodsListLoadStatus: 3 });
    }
  },

  goodListClickHandle(e) {
    const { index } = e.detail;
    const { spuId } = this.data.goodsList[index];
    wx.navigateTo({
      url: `/pages/goods/details/index?spuId=${spuId}`,
    });
  },

  goodListAddCartHandle() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: '点击加入购物车',
    });
  },

  navToSearchPage() {
    wx.navigateTo({ url: '/pages/goods/search/index' });
  },

  navToActivityDetail({ detail }) {
    const { index: promotionID = 0 } = detail || {};
    wx.navigateTo({
      url: `/pages/promotion-detail/index?promotion_id=${promotionID}`,
    });
  },

  navToGoodDetail(event) {
    const { item } = event.currentTarget.dataset;
    console.log('clicked item:', item);
    wx.navigateTo({
      url: `/pages/goods/details/index`,
    });
  },

  navToOpenAiLearning() {
    wx.navigateTo({
      url: `/pages/open-ai/index`,
    });
  },
});
