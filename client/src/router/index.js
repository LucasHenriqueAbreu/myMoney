import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/home',
      component: Home,
      meta: {auth: true}
    },
    {
      path: '/login',
      component: Login,
      meta: {auth: false}
    }
  ]
})
