import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/poem',
    name: 'poem',
    component: () => import('../views/PoemPage.vue')
  },
  {
    path: '/form',
    name: 'form',
    component: () => import('../views/Form.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
