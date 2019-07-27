import Vue from 'vue'
import Router from 'vue-router'
//import Home from './views/Home.vue'

Vue.use(Router)

import Home from "./components/home/Home.vue"

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
     path:'/city',
     name:'city',
     component:()=>import ('./components/city/City')
    },
    {
      path: '/detail',
      name: 'detail',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>import ('./components/detail/Detail')
    }
  ]
})
