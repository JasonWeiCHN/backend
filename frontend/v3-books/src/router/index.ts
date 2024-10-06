import { createRouter, createWebHistory } from 'vue-router'
// 导入 RouteRecordRaw 类型时使用 type-only import
import HomeView from '../views/HomeView.vue'
import TheWanderer1 from '@/views/novels/the-wanderer/TheWanderer1.vue'
import TheWanderer2 from '@/views/novels/the-wanderer/TheWanderer2.vue'
import TheWanderer3 from '@/views/novels/the-wanderer/TheWanderer3.vue'
import TheWanderer4 from '@/views/novels/the-wanderer/TheWanderer4.vue'
import TheWanderer5 from '@/views/novels/the-wanderer/TheWanderer5.vue'
import TheWanderer6 from '@/views/novels/the-wanderer/TheWanderer6.vue'
import TheWanderer7 from '@/views/novels/the-wanderer/TheWanderer7.vue'
import TheWanderer8 from '@/views/novels/the-wanderer/TheWanderer8.vue'
import TheWanderer9 from '@/views/novels/the-wanderer/TheWanderer9.vue'
import TheWanderer10 from '@/views/novels/the-wanderer/TheWanderer10.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/test',
      name: 'test',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/MarkdownViewer2.vue'),
    },
    {
      path: '/the-wanderer1',
      name: 'the-wanderer1',
      component: TheWanderer1,
    },
    {
      path: '/the-wanderer2',
      name: 'the-wanderer2',
      component: TheWanderer2,
    },
    {
      path: '/the-wanderer3',
      name: 'the-wanderer3',
      component: TheWanderer3,
    },
    {
      path: '/the-wanderer4',
      name: 'the-wanderer4',
      component: TheWanderer4,
    },
    {
      path: '/the-wanderer5',
      name: 'the-wanderer5',
      component: TheWanderer5,
    },
    {
      path: '/the-wanderer6',
      name: 'the-wanderer6',
      component: TheWanderer6,
    },
    {
      path: '/the-wanderer7',
      name: 'the-wanderer7',
      component: TheWanderer7,
    },
    {
      path: '/the-wanderer8',
      name: 'the-wanderer8',
      component: TheWanderer8,
    },
    {
      path: '/the-wanderer9',
      name: 'the-wanderer9',
      component: TheWanderer9,
    },
    {
      path: '/the-wanderer10',
      name: 'the-wanderer10',
      component: TheWanderer10,
    },
  ],
})

export default router
