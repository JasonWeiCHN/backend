// [项目配置项]

// 初始值 - y轴
const initPrice = 300;
// 初始变化率
const initChangeRate = 0; // eg initChangeRate = -0.1; 下坡 initChangeRate = 0.1; 上坡
// x 轴的向右偏移量
const xOffset = 50;
// 平坡或者上升时的颜色
const upColor = "red";
// 下降时的颜色
const downColor = "blue";

// 上坡加速度
const upRate = 0.1;
// 下坡加速度
const downRate = 0.1;
// 上坡加速度限值
const upRateLimit = 12;
// 下坡加速度限值
const downRateLimit = 10;