<template>
  <div class="app-init pay-page scroll-box">
    <header-back title="关于"></header-back>

    <div class="padding-box">
      <p>商城 功能, 布局 由本人实现，图片来源界面布局排版均防自 <span class="color">小米商城 m.mi.com</span></p>
      <br>
      <p>联系我</p>
      <p>e-mail: millent@126.com</p>
      <p>github: github.com/jon-millent</p>
      <p>website: http://verydog.cn</p>

      <br>
      <p>Update on 2019/01/15</p>

    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import headerBack from '../../components/header-back'

  export default{
    name: 'pay',
    components: {
      headerBack
    }
  }
</script>

<style type="text/sass" lang="sass">
  .pay-page
    background-color: #fff
    .padding-box
      padding: 0.4rem
      color: #333
      .color
        color: orange
      ul
        padding-left: 0.8rem
      li
        list-style: disc
</style>
