import { 
  createRouter, 
  createMemoryHistory, 
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
    name: 'index',
    path: '/',
    component: () => import('../views/home.vue')
  }
]

const router:Router = createRouter({
  history: createMemoryHistory(),
  routes: [...routers]
})

export default router