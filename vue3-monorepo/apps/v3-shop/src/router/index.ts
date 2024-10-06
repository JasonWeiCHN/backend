import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: import('../Home.vue'),
    },
    {
      path: '/item/:id',
      component: import('../Details.vue'),
    },
  ],
});

export default router;
