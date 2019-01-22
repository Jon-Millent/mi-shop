<template>
  <div class="app-init detail-page">

    <div class="app-init scroll-box footer-hack">
      <div class="banner">
        <swiper :list="info.banner"></swiper>
        <span class="back iconfont icon-backer" @click="$router.back()"></span>
      </div>

      <div class="content">
        <div class="hot">
          <img :src="info.hot" @click="$router.openPage(info.hotLink)" alt="">
        </div>
        <div class="title-box">
          <h3>{{ info.title }}</h3>
          <p style="color:#ff4a00">{{ info.bigContent }}</p>
          <p style="color: #757575"> {{ info.smallContent }} </p>

          <div class="press">
            <span class="money" v-if="info.money">￥{{ info.money }}</span>
            <span class="no-money" v-if="info.noMoney">￥{{ info.noMoney }}</span>
            <span class="tips" v-for="(target, index) in info.tips" :key="index">{{ target }}</span>
          </div>
        </div>

        <div class="touch-item-box">
          <div class="touch-item">
            <span class="key">已选</span>
            {{ info.chouse }}
          </div>
          <div class="touch-item">
            <span class="key">送至</span>
            <span v-for="(target, index) in info.address" :key="index">{{ target }}</span>
          </div>
        </div>

        <div class="touch-item-box">
          <div class="touch-item">
            <span class="key">配件</span>
          </div>
        </div>

        <div class="p-box">
          <img v-for="(target, index) in info.pBox" :key="index" v-lazy="target" alt="">
        </div>

      </div>
    </div>

    <div class="detail-footer">
      <div class="left-box fl">
        <div class="item" @click="$router.openPage('/')">
          <p>
            <span class="iconfont icon-shouye"></span>
          </p>
          <p class="name">首页</p>
        </div>
        <div class="item cursom-shopcar" @click="$router.openPage('/shoppingcart')">
          <p>
            <span class="iconfont icon-gouwuche"></span>
          </p>
          <p class="name">购物车</p>

          <span class="num" v-show="getShopCarLength > 0" :class="{ 'full': parseInt(getShopCarLength) >= 99 }">{{ parseInt(getShopCarLength) >= 99 ? '99+' : getShopCarLength }}</span>
        </div>
      </div>
      <div class="right-box shop-car fl" @click="addShopCar">
        加入购物车
        <span class="bool bool-animate" ref="bool"></span>
      </div>
    </div>


    <div class="loading-box" :class="{ 'active' : loaded }" v-show="hide">

      <span class="load-ani iconfont icon-jiazai"></span>

    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import swiper from '../../components/swiper'
  import axios from 'axios'
  import Parabola from '../../util/parabola/index'
  import { mapGetters } from 'vuex'
  import ShopCarTool from '../../util/shop-car-tool'



  export default{
    name: 'detail',
    data() {
      return {
        info: {},
        loaded: false,
        hide: true
      }
    },
    watch:{
      $route () {
        this.getData();
      }
    },
    components: {
      swiper
    },
    computed: {
      ...mapGetters([
        'getShopCarLength'
      ])
    },
    methods: {
      getData() {
        this.loaded = false;
        this.hide = true;

        var id = this.$router.currentRoute.params.id;

        if(!id){
          this.$router.replace('/error/404')
        }
        axios.get('./server/'+id+'.json')
          .then(response=> {

            this.info = response.data;
            this.loaded = true;
            setTimeout(()=>{
              this.hide = false
            }, 1000)
          })
          .catch(()=> {
            this.$router.replace('/error/404')
          });
      },
      addShopCar() {

        var root = this
        var width = document.documentElement.clientWidth || document.body.clientWidth
        root.$refs.bool.style.display = 'block'

        var parabola = new Parabola({
          startPos: {
            left: root.$refs.bool.offsetLeft,
            top: root.$refs.bool.offsetTop
          },
          endPos: {
            left: root.$refs.bool.offsetLeft - (4.1 * width / 10),
            top: root.$refs.bool.offsetTop
          },
          duration: 300,
          onStep (pos) {
            var position = 'translate3d('+(pos.left - root.$refs.bool.offsetLeft)+'px,'+(pos.top - root.$refs.bool.offsetTop)+'px, 0px)'

            root.$refs.bool.style.webKitTransform = position
            root.$refs.bool.style.transform = position
          },
          onFinish () {
            root.$refs.bool.style.display = 'none'
            root.shopCar.add( root.info )
          }
        });

        parabola.start();
      }
    },
    mounted() {
      this.shopCar = new ShopCarTool(this.$store)
      this.getData();
    }
  }
