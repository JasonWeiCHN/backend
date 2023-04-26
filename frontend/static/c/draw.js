const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 设置画布的大小
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let price = initPrice;
let changeRate = initChangeRate;
let color = upColor;
let priceHistory = [];

// 每帧的更新函数
function update() {
    price += changeRate;

    color = changeRate >= 0 ? upColor : downColor;

    if (wPressed) {
        changeRate += upRate;
    } else if (sPressed) {
        changeRate -= downRate;
    }

    if (changeRate > upRateLimit) {
        changeRate = upRateLimit;
    }
    if (changeRate < -downRateLimit) {
        changeRate = -downRateLimit;
    }

    priceHistory.push(price);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const xScale = 50; // x 轴每个刻度的宽度
    const yScale = 50; // y 轴每个刻度的高度
    const xAxisLength = canvas.width - xScale;
    const yAxisLength = canvas.height - yScale;

    ctx.beginPath();
    ctx.strokeStyle = "#555";
    ctx.lineWidth = 2;
    ctx.moveTo(xScale, yAxisLength);
    ctx.lineTo(xAxisLength, yAxisLength);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "#555";
    ctx.lineWidth = 2;
    ctx.moveTo(xScale, 0);
    ctx.lineTo(xScale, yAxisLength);
    ctx.stroke();

    for (let i = 2; i <= 100; i++) {
        ctx.beginPath();
        ctx.moveTo(i * xScale, yAxisLength - 5);
        ctx.lineTo(i * xScale, yAxisLength + 5);
        ctx.stroke();

        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(`${(i-1) * 10} s`, i * xScale, yAxisLength + 20);
    }

    for (let i = 1; i <= 100; i++) {
        ctx.beginPath();
        ctx.moveTo(xScale - 5, yAxisLength - i * yScale);
        ctx.lineTo(xScale + 5, yAxisLength - i * yScale);
        ctx.stroke();

        ctx.font = '12px Arial';
        ctx.textAlign = 'right';
        ctx.fillText(i * 10, xScale - 10, yAxisLength - i * yScale + 5);
    }

    ctx.setLineDash([5, 5]);
    ctx.strokeStyle = "#ccc";
    for (let i = 1; i <= 100; i++) {
        ctx.beginPath();
        ctx.moveTo(i * xScale, 0);
        ctx.lineTo(i * xScale, yAxisLength);
        ctx.stroke();
    }

    for (let i = 1; i <= 100; i++) {
        ctx.beginPath();
        ctx.moveTo(xScale, yAxisLength - i * yScale);
        ctx.lineTo(xAxisLength, yAxisLength - i * yScale);
        ctx.stroke();
    }

    ctx.setLineDash([]);

    ctx.beginPath();
    ctx.moveTo(xOffset, canvas.height - priceHistory[0]);

    for (let i = 1; i < priceHistory.length; i++) {
        // 根据当前"高度"与上一个"高度"的差值，判断当前"高度"的"变化方向"
        const currentPrice = priceHistory[i];
        const prevPrice = priceHistory[i - 1];
        const priceDiff = currentPrice - prevPrice;
        const slopeColor = priceDiff >= 0 ? upColor : downColor;

        // 绘制上下坡的颜色
        if (i === 1) {
            ctx.strokeStyle = color;
            ctx.lineWidth = 18;
            ctx.stroke();
        }
        if (slopeColor !== color || i === priceHistory.length - 1) {
            ctx.strokeStyle = color;
            ctx.lineWidth = 18;
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(i + xOffset, canvas.height - currentPrice);
            color = slopeColor;

            // 图线圆滑
            ctx.lineTo(i - 1 + xOffset, canvas.height - prevPrice);
            ctx.stroke();
        }

        ctx.lineTo(i + xOffset, canvas.height - currentPrice);
    }

    // 每秒钟更新 60 次画布
    setTimeout(function () {
        requestAnimationFrame(update);
    }, 1000 / 60);
}

// 监听键盘事件
let wPressed = false;
let sPressed = false;
document.addEventListener("keydown", function (event) {
    if (event.key === "w") {
        wPressed = true;
    } else if (event.key === "s") {
        sPressed = true;
    }
});

document.addEventListener("keyup", function (event) {
    if (event.key === "w") {
        wPressed = false;
    } else if (event.key === "s") {
        sPressed = false;
    }
});

// 开始游戏
update();