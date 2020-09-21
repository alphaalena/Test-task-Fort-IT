import Vue from 'vue'
import VueRouter from 'vue-router'
import orders from '../views/orders.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: orders
  },
  {
    path: '/extension',
    name: 'extension',
    component: () => import('../views/extension.vue')
  },
  {
    path: '/design',
    name: 'design',
    component: () => import('../views/design.vue')
  },
  {
    path: '/sales',
    name: 'sales',
    component: () => import('../views/sales.vue')
  },
  {
    path: '/shopper',
    name: 'shopper',
    component: () => import('../views/shopper.vue')
  },
  {
    path: '/marketing',
    name: 'marketing',
    component: () => import('../views/marketing.vue')
  },
  {
    path: '/system',
    name: 'system',
    component: () => import('../views/system.vue')
  },
  {
    path: '/helper',
    name: 'helper',
    component: () => import('../views/helper.vue')
  },
  { path: '/contact',
    name: 'contact',
    component: () => import('../views/contact.vue')

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
