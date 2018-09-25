import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Index from '@/components/Index'
import Blog from '@/components/Blog'
import User from '@/components/User'

Vue.use(Router)

export default new Router({
  model:history,
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/blog',
      component: Blog
    },
    {
      path: '/user',
      component: User
    }
  ]
})
