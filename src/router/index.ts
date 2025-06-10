import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cases from '../views/Cases.vue'

const router = createRouter({
  history: createWebHistory('/index/'),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cases',
      name: 'Cases',
      component: Cases
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})

export default router 