Page({
    data: {
        id: null,
        game: {},
        genreList: ''
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
                this.setData({
                    game,
                    genreList
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
    }
});
