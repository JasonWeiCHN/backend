<template>
  <div class="img-card">
    <div class="img-box">
      <img :src="img" alt="" />
    </div>
    <p class="title">
      {{ title }}
    </p>
    <p class="price-box">
      <span class="unit">¥</span>
      <span class="price">{{ price }}</span>
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  img: string;
  title: string;
  price: string;
}>();
</script>

<style scoped lang="scss">
.img-card {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: center;
  border: 1px solid transparent;
  padding: 0.2rem;
  font-size: 1rem;

  .img-box {
    overflow: hidden;
    width: 15rem;
    height: 15rem;
    transition: clip-path 0.2s ease-in-out; /* 动画效果 */

    /* 初始状态：四个斜角 */
    clip-path: polygon(
      12px 0,
      calc(100% - 12px) 0,
      100% 12px,
      100% calc(100% - 12px),
      calc(100% - 12px) 100%,
      12px 100%,
      0 calc(100% - 12px),
      0 12px
    );

    &:hover {
      clip-path: polygon(
        0 0,
        100% 0,
        100% 0,
        100% 100%,
        100% 100%,
        0 100%,
        0 100%,
        0 0
      );
    }

    &:hover {
      border-radius: 0;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .title {
    width: 220px;
    margin-top: 0.5rem;
    display: -webkit-box; /* 创建多行限制 */
    -webkit-line-clamp: 2; /* 限制显示的行数 */
    -webkit-box-orient: vertical; /* 设置布局方向为垂直 */
    overflow: hidden; /* 隐藏超出部分 */
    text-overflow: ellipsis; /* 添加省略号 */
    white-space: normal; /* 允许多行 */
  }

  .price-box {
    margin-top: 0.5rem;
    color: #fc363c;

    .price {
      font-size: 1.2rem;
      font-weight: 600;
    }
  }

  &:hover {
    cursor: pointer;
    border: 1px solid #fc363c;
    box-shadow: 0 0.8rem 2rem rgba(0, 0, 0, 0.1);
  }
}
</style>
