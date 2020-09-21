import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/extension',
    name: 'extension',
    component: () => import(/* webpackChunkName: "about" */ '../views/extension.vue')
  },
  {
    path: '/design',
    name: 'design',
    component: () => import(/* webpackChunkName: "about" */ '../views/design.vue')
  },
  {
    path: '/sales',
    name: 'sales',
    component: () => import(/* webpackChunkName: "about" */ '../views/sales.vue')
  },
  {
    path: '/shopper',
    name: 'shopper',
    component: () => import(/* webpackChunkName: "about" */ '../views/shopper.vue')
  },
  {
    path: '/marketing',
    name: 'marketing',
    component: () => import(/* webpackChunkName: "about" */ '../views/marketing.vue')
  },
  {
    path: '/system',
    name: 'system',
    component: () => import(/* webpackChunkName: "about" */ '../views/system.vue')
  },
  {
    path: '/helper',
    name: 'helper',
    component: () => import(/* webpackChunkName: "about" */ '../views/helper.vue')
  },
  { path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/contact.vue')

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
