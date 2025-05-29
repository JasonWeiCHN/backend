Page({
    data: {
        id: null,
        game: {},
        genreList: '',
        guides: []
    },

    onLoad(options) {
        const id = options.id;
        this.setData({ id });

        wx.request({
            url: `https://kulele.club/api/game_detail?id=${id}`, // 注意替换成你实际的后端地址
            method: 'GET',
            success: (res) => {
                const game = res.data.game;
                const genreList = game.genres.map(g => g.description).join(' / ');

                // 攻略数据（假设接口里 guides 是数组）
                const guides = game.guides || [];

                this.setData({
                    game,
                    genreList,
                    guides
                });
            },
            fail: () => {
                wx.showToast({ title: '获取游戏数据失败', icon: 'none' });
            }
        });
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

        // 判断是否是 bilibili 自定义链接，如 bilibili/KxvgR7vRlrdRWAp
        const bilibiliCustomPattern = /^bilibili\/([\w\d]+)/;

        const match = url.match(bilibiliCustomPattern);
        if (match) {
            const aid = match[1]; // 提取 avid 或 BV号
            this.goBilibili(aid); // 跳转 bilibili 小程序
        } else {
            // 非 bilibili 链接，走 webview
            wx.navigateTo({
                url: `/pages/webview/webview?url=${encodeURIComponent(url)}`
            });
        }
    },

    goBilibili(aid) {
        const timestamp = new Date().getTime();
        const path = `pages/video/video?avid=${aid}`;

        wx.navigateToMiniProgram({
            appId: 'wx7564fd5313d24844', // Bilibili 小程序的 appId
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
