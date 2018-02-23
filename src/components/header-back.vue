<template>
  <div class="header-back" :class="{ 'active': active }">
    <p>{{ title }}</p>
    <span class="iconfont icon-backer myicon back" @click="$router.go(-1)"></span>
    <span class="iconfont icon-sousuo-copy myicon search" @click="$router.openPage('/search')"></span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: 'header-back',
    props: {
      title: {
        type: String,
        default: '标题'
      }
    },
    data() {
      return {
        active: false
      }
    },
    mounted() {
      setTimeout(()=>{
        this.active = true;
      }, 10)
    }
  }
</script>

<style type="text/sass" lang="sass">
  @import '../assets/sass/util'
  .header-back.active
    transform: translateY(0%)
  .header-back
    line-height: getIphonese(42px)
    padding: getIphonese(30px) 0
    background-color: #f2f2f2
    @include ani01-transform
    transform: translateY(-100%)

    @include f14px
    color: #666666
    text-align: center
    position: relative
    .myicon
      position: absolute
      width: getIphonese(88px)
      line-height: getIphonese(42px)
      top: getIphonese(30px)
      color: #919191
      font-size: 0.58rem

    .back
      left: 0
    .search
      right: 0
</style>
