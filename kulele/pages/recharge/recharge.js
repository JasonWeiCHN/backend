Page({
    data: {
        presetAmounts: [10, 20, 50, 100, 200],
        selectedAmount: null,
        customAmount: ''
    },

    selectAmount(e) {
        this.setData({
            selectedAmount: e.currentTarget.dataset.amount,
            customAmount: ''
        });
    },

    onCustomInput(e) {
        this.setData({
            customAmount: e.detail.value,
            selectedAmount: null
        });
    },

    submitRecharge() {
        const openid = getApp().globalData.openid;
        const { selectedAmount, customAmount } = this.data;
        let amount = selectedAmount || parseFloat(customAmount);

        if (!openid) {
            wx.showToast({ title: '未登录', icon: 'none' });
            return;
        }

        if (!amount || amount <= 0) {
            wx.showToast({ title: '请输入有效金额', icon: 'none' });
            return;
        }

        wx.request({
            url: 'https://kulele.club/api/recharge',
            method: 'POST',
            data: { openid, amount },
            success: (res) => {
                if (res.data && res.data.success) {
                    wx.showToast({ title: '充值成功', icon: 'success' });
                    wx.navigateBack(); // 返回会员中心页
                } else {
                    wx.showToast({ title: res.data.msg || '充值失败', icon: 'none' });
                }
            },
            fail: () => {
                wx.showToast({ title: '网络错误', icon: 'none' });
            }
        });
    }
});
