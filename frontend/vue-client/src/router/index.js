import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Aufgabe1 from '@/views/Aufgabe1.vue'
import Aufgabe2 from '@/views/Aufgabe2.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/aufgabe1',
      name: 'aufgabe1',
      component: Aufgabe1
    },
    {
      path: '/aufgabe2',
      name: 'aufgabe2',
      component: Aufgabe2
    },
  ]
})

export default router
