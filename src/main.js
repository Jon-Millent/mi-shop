// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import VueLazyload from 'vue-lazyload'

import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper)

Vue.use(VueLazyload)

// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '',
  loading: '',
  attempt: 1
})

console.log('❤❤❤ 本程序由 jon-millent 编写， github@ github.com/jon-millent ❤❤❤')

router.beforeEach((to, from, next)=>{

  store.commit('nowStatus', 'loading')
  next();

})

router.afterEach(()=>{
  store.commit('nowStatus', 'end')

  setTimeout(()=>{
    store.commit('nowStatus', 'hide')
  }, 900)

  setTimeout(()=>{
    store.commit('nowStatus', 'normal')
  }, 1000)

})

Vue.config.productionTip = false

// hack for active mobile
document.addEventListener("touchstart", function(){}, true)

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
