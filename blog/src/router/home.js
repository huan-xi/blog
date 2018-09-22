import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import UpdateInfo from '@/components/UpdateInfo'

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
      path: '/about',
      component: About
    }
  ]
})
