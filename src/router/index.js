import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import PostShow from '@/components/posts/Show'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/posts/:id/:slug',
      name: 'PostShow',
      component: PostShow,
      props: true
    }
  ]
})
