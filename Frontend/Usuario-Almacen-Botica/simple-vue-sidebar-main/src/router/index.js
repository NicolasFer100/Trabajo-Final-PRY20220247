import Vue from 'vue'
import VueRouter from 'vue-router'
import dashboard from '../views/Dashboard'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: dashboard,
    children: [
      {
        path: '',
        name: 'Medicines',
        component: () => import('../views/Medicines.vue')
      },
      {
        path: 'almacen',
        component: () => import('../views/Almacen.vue')
      },
      {
        path: 'detalles',
        component: () => import('../views/Detalles.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
