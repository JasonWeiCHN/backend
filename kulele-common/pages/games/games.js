Page({
    data: {
        searchKeyword: '',
        selectedCategory: '',
        categories: [],
        games: [],
        filteredGames: []
    },

    onShareAppMessage() {
        const promise = new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    userName: 'gh_c8a85b176e81',
                    path: 'pages/games/games',
                    title: 'FW潮玩局',
                    imagePath: '/pages/kll.jpg',
                    webpageUrl: '',
                    withShareTicket: true,
                    miniprogramType: 0,
                    scene: 0,
                })
            }, 2000)
        });
        return {
            userName: 'gh_c8a85b176e81',
            path: 'pages/games/games',
            title: 'FW潮玩局',
            imagePath: '/pages/kll.jpg',
            webpageUrl: '',
            withShareTicket: true,
            miniprogramType: 0,
            scene: 0,
            promise
        }
    },

    onShareTimeline() {
        return {
            title: 'FW潮玩局',
            imagePath: '/pages/kll.jpg',
        }
    },

    onLoad() {
        // ✅ 本地读取 JSON 文件
        const config = require('../../data/games.js');
        const categories = config.categories || [];
        const games = config.games || [];

        this.setData({
            categories: categories,
            games: games,
            filteredGames: games
        });
    },

    onSearchInput(e) {
        this.setData({
            searchKeyword: e.detail.value
        }, this.filterGames);
    },

    onFilterTap(e) {
        const selected = e.currentTarget.dataset.type;
        this.setData({
            selectedCategory: selected === '全部' ? '' : selected
        }, this.filterGames);
    },

    filterGames() {
        const { games, searchKeyword, selectedCategory } = this.data;
        const keyword = searchKeyword ? searchKeyword.toLowerCase() : '';
        const category = selectedCategory ? selectedCategory.toLowerCase() : '';

        const filtered = games.filter(game => {
            let gameTags = Array.isArray(game.tags) ? game.tags.map(tag => String(tag).toLowerCase()) : [];
            const gameSearch = game.searchKeywords ? game.searchKeywords.toLowerCase() : '';

            const matchesCategory = !category || gameTags.some(tag => tag.includes(category));
            const matchesSearch = !keyword || gameSearch.includes(keyword);

            return matchesCategory && matchesSearch;
        });

        this.setData({
            filteredGames: filtered
        });
    },

    goToDetail(e) {
        const id = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: `/pages/detail/detail?id=${id}`
        });
    }
});
