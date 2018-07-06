import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/pages/Home')
    },
    {
      path: '/comic/:id',
      name: 'ComicDetail',
      component: () => import('@/pages/ComicDetail')
    },
    {
      path: '/comic/:id/chapter/:cid',
      name: 'Reading',
      component: () => import('@/pages/Reading')
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
