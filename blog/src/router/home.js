import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import UpdateInfo from '@/components/UpdateInfo'
import PublicBlog from '@/components/PublicBlog'
import ManageBlog from '@/components/BlogManage'
import CommonsManage from '@/components/CommonsManage'

Vue.use(Router)

export default new Router({
  model:history,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/updateInfo',
      component: UpdateInfo
    },
    {
      path: '/public',
      component: PublicBlog
    },
    {
      path: '/blogs',
      component: ManageBlog
    },
    {
      path: '/commons',
      component: CommonsManage
    },
    {
      path: '/about',
      component: About
    }
  ]
})
