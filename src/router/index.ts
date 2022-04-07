import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { defineAsyncComponent } from 'vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: defineAsyncComponent(() => import('~/pages/Home.vue'))
  },
  {
    path: '/modeler',
    name: 'modeler',
    component: defineAsyncComponent(() => import('~/pages/Modeler.vue'))
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
