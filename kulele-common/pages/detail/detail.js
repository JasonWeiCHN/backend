const dataConfig = require('../../data/games.js');
const appConfig = require('../../data/config.js');

Page({
    data: {
        id: null,
        game: {},
        genreList: '',
        guides: []
    },

    onLoad(options) {
        const id = parseInt(options.id); // 确保是数字
        this.setData({ id });

        // 从本地数据中查找对应的游戏
        const game = dataConfig.games.find(g => g.id === id);

        if (game) {
            const genreList = (game.genres || []).map(g => g.name).join(' / ');
            const guides = game.guides || [];

            this.setData({
                game,
                genreList,
                guides
            });
        } else {
            wx.showToast({ title: '未找到游戏数据', icon: 'none' });
        }
    },

    bookNow() {
        wx.showToast({ title: "立刻预约", icon: "success" });
        setTimeout(() => {
            wx.navigateTo({
                url: `/pages/reservation/reservation?id=${this.data.id}`
            });
        }, 500);
    },

    openGuide(e) {
        const url = e.currentTarget.dataset.url;
        console.log("打开链接：", url);

        const bilibiliCustomPattern = /^bilibili\/([\w\d]+)/;
        const match = url.match(bilibiliCustomPattern);

        if (match) {
            const bvid = match[1];
            this.goBilibili(bvid);
        } else {
            wx.navigateTo({
                url: `/pages/webview/webview?url=${encodeURIComponent(url)}`
            });
        }
    },

    goBilibili(bvid) {
        const path = `pages/video/video?bvid=${bvid}`;

        wx.navigateToMiniProgram({
            appId: 'wx7564fd5313d24844',
            path,
            success: res => {
                console.log('跳转 bilibili 小程序成功');
            },
            fail: err => {
                console.error('跳转 bilibili 小程序失败', err);
            }
        });
    }
});
