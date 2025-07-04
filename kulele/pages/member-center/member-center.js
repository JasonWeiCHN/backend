Page({
    data: {
        balance: 0.00,
        articles: []
    },

    onLoad() {
        this.fetchBalance();
        this.fetchArticles();
    },

    fetchBalance() {
        const openid = getApp().globalData.openid;
        if (!openid) return;

        wx.request({
            url: 'https://kulele.club/api/user_balance',
            method: 'GET',
            data: { openid },
            success: (res) => {
                if (res.data && typeof res.data.balance === 'number') {
                    this.setData({ balance: res.data.balance.toFixed(2) });
                }
            },
            fail: () => {
                wx.showToast({ title: '获取余额失败', icon: 'none' });
            }
        });
    },

    fetchArticles() {
        wx.request({
            url: 'https://kulele.club/api/member_articles',
            method: 'GET',
            success: (res) => {
                if (res.data && Array.isArray(res.data.articles)) {
                    this.setData({ articles: res.data.articles });
                }
            },
            fail: () => {
                wx.showToast({ title: '加载文章失败', icon: 'none' });
            }
        });
    },

    goToRecharge() {
        wx.navigateTo({
            url: '/pages/recharge/recharge'
        });
    },

    viewHistory() {
        wx.navigateTo({
            url: '/pages/transaction-history/transaction-history'
        });
    },

    onArticleTap(e) {
        const article = e.currentTarget.dataset.article;
        if (article.linkType === 'internal') {
            wx.navigateTo({
                url: `/pages/article-detail/article-detail?id=${article.id}`
            });
        } else if (article.linkType === 'external') {
            wx.navigateTo({
                url: `/pages/webview/webview?url=${encodeURIComponent(article.url)}`
            });
        }
    }
});
