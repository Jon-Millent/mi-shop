<template>
  <div class="app-init gouwuche-page">
    <header-back title="购物车"></header-back>

    <div class="scroll-box gouwu-view">

      <div class="shop-wrap" v-if="shopCarListLength == 0">
        <img src="../../assets/icon/empty-car.png" alt="" @click="$router.openPage('/')">
      </div>

      <div class="shop-wrap shop-list-wrap" v-else>
        <div class="shop-item clear" v-for="(target, index) in shopCarList" :key="index">
          <div class="shop-img fl" @click="$router.openPage(target.link)">
            <img :src="target.img" alt="">
          </div>
          <div class="function-box fr">
            <p class="title">{{ target.title }}</p>
            <p class="money">售价：{{ target.money }}元</p>
            <div class="button-group">
              <div class="function-button">
                <span class="btn jia iconfont icon-jia" @click="jia(target)"></span>
                <span class="number">{{ target.length }}</span>
                <span class="btn jian iconfont icon-jian" @click="jian(target)"></span>
              </div>

              <span class="delete iconfont icon-del" @click="deleteShop(target)"></span>
            </div>
          </div>
        </div>

      </div>

      <div class="gass-you-like">
        <img src="http://qiniu.verydog.cn//show.liluo.cc/e95ade2750a7fde92369b416c7d3176d.jpg" alt="">
      </div>
      <div class="shop-item">
        <div class="shop-box clear">

          <div class="shop-box-item" v-for="(target, index) in shoplist" :key="index" @click="$router.openPage(target.href)">
            <img v-lazy="target.src" alt="">
            <p class="title">{{ target.title }}</p>
            <p class="con">{{ target.con }}</p>
            <p class="money">
              <span class="small">￥</span> {{ target.money }}
            </p>
          </div>

        </div>
      </div>
    </div>

    <div class="shopcar-footer" v-show="shopCarListLength>0">
      <div class="item money">
        <p>共{{ shopCarListLength }}件 <span>金额</span></p>
        <p> <span class="mm">{{ getAllMoney }}</span> 元 </p>
      </div>
      <div class="item continue" @click="$router.openPage('/')">继续购物</div>
      <div class="item pay" @click="$router.openPage('/pay')">去结算</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import headerBack from '../../components/header-back'
  import ShopCarTool from '../../util/shop-car-tool/index'

  export default{
    name: 'shop-car',
    components: {
      headerBack
    },
    data() {
      return {
        shoplist : [
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
            title: '13.3"笔记本i5 独显',
            con: '指纹解锁，全金属机身',
            money: 5199,
            href: '/detail/1006'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
            title: '13.3"笔记本i5 独显',
            con: '指纹解锁，全金属机身',
            money: 5199,
            href: '/detail/1006'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
            title: '13.3"笔记本i5 独显',
            con: '指纹解锁，全金属机身',
            money: 5199,
            href: '/detail/1006'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
            title: '13.3"笔记本i5 独显',
            con: '指纹解锁，全金属机身',
            money: 5199,
            href: '/detail/1006'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
            title: '13.3"笔记本i5 独显',
            con: '指纹解锁，全金属机身',
            money: 5199,
            href: '/detail/1006'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
            title: '13.3"笔记本i5 独显',
            con: '指纹解锁，全金属机身',
            money: 5199,
            href: '/detail/1006'
          }
        ],

        shopCarList: {}
      }
    },
    mounted() {
      this.shopCar = new ShopCarTool(this.$store)
      this.shopCarList = this.shopCar.getAll()
    },
    computed: {
      shopCarListLength() {
        var n = 0;
        for(var i in this.shopCarList){
          n += this.shopCarList[i].length
        }
        return n
      },
      getAllMoney(){
        var n = 0;
        for(var i in this.shopCarList){
          n += this.shopCarList[i].money * this.shopCarList[i].length
        }
        return n
      }
    },
    methods: {
      jia(target) {
        this.shopCar.add(target)
      },
      jian(target) {
        this.shopCar.minus(target)
      },
      deleteShop(target){
        this.shopCar.remove(target.id)
        this.shopCarList = this.shopCar.getAll()
      }
    }
  }
</script>

<style type="text/sass" lang="sass">
  @import "../../assets/sass/util"
  .gouwuche-page
    .gouwu-view
      position: absolute
      width: 100%
      left: 0
      background-color: #fff
      top: $backHeaderHeight
      bottom: $footerHeight
    .shop-list-wrap
      padding: getIphonese(20px) 0
      .shop-item
        padding: 0 0.4rem
        margin-bottom: 0.4rem
        border-bottom: 1px solid #eee
        padding-bottom: 0.4rem
      .shop-img
        width: getIphonese(178px)
        height: getIphonese(178px)
        border-radius: 4px
        border: 1px solid #eeeeee
        img
          width: 100%
          height: 100%
      .function-box
        width: getIphonese(380px)
        height: getIphonese(178px)
        .title
          color: #717171
        .money
          color: #999999
          @include f12px
          padding-top: getIphonese(10px)
          padding-bottom: getIphonese(10px)
        .button-group
          position: relative
        .function-button
          width: getIphonese(160px)
          height: getIphonese(52px)
          border: 1px solid #eeeeee
          line-height: getIphonese(52px)
          position: relative
          text-align: center
          line-height: getIphonese(52px)
          .btn
            position: absolute
            width: getIphonese(52px)
            height: getIphonese(52px)
            background-color: #fafafa
            text-align: center
            color: #666666
            top: 0
            .iconfont
              color: #C3C3C3
          .jia
            right: 0px
          .jian
            left: 0px
        .delete
          display: inline-block
          position: absolute
          right: 0
          top: 0
          line-height: getIphonese(52px)
          font-size: 0.56rem
          color: #C3C3C3
    .shopcar-footer
      position: absolute
      height: $footerHeight+0.01rem
      width: 100%
      left: 0px
      bottom: 0
      .item
        width: 33.33%
        float: left
        text-align: center
        height: $footerHeight+0.01rem
        line-height: $footerHeight+0.01rem
        @include f12px
      .money
        background-color: #ffffff
        color: #9a9a9a
        line-height: normal
        height: $footerHeight+0.01rem
        @include box-sizing
        padding-top: 0.2rem
        .mm
          font-size: 0.48rem
          color: #ff5722
          font-weight: bold
      .continue
        background-color: #f4f4f4
        color: #333
      .pay
        background-color: #ff6700
        color: #fff
</style>
