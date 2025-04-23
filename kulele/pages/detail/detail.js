// 假设你有 data/gameMap.js 管理本地游戏数据
const gameMap = require('../../data/games.js');

Page({
    data: {
        id: null,
        game: {},
        genreList: ''
    },

    onLoad(options) {
        const id = options.id;
        const game = gameMap[id];
        const genreList = game.genres.map(g => g.description).join(' / ');

        this.setData({
            id,
            game,
            genreList
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
