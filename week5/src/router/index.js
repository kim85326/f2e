import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
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
      redirect: '/comic/1'
    }
  ]
})
