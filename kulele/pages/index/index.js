Page({
  data: {
    titleAnimation1: {},
    titleAnimation2: {},
    titleAnimation3: {},
    buttonAnimation: {}, // 新增按钮动画
    swiperImages: [
      "https://cdn.midjourney.com/f35e0a99-7899-4726-a75c-d540ef091834/0_0.png",
      "https://cdn.midjourney.com/def300bf-8287-46fe-b47c-f7f9b7aa10e6/0_0.png",
      "https://cdn.midjourney.com/2c8191c9-91f4-42e9-9be9-beed7b62853e/0_2.png"
    ],
    titleNodes1: [
      { name: 'span', attrs: { style: 'color: white;' }, children: [{ type: 'text', text: '酷乐乐' }] },
      { name: 'span', attrs: { style: 'color: white;' }, children: [{ type: 'text', text: ' 游戏馆' }] }
    ]
  },

  onLoad() {
    this.animateTitle();
    this.animateButton(); // 页面加载时触发按钮动画
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
  }
});
