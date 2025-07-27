import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/index.vue'),
  },
  {
    path: '/en',
    name: 'HomeEn',
    component: () => import('@/pages/index.vue'),
  },
  // tu dodajesz inne trasy, np. o nas, kontakt itd.
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
