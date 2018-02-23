<template>
  <div>

    <div class="loading-bar" :class="nowStatus">
      <span class="press"></span>
    </div>

    <div class="app-init">
      <transition :name="transitionName">
        <router-view></router-view>
      </transition>
    </div>


    <footer class="footer clear" :class="{ 'leave': leaveComp }">
      <div class="footer-item" :class="{ 'active': isActive('home') }" @click="open('/home')">
        <p class="icon">
          <span class="iconfont icon-shouye"></span>
        </p>
        <p class="name">首页</p>
      </div>

      <div class="footer-item" :class="{ 'active': isActive('classification') }" @click="open('/classification')">
        <p class="icon">
          <span class="iconfont icon-fenlei"></span>
        </p>
        <p class="name">分类</p>
      </div>

      <div class="footer-item shop-car" :class="{ 'active': isActive('shoppingcart') }" @click="open('/shoppingcart')">
        <p class="icon">
          <span class="iconfont icon-gouwuche"></span>
        </p>
        <p class="name">购物车</p>
        <span class="num" v-show="getShopCarLength > 0" :class="{ 'full': parseInt(getShopCarLength) >= 99 }" >{{ getShopCarLength >= 99 ? '99+' : getShopCarLength }}</span>
      </div>

      <div class="footer-item" :class="{ 'active': isActive('mine') }" @click="open('/mine')">
        <p class="icon">
          <span class="iconfont icon-smile"></span>
        </p>
        <p class="name">我的</p>
      </div>
    </footer>

  </div>


</template>

<script>
  import Rem from '@/assets/js/rem'
  import { mapGetters } from 'vuex'

  new Rem();

  export default {
    name: 'app',
    data () {
      return {
        transitionName : 'slide-go',
        nowUrl: '/'
      }
    },
    watch: {
      '$route' (to, from) {

        if (from.query.time) {
          if (to.query.time > from.query.time) {
            this.transitionName = 'slide-go'
          } else {
            this.transitionName = 'slide-back'
          }
        } else {
          this.transitionName = 'slide-go'
        }

        this.nowUrl = to.fullPath
      }
    },
    computed: {
      ...mapGetters([
        'nowStatus',
        'getShopCarLength'
      ]),
      leaveComp() {
        var resout = true;
        var base = ['home', 'classification', 'shoppingcart', 'mine'];


        for(var i=0; i<base.length; i++){
          if(this.isActive(base[i])){
            resout = false;
          }
        }
        if(this.isActive('shoppingcart') && this.getShopCarLength > 0){
          resout = true;
        }
        return resout;
      }
    },
    methods: {
      open(link) {
        this.$router.openPage(link)
      },
      isActive(name) {
        return this.nowUrl.indexOf(name) != -1
      }
    }
  }
</script>



<style lang="sass" type="text/sass">
  @import "./assets/sass/public"
  @import './assets/font/iconfont.css'




</style>
