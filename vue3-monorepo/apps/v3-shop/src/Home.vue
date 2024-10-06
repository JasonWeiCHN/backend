<script setup lang="ts">
import { ImgCard } from 'ui-library/src';
import { useRouter } from 'vue-router';

/*
1. 1eE5xB
2. bBHcfu
3. 0NMALL
4. mr42Qi
5. JkRiJp
6. ue0XzF
7. 9ukNJR
8. aLYPXV
9. AZasUJ
10. lsapHP
11. URqlpP
12. suyGU9
 */

interface IItem {
  id: string;
  img: string;
  price: string;
  title: string;
}

const items: IItem[] = [
  {
    id: '1eE5xB',
    img: 'http://img.alicdn.com/img/i1/2077083549/O1CN0120bQfL1c5UYlJ4v6z_!!2077083549-0-alimamacc.jpg_360x360q90.jpg_.webp',
    price: '119.00',
    title: '牧马人机械手感键盘鼠标套装有线无线电脑游戏电竞键鼠耳机三件套',
  },
  {
    id: 'bBHcfu',
    img: 'https://gw.alicdn.com/imgextra/O1CN01zDFdJN2LY22C5QtDZ_!!3937219703-0-C2M.jpg_360x360q90.jpg_.webp',
    price: '60.50',
    title: '炫光X7S无线蓝牙静音办公金属面壳电竞机械手感电脑手机键鼠套装',
  },
  {
    id: '0NMALL',
    img: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i4/2217992144570/O1CN01FWTB8P1jd71QtJnno_!!0-item_pic.jpg_580x580q90.jpg_.webp',
    price: '88.88',
    title: '狼蛛F2088pro有线机械鼠标套装108键电竞游戏办公台式笔记本',
  },
  {
    id: 'mr42Qi',
    img: 'http://img.alicdn.com/img/i1/2077083549/O1CN0120bQfL1c5UYlJ4v6z_!!2077083549-0-alimamacc.jpg_360x360q90.jpg_.webp',
    price: '119.00',
    title: '牧马人机械手感键盘鼠标套装有线无线电脑游戏电竞键鼠耳机三件套',
  },
  {
    id: 'JkRiJp',
    img: 'https://gw.alicdn.com/imgextra/O1CN01zDFdJN2LY22C5QtDZ_!!3937219703-0-C2M.jpg_360x360q90.jpg_.webp',
    price: '60.50',
    title: '炫光X7S无线蓝牙静音办公金属面壳电竞机械手感电脑手机键鼠套装',
  },
  {
    id: 'ue0XzF',
    img: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i4/2217992144570/O1CN01FWTB8P1jd71QtJnno_!!0-item_pic.jpg_580x580q90.jpg_.webp',
    price: '88.88',
    title: '狼蛛F2088pro有线机械鼠标套装108键电竞游戏办公台式笔记本',
  },
  {
    id: '9ukNJR',
    img: 'http://img.alicdn.com/img/i1/2077083549/O1CN0120bQfL1c5UYlJ4v6z_!!2077083549-0-alimamacc.jpg_360x360q90.jpg_.webp',
    price: '119.00',
    title: '牧马人机械手感键盘鼠标套装有线无线电脑游戏电竞键鼠耳机三件套',
  },
  {
    id: 'aLYPXV',
    img: 'https://gw.alicdn.com/imgextra/O1CN01zDFdJN2LY22C5QtDZ_!!3937219703-0-C2M.jpg_360x360q90.jpg_.webp',
    price: '60.50',
    title: '炫光X7S无线蓝牙静音办公金属面壳电竞机械手感电脑手机键鼠套装',
  },
  {
    id: 'AZasUJ',
    img: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i4/2217992144570/O1CN01FWTB8P1jd71QtJnno_!!0-item_pic.jpg_580x580q90.jpg_.webp',
    price: '88.88',
    title: '狼蛛F2088pro有线机械鼠标套装108键电竞游戏办公台式笔记本',
  },
  {
    id: 'lsapHP',
    img: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i4/2217992144570/O1CN01FWTB8P1jd71QtJnno_!!0-item_pic.jpg_580x580q90.jpg_.webp',
    price: '88.88',
    title: '狼蛛F2088pro有线机械鼠标套装108键电竞游戏办公台式笔记本',
  },
  {
    id: 'URqlpP',
    img: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i4/2217992144570/O1CN01FWTB8P1jd71QtJnno_!!0-item_pic.jpg_580x580q90.jpg_.webp',
    price: '88.88',
    title: '狼蛛F2088pro有线机械鼠标套装108键电竞游戏办公台式笔记本',
  },
  {
    id: 'suyGU9',
    img: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i4/2217992144570/O1CN01FWTB8P1jd71QtJnno_!!0-item_pic.jpg_580x580q90.jpg_.webp',
    price: '88.88',
    title: '狼蛛F2088pro有线机械鼠标套装108键电竞游戏办公台式笔记本',
  },
];

const router = useRouter();

function onItemClick(item: IItem) {
  router.push(`/item/${item.id}`);
}
</script>

<template>
  <div class="item-container">
    <ImgCard
      v-for="item in items"
      @click="onItemClick(item)"
      :img="item.img"
      :price="item.price"
      :title="item.title"
    ></ImgCard>
  </div>
</template>

<style scoped lang="scss">
.item-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
