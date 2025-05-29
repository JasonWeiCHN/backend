Page({
    data: {
        registerType: 'wechat', // 初始选择
        account: '',
        nickname: '',
        openid: '' // 新增字段
    },

    onLoad() {
        const openid = getApp().globalData.openid;
        if (openid) {
            this.setData({ openid });
        } else {
            wx.showToast({ title: '未登录', icon: 'none' });
            wx.navigateBack();
        }
    },

    onRegisterTypeChange(e) {
        this.setData({
            registerType: e.detail.value,
            account: ''
        });
    },

    onAccountInput(e) {
        this.setData({
            account: e.detail.value
        });
    },

    onNicknameInput(e) {
        this.setData({
            nickname: e.detail.value
        });
    },

    validateInput() {
        const { registerType, account, nickname } = this.data;
        if (registerType === 'phone') {
            const phoneRegex = /^1[3-9]\d{9}$/;
            if (!phoneRegex.test(account)) {
                wx.showToast({ title: '手机号格式不正确', icon: 'none' });
                return false;
            }
        } else if (registerType === 'wechat') {
            if (account.length < 4 || account.length > 20) {
                wx.showToast({ title: '微信号长度需在4-20之间', icon: 'none' });
                return false;
            }
        }

        if (!nickname || nickname.length > 8) {
            wx.showToast({ title: '昵称不能为空且最多8个字', icon: 'none' });
            return false;
        }

        return true;
    },

    submitRegister() {
        if (!this.validateInput()) return;

        const { registerType, account, nickname, openid } = this.data;

        wx.request({
            url: 'https://kulele.club/api/register',
            method: 'POST',
            data: {
                registerType,
                account,
                nickname,
                openid
            },
            success: res => {
                if (res.data.error) {s
                    const msgMap = {
                        'already_registered': '请勿重复注册',
                        'missing_fields': '请填写所有字段',
                        'invalid_phone_format': '手机号格式不正确',
                        'invalid_wechat_format': '微信号应为4-20个字符',
                        'nickname_too_long': '昵称最多8个字'
                    };

                    wx.showToast({
                        title: msgMap[res.data.error] || '注册失败',
                        icon: 'none'
                    });
                    return;
                }

                if (res.data.msg === 'Registration successful') {
                    const app = getApp();
                    app.globalData.isRegistered = true;
                    app.globalData.nickname = this.data.nickname;

                    wx.showToast({ title: '注册成功', icon: 'success' });
                    wx.navigateBack();
                } else {
                    wx.showToast({ title: res.data.msg || '注册失败', icon: 'none' });
                }
            },
            fail: () => {
                wx.showToast({ title: '注册失败', icon: 'none' });
            }
        });
    }
});
