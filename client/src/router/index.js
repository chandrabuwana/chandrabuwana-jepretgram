import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }
    ,
    {
      path:'/register',
      name:'register',
      component: Register
    },
    {
      path:'/home',
      name:'Home',
      component: Home
    }
  ]
})
