import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Tutores from '../views/Tutores.vue'
import Ayuda from '../views/Ayuda.vue'
import Register from '../views/Register.vue'
import Pago from '../views/Pago.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Tutores',
    name: 'Tutores',
    component: Tutores
  },

  {
    path:'/Ayuda',
    name:'Ayuda',
    component: Ayuda
  },
  {
    path:'/Register',
    name:'Register',
    component: Register
  },
  {
    path:'/Pago',
    name:'Pago',
    component: Pago
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