</script>

<style type="text/sass" lang="sass">
  @import '../../assets/sass/util'
  .detail-page
    @keyframes ani01
      0%
        transform: rotate(0deg)
      100%
        transform: rotate(360deg)
    @-webkit-keyframes ani01
      0%
        -webkit-transform: rotate(0deg)
      100%
        -webkit-transform: rotate(360deg)

    .banner
      position: relative
      .back
        position: absolute
        z-index: 1000
        width: 0.826rem
        height: 0.826rem
        border-radius: 50%
        color: #fff
        line-height: 0.826rem
        text-align: center
        display: block
        background-color: rgba(34, 35, 43, .6)
        top: 0.32rem
        left: 0.32rem
    .title-box
      background-color: #fff
      margin-bottom: 0.2rem
      padding: 0.2rem 0.4rem
      @include f12px
      h3
        font-size: .5rem
        line-height: 1.5em
        font-weight: normal
        color: #333
      p
        padding-top: 0.1rem
      .press
        padding-top: 0.2rem
        .money
          color: #ff6700
          font-size: .56rem
          font-weight: 700
        .no-money
          margin-left: .16rem
          color: rgba(0,0,0,.54)
          text-decoration: line-through
        .tips
          display: inline-block
          line-height: 1em
          padding: .2em
          color: #fff
          font-size: 0.3rem
          background: #ff6700
          margin-left: 0.2rem
          border-radius: 2px
          position: relative
          top: -0.05rem
    .detail-footer
      bottom: 0px
      height: $footerHeight
      background-color: #FFFFFF
      position: absolute
      width: 100%
      -webkit-box-shadow: 0 3px 14px 2px rgba(0,0,0,.12)
      box-shadow: 0 3px 14px 2px rgba(0,0,0,.12)
    .detail-footer .left-box
      width: 40%
      height: $footerHeight
      text-align: center
      .item
        @include box-sizing
        width: 50%
        float: left
        border-right: 1px solid #F5F5F5
        height: $footerHeight - 0.2rem
        margin-top: 0.1rem
        color: rgba(0,0,0,.54)
        font-size: 0.32rem
      .item .iconfont
        font-size: 0.56rem
        display: inline-block
        padding-top: 0.08rem
        padding-bottom: 0.05rem
      .cursom-shopcar
        position: relative

        .num
          position: absolute
          width: 0.5rem
          height: 0.5rem
          border-radius: 50%
          line-height: 0.5rem
          text-align: center
          background-color: #f95c52
          color: #fff
          right: 0.1rem
          top: 0px
        .full
          font-size: 0.3rem

    .detail-footer .right-box
      height: $footerHeight
      line-height: $footerHeight
      text-align: center
      color: #fff
      background-color: #FF6700
      width: 60%

    .loading-box
      position: absolute
      left: 0px
      top: 0px
      right: 0px
      bottom: 0px
      background-color: #000
      opacity: 0.6
      z-index: 999
      transition: all .4s ease
      .load-ani
        display: block
        position: absolute
        width: 4rem
        height: 4rem
        line-height: 4rem
        text-align: center
        color: #fff9f8
        font-size: 2rem
        top: 50%
        margin-left: -2rem
        margin-top: -2rem
        border-radius: 50%
        left: 50%
        -webkit-transform: scale(0)
        transform: scale(0)
        -webkit-animation: ani01 1s ease infinite
        animation: ani01 1s ease infinite

    .loading-box.active
      opacity: 0

    .shop-car
      position: relative
      .bool
        position: absolute
        display: block
        width: 0.4rem
        height: 0.4rem
        background-color: #F2F2F2
        left: 50%
        top: 50%
        margin-left: -0.2rem
        margin-top: -0.2rem
        border-radius: 50%
        display: none
</style>
