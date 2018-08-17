import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// 导入页面
const Index = r => require.ensure([], () => r(require('@/page/index/index')), 'index')
const IndexPage = r => require.ensure([], () => r(require('@/page/todo/indexPage')), 'indexPage')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/indexPage',
      name: 'IndexPage',
      component: IndexPage
    }
  ]
})
