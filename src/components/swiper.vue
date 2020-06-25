<template>
  <div class="mi-swiper">
    <swiper ref="mySwiper" :options="config">
      <swiper-slide v-for="(x, index) in list" :key="index">
        <a href="javascript:;" @click="x.href ? $router.openPage(x.href) : ''"><img :src="x.src" :alt="x.alt || 'img'+index"></a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script type="text/ecmascript-6">


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
            autoplay: {
              delay: 4000,
              disableOnInteraction: false,
            },
            observer: true,
            observeParents: true,
            pagination: {
              el: '.swiper-pagination',
            },
            loop : true,
          }
        }
      }
    },
    data() {
      return {

      }
    },
    mounted() {

    },
    watch: {

    }
  }
</script>

<style type="text/css">
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
