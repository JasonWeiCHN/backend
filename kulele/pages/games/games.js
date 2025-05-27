Page({
    data: {
        searchKeyword: '',
        selectedCategory: '',
        categories: [],
        games: [],
        filteredGames: [] // 用于展示的游戏数组
    },

    // 分享给朋友
    onShareAppMessage() {
        const promise = new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    userName: 'gh_c8a85b176e81',
                    path: 'pages/games/games',
                    title: '酷乐乐游戏馆',
                    imagePath: '/pages/kll.png',
                    webpageUrl: '',
                    withShareTicket: true,
                    miniprogramType: 0,
                    scene: 0,
                })
            }, 2000)
        })
        return {
            userName: 'gh_c8a85b176e81',
            path: 'pages/games/games',
            title: '酷乐乐游戏馆',
            imagePath: '/pages/kll.png',
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
            title: '酷乐乐游戏馆',
            imagePath: '/pages/kll.png',
        }
    },

    onLoad() {
        wx.request({
            url: 'https://kulele.club/api/games_and_categories', // 替换为你的接口地址
            method: 'GET',
            success: res => {
                const categories = res.data.categories || [];
                const games = res.data.games || [];
                this.setData({
                    categories: categories,
                    games: games,
                    filteredGames: games
                });
            },
            fail: err => {
                console.error('获取数据失败', err);
            }
        });
    },

    // 搜索输入
    onSearchInput(e) {
        this.setData({
            searchKeyword: e.detail.value
        }, this.filterGames);
    },

    // 点击分类按钮
    onFilterTap(e) {
        const selected = e.currentTarget.dataset.type;
        this.setData({
            selectedCategory: selected === '全部' ? '' : selected
        }, this.filterGames);
    },

    // 筛选游戏
    filterGames() {
        const { games, searchKeyword, selectedCategory } = this.data;
        const keyword = searchKeyword ? searchKeyword.toLowerCase() : '';
        const category = selectedCategory ? selectedCategory.toLowerCase() : '';

        const filtered = games.filter(game => {
            // 处理 type（可能是字符串或数组）
            let gameTypes = [];
            if (Array.isArray(game.type)) {
                gameTypes = game.type.map(type => String(type).toLowerCase());
            } else if (game.type) {
                gameTypes = [String(game.type).toLowerCase()];
            }

            // 处理 search（确保是字符串）
            const gameSearch = game.search ? String(game.search).toLowerCase() : '';

            const matchesCategory = !category || gameTypes.some(type => type.includes(category));
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
