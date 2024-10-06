<script setup lang="ts">
import { useRoute } from 'vue-router';

interface IParameter {
  label: string;
  value: string;
}

interface IDetails {
  parameters: IParameter[];
  description: string;
  imgUrls: string[];
}

const route = useRoute();
const details: IDetails = {
  parameters: [
    {
      label: '品牌',
      value: '狼蛛',
    },
    {
      label: '连接方式',
      value: '有线USB',
    },
    {
      label: '类型',
      value: '机械键盘',
    },
    {
      label: '按键寿命',
      value: '约6000+万次',
    },
  ],
  description: '',
  imgUrls: [
    'https://img.alicdn.com/imgextra/i2/2216815049714/O1CN01kQPLDz2Ld4LntHDmh_!!2216815049714.jpg',
    'https://img.alicdn.com/imgextra/i2/2216815049714/O1CN014C2KrI2Ld4IaenH9H_!!2216815049714.jpg',
  ],
};
</script>

<template>
  <div class="details">
    <!--    <h1>ID {{ route.params.id }}</h1>-->
    <div class="section-title">相关参数</div>
    <div class="parameters">
      <div class="item" v-for="item in details.parameters">
        <div class="label">{{ item.label }}</div>
        <div class="value">{{ item.value }}</div>
      </div>
    </div>
    <div class="img-box">
      <img v-for="item in details.imgUrls" :src="item" alt="" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.details {
  font-size: 1.2rem;

  .section-title {
    width: fit-content;
    padding-bottom: 0.2rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid #dbdbdb;
  }

  .parameters {
    .item {
      display: flex;
      margin-bottom: 0.8rem;

      .label {
        width: 120px;
        border-right: 1px solid #dbdbdb;
        color: #7c7c7c;
      }

      .value {
        margin-left: 1rem;
      }
    }
  }

  .img-box {
    img {
      display: block;
      width: 100%;
    }
  }
}
</style>
