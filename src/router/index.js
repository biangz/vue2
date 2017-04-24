import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
// import Tag from '@/components/Tag'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Hello',
    component: Hello
  }]
})
