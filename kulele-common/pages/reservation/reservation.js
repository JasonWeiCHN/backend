const config = require('../../data/config.js');

Page({
    data: {
        // 地图相关
        shopLatitude: 22.547341,     // 替换成你店铺的纬度
        shopLongitude: 114.139556,   // 替换成你店铺的经度
        mapMarkers: [{
            id: 1,
            latitude: 22.547341,
            longitude: 114.139556,
            title: config.title,
            // iconPath: '/assets/location.png', // 可选，自定义 marker 图标
            width: 32,
            height: 32
        }],
    },
    // 分享给朋友
    onShareAppMessage() {
        const promise = new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    userName: 'gh_c8a85b176e81',
                    path: 'pages/reservation/reservation',
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
            path: 'pages/reservation/reservation',
            title: config.title,
            imagePath: '/pages/kll.jpg',
            webpageUrl: '',
            withShareTicket: true,
            miniprogramType: 0,
            scene: 0,
            promise
        }
    },
    // 分享到朋友圈
    onShareTimeline() {
        return {
            title: config.title,
            imagePath: '/pages/kll.jpg',
        }
    },

    makePhoneCall() {
        wx.makePhoneCall({
            phoneNumber: '19926427299'
        });
    },

    copyWeChat() {
        wx.setClipboardData({
            data: '19926427299',
            success(res) {
                wx.showToast({
                    title: '微信号已复制',
                    icon: 'success'
                });
            }
        });
    },

    onMarkerTap(e) {
        const latitude = this.data.shopLatitude;
        const longitude = this.data.shopLongitude;

        wx.openLocation({
            latitude,
            longitude,
            scale: 16,
            name: '本店位置',
            address: '黄贝岭·经泽大厦·7B12（7楼）' // 你可以自定义显示地址
        });
    }
});
