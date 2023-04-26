const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 设置画布的大小
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// canvas.width = 1000;
// canvas.height =500;

let price = initPrice;
let changeRate = initChangeRate;
let color = upColor;
let priceHistory = [];

//开始游戏标识符
let isBeginGame = false;

//最后按的按键
let lastKey = '';

// 每帧的更新函数
function update() {
    if (price>100) {
        price += changeRate;
    }

    color = changeRate >= 0 ? upColor : downColor;

    if (wPressed) {
        changeRate += upRate;
    } else if (sPressed) {
        changeRate -= downRate;
    } else {
        changeRate -= 0.03;
    }

    // //bg 自己加的逻辑
    // if (!wPressed && !sPressed) {
    //     // console.log(1)
    //     changeRate -= 0.03;
    // }

    if (changeRate > upRateLimit) {
        changeRate = upRateLimit;
    }
    if (changeRate < -downRateLimit) {
        changeRate = -downRateLimit;
    }

    console.log(price);

    if(price < 100) {
        priceHistory.push({"price": 101, "lastKey": lastKey});
    } else {
        priceHistory.push({"price": price, "lastKey": lastKey});
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const xScale = 50; // x 轴每个刻度的宽度
    const yScale = 50; // y 轴每个刻度的高度
    const xAxisLength = canvas.width - xScale;
    const yAxisLength = canvas.height - yScale;


//起始横线
    ctx.beginPath();
    ctx.strokeStyle = "#555";
    ctx.lineWidth = 2;
    ctx.moveTo(xScale, yAxisLength);
    ctx.lineTo(xAxisLength, yAxisLength);
    ctx.stroke();

    // return true;

//起始纵线
    ctx.beginPath();
    ctx.strokeStyle = "#555";
    ctx.lineWidth = 2;
    ctx.moveTo(xScale, 0);
    ctx.lineTo(xScale, yAxisLength);
    ctx.stroke();
    // return true;

//横线坐标点
    for (let i = 2; i <= 100; i++) {
        ctx.beginPath();
        ctx.moveTo(i * xScale, yAxisLength - 5);
        ctx.lineTo(i * xScale, yAxisLength + 5);
        ctx.stroke();

        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(`${(i - 1) * 10} s`, i * xScale, yAxisLength + 20);
    }

    // return true;

//纵线坐标点
    for (let i = 1; i <= 100; i++) {
        ctx.beginPath();
        ctx.moveTo(xScale - 5, yAxisLength - i * yScale);
        ctx.lineTo(xScale + 5, yAxisLength - i * yScale);
        ctx.stroke();

        ctx.font = '12px Arial';
        ctx.textAlign = 'right';
        ctx.fillText(i * 10, xScale - 10, yAxisLength - i * yScale + 5);
    }

    // return true;

//表格
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

// return true;
// 
// 


    ctx.setLineDash([]);

    ctx.beginPath();
    ctx.moveTo(xOffset, canvas.height - priceHistory[0]);

    for (let i = 1; i < priceHistory.length; i++) {
        // 根据当前"高度"与上一个"高度"的差值，判断当前"高度"的"变化方向"
        let currentPrice = priceHistory[i].price;
        const prevPrice = priceHistory[i - 1].price;
        const priceDiff = currentPrice - prevPrice;
        const slopeColor = priceDiff >= 0 ? upColor : downColor;    //这里重新判断，加多一个值做判断

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

            // ctx.moveTo(i + xOffset, canvas.height - currentPrice);
            color = slopeColor;

            if (priceDiff < 0 && priceHistory[i].lastKey == 's') {
                color = downColor;
            } else {
                color = upColor;
            }

            // 图线圆滑
            ctx.lineTo(i - 1 + xOffset, canvas.height - prevPrice);
            ctx.stroke();
        }

        ctx.lineTo(i + xOffset, canvas.height - currentPrice);
    }

    // console.log("lastKey:"+lastKey)
    // console.log("priceHistory:"+priceHistory)
    // console.log("priceHistorylength:"+priceHistory.length)

    // 每秒钟更新 30 次画布
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
        // isBeginGame = true;
        lastKey = "w"
    } else if (event.key === "s") {
        sPressed = true;
        // isBeginGame = true;
        lastKey = "s"
    }
});

document.addEventListener("keyup", function (event) {
    if (event.key === "w") {
        wPressed = false;
    } else if (event.key === "s") {
        sPressed = false;
    }
});


update();


