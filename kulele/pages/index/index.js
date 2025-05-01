Page({
  data: {
    userInfo: null,
    openid: null, // null
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
    ],
    statusText: '',           // 提示文字
    countdownText: '',        // 倒计时
    showStartButton: false,   // 是否显示“开始游戏”按钮
    endTime: null,            // 游戏结束时间
    timer: null               // 倒计时定时器
  },

  onLoad() {
    this.loginAndGetUserInfoTest(); // test
    // this.loginAndGetUserInfo();
    this.animateTitle();
    this.animateButton(); // 页面加载时触发按钮动画

    // 延迟确保 userInfo 拿到后才请求状态
    setTimeout(() => {
      this.getUserStatus();
    }, 1000);
  },

  loginAndGetUserInfoTest() {
    // 模拟登录逻辑
    const fakeUserInfo = {
      nickName: '测试用户',
      avatarUrl: 'https://example.com/avatar.png'
    };

    this.setData({
      userInfo: fakeUserInfo,
      openid: 'test_openid_123456'
    });
  },


  loginAndGetUserInfo() {
    wx.login({
      success: (res) => {
        console.log('登录成功！临时code:', res.code);

        // 获取用户信息
        wx.getUserInfo({
          success: (userRes) => {
            console.log('用户信息：', userRes.userInfo);

            // 把 code 和 userInfo 发送到后台
            wx.request({
              url: 'http://127.0.0.1:5000/login',
              method: 'POST',
              data: {
                code: res.code,
                userInfo: userRes.userInfo  // 直接传递用户信息
              },
              success: (response) => {
                console.log('后台返回结果：', response.data);
                // 后续处理...
              }
            });
          },
          fail: (err) => {
            console.error('获取用户信息失败！', err);
          }
        });
      },
      fail: (err) => {
        console.error('登录失败！', err);
      }
    });
  },

  getUserStatus() {
    if (!this.data.userInfo) return;

    wx.request({
      url: 'http://127.0.0.1:5000/get_user_status',
      method: 'GET',
      data: { openid: this.data.openid },
      success: (res) => {
        const { status, endTime } = res.data;

        if (status === "idle") {
          this.setData({
            statusText: '你还没有开始游戏，你可以查看游戏或预约',
            showStartButton: false,
            countdownText: ''
          });
        } else if (status === "reserved") {
          this.setData({
            statusText: '你已预约了游戏，可以点击开始',
            showStartButton: true,
            countdownText: ''
          });
        } else if (status === "playing") {
          this.setData({
            statusText: `游戏中，结束时间：${endTime}`,
            showStartButton: false,
            endTime: endTime
          });
          this.startCountdown(endTime);
        }
      },
      fail: (err) => {
        console.error("获取用户状态失败", err);
      }
    });
  },

  startGame() {
    wx.request({
      url: 'http://127.0.0.1:5000/start_game',
      method: 'POST',
      data: { openid: this.data.openid },
      success: (res) => {
        const endTime = res.data.endTime;
        this.setData({
          statusText: `游戏中，结束时间：${endTime}`,
          showStartButton: false,
          endTime: endTime
        });
        this.startCountdown(endTime);
      },
      fail: (err) => {
        console.error('开始游戏失败', err);
      }
    });
  },

  startCountdown(endTime) {
    clearInterval(this.data.timer);

    const updateCountdown = () => {
      const now = new Date().getTime();
      const end = new Date(endTime).getTime();
      const remaining = end - now;

      if (remaining <= 0) {
        clearInterval(this.data.timer);
        this.setData({
          statusText: '你还没有开始游戏，你可以查看游戏或预约',
          countdownText: '',
          endTime: null
        });
        return;
      }

      const hours = Math.floor(remaining / 3600000);
      const minutes = Math.floor((remaining % 3600000) / 60000);
      const seconds = Math.floor((remaining % 60000) / 1000);

      this.setData({
        countdownText: `还剩 ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
      });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    this.setData({ timer });
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

  onUnload() {
    clearInterval(this.data.timer);
  },
});
