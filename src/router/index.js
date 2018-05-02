import Vue from 'vue'
import Router from 'vue-router'

import Index from '../pages/index/index'
import Recommend from '../pages/recommend/recommend'
import Discover from '../pages/discover/discover'
import User from '../pages/user/user'
import Login from '../pages/user/login'
import Info from '../pages/user/info'
import ArticleList from '../pages/discover/articlelist'
import ArticleSameList from '../pages/discover/articlesame'
import ArticleDetail from '../pages/discover/detail'
import Orders from '../pages/user/orders'
import FoodDetail from '../pages/food/detail'
import ChangeaPwd from '../pages/user/change-password'

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
      path: '/discover/',
      name: 'discover',
      redirect: '/discover/list',
      component: Discover,
      children: [
        {
          path: 'list',
          component: ArticleList
        },
        {
          path: 'detail',
          component: ArticleDetail
        },
        {
          path: 'samelist',
          component: ArticleSameList
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
        },
        {
          path: 'orders',
          component: Orders
        },
        {
          path: 'change-pwd',
          component: ChangeaPwd
        }
      ]
    },
    {
      path: '/food/detail',
      component: FoodDetail
    }
  ]
})
