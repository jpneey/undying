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
      path: '/list',
      name: 'list',
      component: () => import('../views/List.vue')
    },
    {
      path: '/:slug',
      name: 'Sauce',
      component: () => import('../views/Sauce.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: 'instant' }
  },
})

export default router
