import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CrossBorder from '../views/cases/CrossBorder.vue'
import Ddos from '../views/cases/Ddos.vue'
import Fengrui from '../views/cases/Fengrui.vue'
import Bairui from '../views/cases/Bairui.vue'
import InventoryGame from '../views/cases/InventoryGame.vue'
import InventoryStable from '../views/cases/InventoryStable.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cases/fengrui',
    name: 'FengruiCase',
    component: Fengrui
  },
  {
    path: '/cases/bairui',
    name: 'BairuiCase',
    component: Bairui
  },
  {
    path: '/cases/inventory-game',
    name: 'InventoryGameCase',
    component: InventoryGame
  },
  {
    path: '/cases/inventory-stable',
    name: 'InventoryStableCase',
    component: InventoryStable
  },
  {
    path: '/smb',
    name: 'Smb',
    beforeEnter() {
      window.location.href = 'https://smb.dycloud.ai/'
    }
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
  history: createWebHistory('/'),
  routes
})

export default router 