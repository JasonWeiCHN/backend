const gameMap = require('../../data/games.js');

Page({
    data: {
        gameId: null,
        gameName: "任意游戏",
        hourOptions: [],
        endHourOptions: [],
        timeSlots: [],
        selectedSlot: null,
        selectedSlotIndex: null,
        customStart: "12:00",
        customEnd: "14:00",
        area: "hall",
        price: 0,
        dateOption: "today",
        selectedDate: "",
        minDate: "",
        displayDate: "",
        timeMode: "slot", // slot 或 custom
        activeTab: "form",// tab 状态
        customHourOptions: [],     // 自定义用的开始时间数组
        customEndHourOptions: [],  // 自定义用的结束时间数组

    },

    onLoad(options) {
        this.initTodayDate();
        if (options.id) {
            const id = options.id;
            const game = gameMap[id];
            if (game) {
                this.setData({ gameId: id, gameName: game.name });
            }
        }
        this.generateHourOptions();
        this.generateTimeSlots(true);
    },

    initTodayDate() {
        const today = this.formatDate(new Date());
        this.setData({
            minDate: today,
            selectedDate: today,
            displayDate: today
        });
    },

    formatDate(date) {
        const y = date.getFullYear();
        const m = (date.getMonth() + 1).toString().padStart(2, '0');
        const d = date.getDate().toString().padStart(2, '0');
        return `${y}-${m}-${d}`;
    },

    formatHour(h) {
        return `${h.toString().padStart(2, '0')}:00`;
    },

    formatTime(date) {
        const h = date.getHours().toString().padStart(2, '0');
        const m = date.getMinutes().toString().padStart(2, '0');
        return `${h}:${m}`;
    },

    switchTab(e) {
        this.setData({ activeTab: e.currentTarget.dataset.tab });
    },

    getDefaultCustomTimes(isToday) {
        let startHour = isToday ? new Date().getHours() + 1 : 8;
        if (startHour > 22) startHour = 22; // 最晚起始时间限制
        const endHour = Math.min(startHour + 2, 23); // 最多到23点

        return {
            customStart: this.formatHour(startHour),
            customEnd: this.formatHour(endHour)
        };
    },


    onDateOptionChange(e) {
        const val = e.detail.value;
        let selected = this.data.selectedDate;
        let isToday = false;

        if (val === "today") {
            selected = this.formatDate(new Date());
            isToday = true;
        } else {
            const t = new Date();
            if (val === "tomorrow") t.setDate(t.getDate() + 1);
            selected = this.formatDate(t);
        }

        this.setData({
            dateOption: val,
            selectedDate: selected,
            displayDate: selected
        });

        this.generateTimeSlots(isToday);         // 更新选择时间段的候选
        this.generateCustomTimeOptions(isToday); // 更新自定义时间段的候选

        // 如果当前是选择的自定义时间段模式，就主动重设当前时间值
        if (this.data.timeMode === 'custom') {
            const { customStart, customEnd } = this.getDefaultCustomTimes(isToday);
            this.setData({
                customStart,
                customEnd
            }, this.calculatePrice);
        }
    },

    onDatePickerChange(e) {
        const val = e.detail.value;
        this.setData({
            selectedDate: val,
            displayDate: val
        });
        this.generateTimeSlots(false);
    },

    getStartHourForCustomTime() {
        const now = new Date();
        if (this.data.dateOption === "today") {
            let hour = now.getHours() + (now.getMinutes() > 0 ? 1 : 0);
            return Math.min(Math.max(hour, 8), 21); // 限制范围
        }
        return 8;
    },

    generateCustomTimeOptions(isToday) {
        const hours = [];
        let startHour = isToday ? new Date().getHours() + 1 : 8;  // 今天是下一个小时，其他日期是8:00

        for (let i = startHour; i <= 22; i++) {
            hours.push(this.formatHour(i));
        }

        this.setData({
            customHourOptions: hours,
            customEndHourOptions: hours.slice(1)
        });
    },

    onTimeModeChange(e) {
        const mode = e.detail.value;
        if (mode === "custom") {
            const isToday = this.data.dateOption === "today"; // ✅ 判断是否是今天

            this.generateCustomTimeOptions(isToday); // ✅ 传入 isToday 参数

            const startHour = this.getStartHourForCustomTime();
            const customStart = this.formatHour(startHour);
            const customEnd = this.formatHour(Math.min(startHour + 2, 22));

            const startIndex = this.data.customHourOptions.indexOf(customStart);
            const endOptions = this.data.customHourOptions.slice(startIndex + 1);

            this.setData({
                timeMode: mode,
                customStart,
                customEnd,
                startIndex,
                customEndHourOptions: endOptions,
                selectedSlotIndex: null
            }, this.calculatePrice);
        } else {
            this.setData({
                timeMode: mode,
                selectedSlotIndex: null
            });
        }
    },

    generateHourOptions() {
        const hours = [];
        for (let i = 8; i <= 22; i++) {
            hours.push(this.formatHour(i));
        }
        this.setData({
            hourOptions: hours,
            endHourOptions: hours.slice(1)
        });
    },

    generateTimeSlots(isToday = true) {
        const slots = [];
        let startHour = isToday ? new Date().getHours() + (new Date().getMinutes() > 0 ? 1 : 0) : 8;
        startHour = Math.max(8, startHour);

        for (let h = startHour; h < 22; h += 2) {
            slots.push({
                start: this.formatHour(h),
                end: this.formatHour(h + 2)
            });
        }

        this.setData({ timeSlots: slots });
    },

    onStartHourChange(e) {
        const index = e.detail.value;
        const start = this.data.customHourOptions[index];

        // 找到对应的新结束时间选项
        const startIndex = this.data.customHourOptions.indexOf(start);
        const endOptions = this.data.customHourOptions.slice(startIndex + 1);
        const end = endOptions.length > 0 ? endOptions[0] : "";

        this.setData({
            startIndex,
            customStart: start,
            customEndHourOptions: endOptions,
            customEnd: end,
            selectedSlotIndex: null
        }, () => {
            if (end) {
                this.calculatePrice();
            } else {
                this.setData({ price: 0 });
            }
        });
    },

    onEndHourChange(e) {
        const index = e.detail.value;
        const end = this.data.customEndHourOptions[index];
        this.setData({
            customEnd: end,
            selectedSlotIndex: null
        }, this.calculatePrice);
    },

    selectTimeSlot(e) {
        const slot = e.currentTarget.dataset.slot;
        const index = e.currentTarget.dataset.index;

        this.setData({
            customStart: slot.start,
            customEnd: slot.end,
            selectedSlotIndex: index
        }, this.calculatePrice);
    },

    onAreaChange(e) {
        this.setData({ area: e.detail.value }, this.calculatePrice);
    },

    calculatePrice() {
        const [startHour] = this.data.customStart.split(':').map(Number);
        const [endHour] = this.data.customEnd.split(':').map(Number);

        const start = new Date();
        const end = new Date();

        start.setHours(startHour, 0, 0, 0);
        end.setHours(endHour, 0, 0, 0);
        if (endHour <= startHour) end.setDate(end.getDate() + 1);

        const duration = (end - start) / (1000 * 60 * 60);
        if (duration <= 0) return this.setData({ price: 0 });

        const rate = this.data.area === 'hall' ? 20 : 40;
        this.setData({ price: Math.ceil(duration) * rate });
    },

    submitAppointment() {
        const data = {
            gameId: this.data.gameId,
            gameName: this.data.gameName,
            date: this.data.selectedDate,
            startTime: this.data.customStart,
            endTime: this.data.customEnd,
            area: this.data.area,
            price: this.data.price
        };

        wx.request({
            url: 'http://127.0.0.1:5000/appointment',  // 注意换成你的局域网IP或者127.0.0.1
            method: 'POST',
            data,
            header: {
                'content-type': 'application/json'
            },
            success: (res) => {
                console.log("预约成功：", res.data);
                wx.showToast({
                    title: '预约成功！',
                    icon: 'success'
                });
            },
            fail: (err) => {
                console.error("预约失败：", err);
                wx.showToast({
                    title: '预约失败',
                    icon: 'error'
                });
            }
        });
    }
});
