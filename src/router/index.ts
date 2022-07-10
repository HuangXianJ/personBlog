import { 
  createRouter, 
  createWebHashHistory, 
  Router,
  _RouteRecordBase
} from "vue-router";

import type { RouteRecordRaw } from "vue-router";

declare module 'vue-router'{
  interface _RouteRecordBase {
    hidden?: boolean | string | number
  }
}

const routers: Array<RouteRecordRaw> = [
  {
    name: 'home',
    path: '/',
    component: () => import('../views/home.vue')
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('../views/login/index.vue')
  }
]

const router:Router = createRouter({
  history: createWebHashHistory(),
  routes: [...routers]
})

export default router