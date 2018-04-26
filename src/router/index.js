import Vue from 'vue'
import Router from 'vue-router'

import Index from '../pages/index/index'
import Recommend from '../pages/recommend/recommend'
import Discover from '../pages/discover/discover'
import User from '../pages/user/user'
import Login from '../pages/user/login'
import Info from '../pages/user/info'
import Raiders from '../pages/discover/raiders'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    },
    {
      path: '/discover',
      name: 'discover',
      component: Discover,
      children: [
        {
          path: 'raiders',
          component: Raiders
        }
      ]
    },
    {
      path: '/user',
      name: 'user',
      component: User,
      children: [
        {
          path: 'login',
          name: 'login',
          component: Login
        },
        {
          path: 'info',
          component: Info
        }
      ]
    }
  ]
})
