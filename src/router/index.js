import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CrossBorder from '../views/cases/CrossBorder.vue'
import Ddos from '../views/cases/Ddos.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cases/cross-border',
    name: 'CrossBorder',
    component: CrossBorder
  },
  {
    path: '/cases/ddos',
    name: 'Ddos',
    component: Ddos
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 