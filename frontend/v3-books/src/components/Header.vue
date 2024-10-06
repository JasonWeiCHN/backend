<template>
  <div class="header">
    <div class="header__container">
      <div class="left">
        <div class="title">历史馆</div>
        <div class="sub-title">珍贵历史资料汇聚于此</div>
      </div>
      <div class="right"><span>登录</span> | <span>注册</span></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.header {
  position: relative;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #cacaca;
  box-shadow: 0 0.8rem 2rem rgba(0, 0, 0, 0.1); /* 轻微阴影 */

  &__container {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 60rem;
    padding: 0 1rem;
    height: 5rem;
    font-size: 1rem;

    .left {
      display: flex;
      align-items: flex-end;

      .title {
        font-size: 2rem;
        transform: scale(1, 1.6);
        font-weight: 600;
      }

      .sub-title {
        font-weight: 600;
        margin-left: 0.3rem;
        transform: scale(1, 2);
        color: #ff0000;
      }
    }

    .right {
      cursor: pointer;
      transform: scale(1, 1.2);

      span {
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
