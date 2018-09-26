import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Index from '@/components/Index'
import BlogPage from '@/components/blogpage/BlogPage'
import User from '@/components/User'
import Blog from '@/components/blogpage/Blog'

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
      path: '/blogPage',
      component: BlogPage
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
