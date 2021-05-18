import Vue from 'vue'
// import { createRouter } from 'vue-router'
import VueRouter from 'vue-router'

import Formulario from './components/Formulario/index.vue'
import Usuarios from './components/Usuarios.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/formulario' },
    { path: '/formulario', component: Formulario },
    { path: '/usuarios', component: Usuarios }
  ]
})