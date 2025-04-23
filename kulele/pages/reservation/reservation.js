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
        activeTab: "form" // tab 状态
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

        this.generateTimeSlots(isToday);
    },

    onDatePickerChange(e) {
        const val = e.detail.value;
        this.setData({
            selectedDate: val,
            displayDate: val
        });
        this.generateTimeSlots(false);
    },

    onTimeModeChange(e) {
        this.setData({
            timeMode: e.detail.value,
            selectedSlotIndex: null
        });
        if (e.detail.value === "custom") this.calculatePrice();
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
        const start = this.data.hourOptions[index];
        const endOptions = this.data.hourOptions.slice(index + 1);
        const end = endOptions[0] || "";

        this.setData({
            customStart: start,
            endHourOptions: endOptions,
            customEnd: end,
            selectedSlotIndex: null
        }, () => {
            if (end) this.calculatePrice();
            else this.setData({ price: 0 });
        });
    },

    onEndHourChange(e) {
        const end = this.data.endHourOptions[e.detail.value];
        this.setData({ customEnd: end, selectedSlotIndex: null }, this.calculatePrice);
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
        console.log("提交数据：", data);
        // TODO: 提交 data 到你的后台
    }
});
