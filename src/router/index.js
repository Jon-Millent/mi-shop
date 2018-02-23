import Vue from 'vue'
import Router from 'vue-router'
import _ from 'lodash'

Router.prototype.openPage = function (link, query) {
  this.push({
    path: link,
    query: _.assignIn({
      time: new Date().getTime()
    }, query || {})
  })
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component(resolve){
        require(['@/views/home/index.vue'], resolve)
      }
    },
    {
      path: '/classification',
      name: 'classification',
      component(resolve){
        require(['@/views/classification/index.vue'], resolve)
      }
    },
    {
      path: '/shoppingcart',
      name: 'shoppingcart',
      component(resolve){
        require(['@/views/shoppingcart/index.vue'], resolve)
      }
    },
    {
      path: '/mine',
      name: 'mine',
      component(resolve){
        require(['@/views/mine/index.vue'], resolve)
      }
    },
    {
      path: '/search',
      name: 'search',
      component(resolve){
        require(['@/views/search/index.vue'], resolve)
      }
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component(resolve){
        require(['@/views/detail/index.vue'], resolve)
      }
    },
    {
      path: '/pay',
      name: 'pay',
      component(resolve){
        require(['@/views/pay/index.vue'], resolve)
      }
    },
    {
      path: '/error/404',
      name: 'error-404',
      component(resolve){
        require(['@/views/error/404.vue'], resolve)
      }
    },
    {
      path: '/error/110',
      name: 'error-110',
      component(resolve){
        require(['@/views/error/110.vue'], resolve)
      }
    }
  ]
})
