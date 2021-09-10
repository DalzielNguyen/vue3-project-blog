import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Details from "@/views/Details.vue";
import Home from "@/views/Home.vue";

const routes: Array<RouteRecordRaw> = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/posts/:id',
      name: 'Details',
      component: Details,
      props: true
    }
  ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
