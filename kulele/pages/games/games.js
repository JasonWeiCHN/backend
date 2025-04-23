Page({
    data: {
        searchKeyword: '',
        selectedCategory: '',
        categories: ['全部', '双人', '剧情', 'PS5', 'SWITCH', '类魂'],
        games: [
            { id: 1, name: '游戏一', image: 'https://cdn.midjourney.com/f35e0a99-7899-4726-a75c-d540ef091834/0_0.png', type: ['双人', 'SWITCH'], search: '游戏一 switch 合作' },
            { id: 2, name: '游戏二', image: 'http://111.230.29.99:5001/funny/BV11K4y1h7GZ/first_frame.png', type: ['剧情', 'PS5'], search: '游戏二 剧情 ps5' },
            { id: 3, name: '游戏三', image: 'https://picx.zhimg.com/v2-4b36b189e8d84f3530be9126b6ad859b_l.jpg', type: ['类魂', 'PS5'], search: '游戏三 难 类魂' },
            { id: 4, name: '禁锢之刃', image: 'https://cdn.midjourney.com/b253cc76-c7c9-4201-be7d-727e9f47a038/0_2.png', type: ['类魂', 'PS5'], search: '禁锢之刃 难 类魂' },
            { id: '01_xyqj', name: '双影奇境', image: 'http://111.230.29.99:5001/assets/kulele/双影奇境S.png', type: ['双人', 'PS5'], search: '双影奇境 SYQJ' },
            // ...其他游戏
        ],
        filteredGames: [] // 用于展示的游戏数组
    },

    onLoad() {
        this.setData({
            filteredGames: this.data.games // 初始展示全部
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
        const filtered = games.filter(game => {
            const matchesCategory = !selectedCategory || game.type.includes(selectedCategory);
            const matchesSearch = !searchKeyword || game.search.includes(searchKeyword);
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
