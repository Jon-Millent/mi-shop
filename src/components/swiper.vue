<template>
  <div class="swiper-container vue-swiper" ref="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(x, index) in list" :key="index">
        <a href="javascript:;" @click="x.href ? $router.openPage(x.href) : ''"><img :src="x.src" :alt="x.alt || 'img'+index"></a>
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination" ref="pagination"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from '../assets/swiper/swiper-3.4.2.min'
  import _ from 'lodash'

  var myswiper = null;

  export default{
    props: {
      list: {
        type: Array,
        default: function () {
          return []
        }
      },
      config: {
        type: Object,
        default: function () {
          return {
            autoplay: 60000,
            observer: true,
            observeParents: true,
            autoplayDisableOnInteraction: false
          }
        }
      }
    },
    data() {
      return {

      }
    },
    mounted() {
      myswiper = new Swiper (this.$refs.swiper, _.assign({
        pagination: this.$refs.pagination
      }, this.config))
    },
    watch: {
      list(){
        setTimeout(function () {
          myswiper.update();
        }, 10)
      }
    }
  }
</script>

<style type="text/css">
  @import "../assets/swiper/swiper-3.4.2.min.css";
  .swiper-container img{
    width: 100%;
  }

  .vue-swiper .swiper-pagination-bullet{
    background-color: #fff;
  }
  .vue-swiper .swiper-pagination-white .swiper-pagination-bullet-active{
    background-color: #fff;
  }
</style>
