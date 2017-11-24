import Vue from 'vue'
import Router from 'vue-router'

import Film from './film'

const Index = r => require.ensure([], () => r(require('@/views/Layout/index')), 'Index')

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    Film
  ]
})
