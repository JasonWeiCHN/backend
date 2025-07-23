const config = require('../../data/config.js');

Page({
  data: {
    welcomeText: config.welcomeText,
    subTitle: config.subTitle,
    titleAnimation1: {},
    titleAnimation2: {},
    titleAnimation3: {},
    buttonAnimation: {}, // 新增按钮动画
    swiperImages: config.swiperImages,
    titleNodes1: [
      { name: 'span', attrs: { style: 'color: white;' }, children: [{ type: 'text', text: config.title}] },
    ]
  },

  onLoad() {
    this.animateTitle();
    this.animateButton(); // 页面加载时触发按钮动画
  },

  // 分享给朋友
  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          userName: 'gh_c8a85b176e81',
          path: 'pages/index/index',
          title: config.title,
          imagePath: '/pages/kll.jpg',
          webpageUrl: '',
          withShareTicket: true,
          miniprogramType: 0,
          scene: 0,
        })
      }, 2000)
    })
    return {
      userName: 'gh_c8a85b176e81',
      path: 'pages/index/index',
      title: config.title,
      imagePath: '/pages/kll.jpg',
      webpageUrl: '',
      withShareTicket: true,
      miniprogramType: 0,
      scene: 0,
      promise
    }
  },

  animateTitle() {
    const animation1 = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease-in-out'
    });

    const animation2 = wx.createAnimation({
      duration: 1000,
      delay: 300,
      timingFunction: 'ease-in-out'
    });

    const animation3= wx.createAnimation({
      duration: 1000,
      delay: 300,
      timingFunction: 'ease-in-out'
    });

    animation1.translateX(0).opacity(1).step();
    animation2.translateX(0).opacity(1).step();
    animation3.translateX(0).opacity(1).step();

    this.setData({
      titleAnimation1: animation1.export(),
      titleAnimation2: animation2.export(),
      titleAnimation3: animation3.export()
    });
  },

  animateButton() {
    const animation = wx.createAnimation({
      duration: 1200,  // 0.8秒动画
      timingFunction: "ease-out"
    });

    animation.scale(2).step(); // 先设定缩小状态
    this.setData({ buttonAnimation: animation.export() });

    setTimeout(() => {
      animation.scale(1).step(); // 放大到正常大小
      this.setData({ buttonAnimation: animation.export() });
    }, 500); // 延迟100毫秒后执行放大
  },

  viewAllGames() {
    wx.showToast({ title: "查看全部游戏", icon: "none" });
    wx.navigateTo({
      url: '/pages/games/games'
    })
  },

  bookNow() {
    wx.showToast({ title: "立刻预约", icon: "success" });
    wx.navigateTo({
      url: '/pages/reservation/reservation'
    })
  },
});
