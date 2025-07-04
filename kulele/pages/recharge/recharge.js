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

        // 微信支付要求 amount 单位为分，确保传整数分
        const amountInFen = Math.floor(amount * 100);

        wx.request({
            url: 'https://kulele.club/api/recharge',
            method: 'POST',
            data: { openid, amount: amountInFen },
            success: (res) => {
                if (res.statusCode === 200 && res.data.prepay_id) {
                    // 调用微信支付接口
                    wx.requestPayment({
                        timeStamp: res.data.timeStamp,
                        nonceStr: res.data.nonceStr,
                        package: res.data.package,
                        signType: res.data.signType,
                        paySign: res.data.paySign,
                        success: () => {
                            wx.showToast({ title: '充值成功', icon: 'success' });
                            wx.navigateBack(); // 返回会员中心页
                        },
                        fail: (err) => {
                            console.error('支付失败:', err);
                            wx.showToast({ title: '支付失败', icon: 'none' });
                        }
                    });
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
