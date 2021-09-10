import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Details from "@/views/Details.vue";
import Home from "@/views/Home.vue";
import Create from "@/views/Create.vue";

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
    },
    {
        path: "/create",
        name: "Create",
        component: Create
    }
  ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
