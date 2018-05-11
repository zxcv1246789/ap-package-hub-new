import Vue from 'vue'
import Router from 'vue-router'
import Navigation from '@/components/Navigation'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/table',
      name: 'table',
      component: Navigation
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
