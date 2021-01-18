import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/administracion',
    name: 'Administracion',
    component: () => import(/* webpackChunkName: "about" */ '../views/Administracion.vue')
  },
  {
    path: '/editando/:id',
    name: 'Editando',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/Editando.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
