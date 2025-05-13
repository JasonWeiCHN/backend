Page({
    data: {
        searchKeyword: '',
        selectedCategory: '',
        categories: ['全部', '双人', '剧情', 'PS5', 'SWITCH', '类魂'],
        games: [
            { id: 1, name: '双影奇境', image: 'https://i0.hdslb.com/bfs/new_dyn/8cb754f9e413a0bb718513df63338a663546592604850316.png@380w_480h.avif', type: ['双人', 'PS5'], search: '双影奇境 SYQJ' },
            { id: 2, name: '双人成行', image: 'https://i0.hdslb.com/bfs/new_dyn/d55d80c4d831309776a18fd559a350a93546592604850316.png@380w_480h.avif', type: ['双人', 'PS4'], search: '双人成行 SRCX' },
            { id: 3, name: '街霸6', image: 'https://i0.hdslb.com/bfs/new_dyn/c0b1878dcce89c89e080a306452978473546592604850316.png@380w_480h.avif', type: ['双人', 'PS5'], search: '街霸6 JB6' },
            { id: 4, name: '拳皇15', image: 'https://i0.hdslb.com/bfs/new_dyn/887ff05d6977af88602f645ff05c48783546592604850316.png@380w_480h.avif', type: ['双人', 'PS5'], search: '拳皇15 QH15' },
            { id: 5, name: 'FC25', image: 'https://i0.hdslb.com/bfs/new_dyn/6ab2beb1233e7669281705150991c61c3546592604850316.png@380w_480h.avif', type: ['双人', 'PS5'], search: 'FC25' },
            { id: 6, name: '疯狂兔子：传奇派对', image: 'https://i0.hdslb.com/bfs/new_dyn/78f3d00d6e02efc27e71a2217e68e1b83546592604850316.png@380w_480h.avif', type: ['双人', 'PS5', 'SWITCH'], search: '疯狂兔子：传奇派对 FKTZ CQPD' },
            { id: 7, name: '大富翁10', image: 'https://i0.hdslb.com/bfs/new_dyn/34de6d12c6dd76003098bca603d0ecba3546592604850316.png@380w_480h.avif', type: ['双人', 'SWITCH'], search: '大富翁10 DFW10' },
            { id: 8, name: '魂斗罗·加鲁加行动', image: 'https://i0.hdslb.com/bfs/new_dyn/ed0c1a973c2c2131bce13b34b17f0bb53546592604850316.png@380w_480h.avif', type: ['双人', 'PS5'], search: '魂斗罗·加鲁加行动 HDL JLJXD' },
            { id: 9, name: '任天堂明星大乱斗', image: 'https://i0.hdslb.com/bfs/new_dyn/d32b58da14a064d69bae46973bdc70cf3546592604850316.png@380w_480h.avif', type: ['双人', 'SWITCH'], search: '任天堂明星大乱斗 RTTMXDLD' },
            { id: 10, name: '刺客信条·影', image: 'https://i0.hdslb.com/bfs/new_dyn/5a81b97740ee737bef33fa41dd5f85763546592604850316.png@380w_480h.avif', type: ['剧情', 'PS5'], search: '刺客信条·影 CKXTY' },
            { id: 11, name: '怪物猎人·荒野', image: 'https://i0.hdslb.com/bfs/new_dyn/402a08860d03300da118e641458841de3546592604850316.png@380w_480h.avif', type: ['PS5'], search: '怪物猎人·荒野 GWLRHY' },
            { id: 12, name: '黑神话·悟空', image: 'https://i0.hdslb.com/bfs/new_dyn/7b31335b4b28a87bff765e2108c553ac3546592604850316.png@380w_480h.avif', type: ['PS5'], search: '黑神话·悟空 HSHWK' },
            { id: 13, name: '真·三国无双 起源', image: 'https://i0.hdslb.com/bfs/new_dyn/4204d2068e9cbadc9d9553ce23f326923546592604850316.png@380w_480h.avif', type: ['PS5'], search: '真·三国无双 起源 ZSGWSQY' },
            { id: 14, name: '对马岛之魂', image: 'https://i0.hdslb.com/bfs/new_dyn/55da3afdf5ba70495a3a478497b8fb423546592604850316.png@380w_480h.avif', type: ['PS5'], search: '对马岛之魂 DMDZH' },
            { id: 15, name: '艾尔登法环', image: 'https://i0.hdslb.com/bfs/new_dyn/bfdbe1efaaf07531ba252693b39922bc3546592604850316.png@380w_480h.avif', type: ['PS5', '类魂'], search: '艾尔登法环 AEDFH' },
        ],
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
