<template>
  <div class="app-init pay-page scroll-box">
    <header-back title="关于"></header-back>

    <div class="padding-box">
      <p>本商城是由 jon-millent 为面试而做的作品</p>
      <br>
      <p>商城 功能, 布局 由本人实现，图片来源界面布局排版均防自 <span class="color">小米商城 m.mi.com</span></p>
      <p>商城后续时间会开源到github</p>
      <br>
      <p>商城所用的到技术</p>
      <ul>
        <li>vue-cli</li>
        <li>vue 2.5.2</li>
        <li>vue-router 3.0.1</li>
        <li>vuex 3.0.1</li>
        <li>axios 0.17.1</li>
        <li>sass</li>
        <li>lodash</li>
      </ul>

      <br>
      <p>联系我</p>
      <p>e-mail: millent@126.com</p>
      <p>github: github.com/jon-millent</p>
      <p>website: liluo.cc</p>

      <br>
      <p>Create on 2018/01/22</p>

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
