import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/directory',
      name: 'directory',
      component: () => import('../views/Directory.vue')
    },
    {
      path: '/:slug',
      name: 'Sauce',
      component: () => import('../views/Sauce.vue')
    }
  ],
})

export default router
