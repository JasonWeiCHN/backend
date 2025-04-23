const gameMap = require('../../data/games.js');

Page({
    data: {
        gameId: null,
        hourOptions: [],
        endHourOptions: [],
        selectedSlot: null,
        selectedSlotIndex: null,
        customStart: "12:00",
        customEnd: "14:00",
        startIndex: 4,
        endIndex: 6,
        area: "hall",
        price: 0,
        gameName: "任意游戏",
        dateOption: "today",
        selectedDate: "",      // yyyy-mm-dd
        minDate: "",           // 今天，用于限制 picker
        displayDate: "",
    },

    onLoad(options) {
        this.initTodayDate();

        if (options.id) {
            const id = options.id;
            const game = gameMap[id] || null;
            if (game) {
                this.setData({
                    gameId: id,
                    gameName: game.name
                });
            }
        }
        this.generateTimeSlots();
        this.generateHourOptions();
    },

    getFormData() {
        return {
            gameId: this.data.gameId || null,
            gameName: this.data.gameName,
            date: this.data.selectedDate,
            startTime: this.data.customStart,
            endTime: this.data.customEnd,
            area: this.data.area,
            price: this.data.price
        };
    },

    initTodayDate() {
        const today = this.formatDate(new Date());
        this.setData({
            minDate: today,
            selectedDate: today,
            displayDate: today
        });
    },

    submitAppointment() {
        const data = this.getFormData();
        console.log("提交数据：", data);

        // TODO: 调用你自己的 API 提交 data
    },

    formatDate(date) {
        const y = date.getFullYear();
        const m = (date.getMonth() + 1).toString().padStart(2, '0');
        const d = date.getDate().toString().padStart(2, '0');
        return `${y}-${m}-${d}`;
    },

    onDateOptionChange(e) {
        const val = e.detail.value;
        let selected = this.data.selectedDate;

        if (val === "today") {
            selected = this.formatDate(new Date());
        } else if (val === "tomorrow") {
            const t = new Date();
            t.setDate(t.getDate() + 1);
            selected = this.formatDate(t);
        }

        this.setData({
            dateOption: val,
            selectedDate: selected,
            displayDate: selected
        });
    },

    onDatePickerChange(e) {
        const val = e.detail.value;
        this.setData({
            selectedDate: val,
            displayDate: val
        });
    },
    generateHourOptions() {
        const hours = [];
        for (let i = 8; i <= 22; i++) {
            hours.push(this.formatHour(i));
        }
        this.setData({
            hourOptions: hours,
            endHourOptions: hours.slice(1) // 默认结束时间比开始时间晚
        });
    },

    formatHour(h) {
        return `${h.toString().padStart(2, '0')}:00`;
    },

    onStartHourChange(e) {
        const index = e.detail.value;
        const start = this.data.hourOptions[index];
        const endOptions = this.data.hourOptions.slice(index + 1); // 更晚的整点
        const end = endOptions[0] || ""; // 如果没有可选项

        this.setData({
            startIndex: index,
            customStart: start,
            endHourOptions: endOptions,
            customEnd: end,
            selectedSlotIndex: null
        }, () => {
            if (end) this.calculatePrice();
            else this.setData({ price: 0 }); // 没有可选结束时间就不算价格
        });
    },

    onEndHourChange(e) {
        const index = e.detail.value;
        const end = this.data.endHourOptions[index];
        this.setData({
            customEnd: end,
            selectedSlotIndex: null
        }, this.calculatePrice);
    },

    generateTimeSlots() {
        const now = new Date();
        now.setMinutes(0, 0, 0);
        if (new Date().getMinutes() > 0) {
            now.setHours(now.getHours() + 1);
        }

        const slots = [];
        for (let i = 0; i < 4; i++) {
            const start = new Date(now.getTime() + i * 2 * 60 * 60 * 1000);
            const end = new Date(start.getTime() + 2 * 60 * 60 * 1000);
            slots.push({
                start: this.formatTime(start),
                end: this.formatTime(end)
            });
        }

        this.setData({ timeSlots: slots });
    },


    formatTime(date) {
        const h = date.getHours().toString().padStart(2, '0');
        const m = date.getMinutes().toString().padStart(2, '0');
        return `${h}:${m}`;
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
        start.setHours(startHour, 0, 0, 0);

        const end = new Date();
        if (endHour <= startHour) {
            end.setDate(end.getDate() + 1); // 到第二天
        }
        end.setHours(endHour, 0, 0, 0);

        let duration = (end - start) / (1000 * 60 * 60); // 小时

        if (duration <= 0) {
            this.setData({ price: 0 });
            return;
        }

        const rate = this.data.area === 'hall' ? 20 : 40;
        this.setData({ price: Math.ceil(duration) * rate });
    }
});
