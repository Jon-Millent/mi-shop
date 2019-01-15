<template>
  <div class="app-init home-index">
    <header class="public-header">
      <form class="search-box clear">
        <div class="fl logo">
          <span class="iconfont icon-xiaomi"></span>
        </div>
        <div class="input-box" @click="$router.openPage('/search')">
          <span class="iconfont icon-sousuo-copy absolute"></span>
          <input type="text" class="input-controller" placeholder="搜索商品名称" readonly>
        </div>
        <div class="myself-center fr" @click="$router.openPage('/mine')">
          <span class="iconfont icon-smile"></span>
        </div>
      </form>

      <nav class="menu-box scroll-box-x noscroll">
        <ul class="wrap-box clear">
          <li class="item" :class="{ 'active' : index == navListActiveIndex }" v-for="(value, index) in navList" @click="navChange(index)">
            <span>{{value.name}}</span>
          </li>
        </ul>
      </nav>
    </header>




    <div ref="view01" class="app-init scroll-box tab-box mi-tj footer-hack" v-show="navListActiveIndex == 0">
      <swiper :list="bannerList"></swiper>
      <div class="nav-mi-tj clear">
        <a href="javascript:;" class="fl">
          <img @click="$router.openPage('/pay')" src="http://qiniu.verydog.cn//show.liluo.cc/2018011022292984819.png" alt="">
        </a>
        <a href="javascript:;" class="fl">
          <img @click="$router.openPage('/pay')" src="http://qiniu.verydog.cn//show.liluo.cc/2018011022292372054.png" alt="">
        </a>
        <a href="javascript:;" class="fl">
          <img @click="$router.openPage('/pay')" src="http://qiniu.verydog.cn//show.liluo.cc/2018011022291629252.png" alt="">
        </a>
        <a href="javascript:;" class="fl">
          <img @click="$router.openPage('/pay')" src="http://qiniu.verydog.cn//show.liluo.cc/2018011022290460400.png" alt="">
        </a>
      </div>

      <div class="shop-item clear">
        <img @click="$router.openPage('/detail/1001')" src="http://qiniu.verydog.cn//show.liluo.cc/2018011114551289342.png" class="fl href" alt="">
        <img @click="$router.openPage('/detail/1004')" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e2ad0dbf777fda097e55cea9ce716e33.jpg?thumb=1&w=358&h=252" class="fr href" style="margin-bottom: 0.05rem" alt="">
        <img @click="$router.openPage('/detail/1005')" src="http://qiniu.verydog.cn//show.liluo.cc/2018011114550596671.png" class="fr href" alt="">
      </div>

      <div class="shop-item clear">
        <img @click="$router.openPage('/detail/1003')"  v-lazy="'http://qiniu.verydog.cn//show.liluo.cc/a589d24e74c4d96191dd46635054e804.jpg'" alt="">
      </div>

      <div class="shop-item clear">
        <img @click="$router.openPage('/detail/1006')" v-lazy="'http://qiniu.verydog.cn//show.liluo.cc/2018011115034174111.png'" alt="">
      </div>

      <div class="shop-item clear">
        <img @click="$router.openPage('/detail/1007')" v-lazy="'http://qiniu.verydog.cn//show.liluo.cc/2018011115033089933.png'" alt="">
      </div>

      <div class="shop-item">
        <div class="shop-box clear">

          <div class="shop-box-item" v-for="target in shoplist" @click="$router.openPage(target.href)">
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

    <div ref="view02" class="app-init scroll-box tab-box footer-hack" v-show="navListActiveIndex == 1">
      <swiper :list="bannerList01"></swiper>

      <div class="shop-item">
        <img src="http://qiniu.verydog.cn//show.liluo.cc/2018011316464243450.png" alt="">
        <div class="shop-box clear">
          <div class="shop-box-item" v-for="target in shoplist01" @click="$router.openPage(target.href)">
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

    <div ref="view03" class="app-init scroll-box tab-box footer-hack" v-show="navListActiveIndex == 2">
      <swiper :list="bannerList02"></swiper>
      <div class="shop-item">
        <img src="http://qiniu.verydog.cn//show.liluo.cc/2018011316464243450.png" alt="">
        <div class="shop-box clear">
          <div class="shop-box-item" v-for="target in shoplist02" @click="$router.openPage(target.href)">
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

    <div ref="view04" class="app-init scroll-box tab-box footer-hack" v-show="navListActiveIndex == 3">
      <swiper :list="bannerList03"></swiper>
      <div class="shop-item">
        <img src="http://qiniu.verydog.cn//show.liluo.cc/2018011316464243450.png" alt="">
        <div class="shop-box clear">
          <div class="shop-box-item" v-for="target in shoplist03" @click="$router.openPage(target.href)">
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

    <div ref="view05" class="app-init scroll-box tab-box footer-hack" v-show="navListActiveIndex == 4">
      <swiper :list="bannerList04"></swiper>
      <div class="shop-item">
        <img src="http://qiniu.verydog.cn//show.liluo.cc/2018011316464243450.png" alt="">
        <div class="shop-box clear">
          <div class="shop-box-item" v-for="target in shoplist04" @click="$router.openPage(target.href)">
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

    <div ref="view06" class="app-init scroll-box tab-box footer-hack" v-show="navListActiveIndex == 5">
      <img v-lazy="'http://qiniu.verydog.cn//show.liluo.cc/2018011317010732422.png'" @click="$router.openPage('/detail/1003')" alt="">
      <img v-lazy="'http://qiniu.verydog.cn//show.liluo.cc/48ca6cfb19c45e7cbecbd8c34c757445.jpg'" alt="">
      <img v-lazy="'http://qiniu.verydog.cn//show.liluo.cc/2018011317012799998.png'" alt="">
      <img v-lazy="'http://qiniu.verydog.cn//show.liluo.cc/2018011317013522274.png'" alt="">
      <img v-lazy="'http://qiniu.verydog.cn//show.liluo.cc/2018011317005752430.png'" alt="">
      <img v-lazy="'http://qiniu.verydog.cn//show.liluo.cc/2018011317011947232.png'" alt="">
      <img v-lazy="'http://qiniu.verydog.cn//show.liluo.cc/2018011317014434073.png'" alt="">
    </div>

    <div ref="view07" class="app-init scroll-box tab-box footer-hack" v-show="navListActiveIndex == 6">
      <swiper :list="bannerList06"></swiper>
      <div class="shop-item">
        <img src="http://qiniu.verydog.cn//show.liluo.cc/2018011316464243450.png" alt="">
        <div class="shop-box clear">
          <div class="shop-box-item" v-for="target in shoplist06" @click="$router.openPage(target.href)">
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

    <div ref="view08" class="app-init scroll-box tab-box footer-hack" v-show="navListActiveIndex == 7">
      <swiper :list="bannerList07"></swiper>
      <div class="shop-item">
        <img src="http://qiniu.verydog.cn//show.liluo.cc/2018011316464243450.png" alt="">
        <div class="shop-box clear">
          <div class="shop-box-item" v-for="target in shoplist07" @click="$router.openPage(target.href)">
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

    <div ref="view09" class="app-init scroll-box tab-box footer-hack" v-show="navListActiveIndex == 8">
      <img v-lazy="'http://qiniu.verydog.cn//show.liluo.cc/2018011317154829739.png'" alt="">
      <img v-lazy="'http://qiniu.verydog.cn//show.liluo.cc/2018011317155627636.png'" alt="">
      <img v-lazy="'http://qiniu.verydog.cn//show.liluo.cc/2018011317160444789.png'" alt="">
      <img v-lazy="'http://qiniu.verydog.cn//show.liluo.cc/2018011317161351928.png'" alt="">
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import swiper from '../../components/swiper'
  import VueDB from '../../util/vue-db/vue-db'

  let DB = new VueDB()

  export default {
    data() {
      return {
        bannerList : [
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/01.png',
            href: '/detail/1001'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/02.jpg',
            href: '/detail/1002'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/03.jpg',
            href: '/detail/1003'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/04.jpg',
            href: '/detail/1004'
          }
        ],
        shoplist : [
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
            title: '米家感应灯',
            con: '举步之明，光明立现',
            money: 49,
            href: '/detail/1008'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
            title: '米家感应灯',
            con: '举步之明，光明立现',
            money: 49,
            href: '/detail/1008'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
            title: '米家感应灯',
            con: '举步之明，光明立现',
            money: 49,
            href: '/detail/1008'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
            title: '米家感应灯',
            con: '举步之明，光明立现',
            money: 49,
            href: '/detail/1008'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
            title: '米家感应灯',
            con: '举步之明，光明立现',
            money: 49,
            href: '/detail/1008'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
            title: '米家感应灯',
            con: '举步之明，光明立现',
            money: 49,
            href: '/detail/1008'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
            title: '米家感应灯',
            con: '举步之明，光明立现',
            money: 49,
            href: '/detail/1008'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
            title: '米家感应灯',
            con: '举步之明，光明立现',
            money: 49,
            href: '/detail/1008'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
            title: '米家感应灯',
            con: '举步之明，光明立现',
            money: 49,
            href: '/detail/1008'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
            title: '米家感应灯',
            con: '举步之明，光明立现',
            money: 49,
            href: '/detail/1008'
          }
        ],
        navList: [
          {
            name: '推荐'
          },
          {
            name: '手机'
          },
          {
            name: '智能'
          },
          {
            name: '电视'
          },
          {
            name: '电脑'
          },
          {
            name: '全面屏'
          },
          {
            name: '生活周边'
          },
          {
            name: '盒子'
          },
          {
            name: '艺术'
          }
        ],
        navListActiveIndex: 0,

        bannerList01 : [
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/1888a9f0a6ae807113cb428b9e01f5fe.jpg',
            href: '/detail/1007'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011213275295675.png',
            href: '/detail/1009'
          }
        ],
        shoplist01: [
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011213403719963.png',
            title: '红米Note 4X 32GB',
            con: '多彩金属 / 超长续航',
            money: 899,
            href: '/detail/1010'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011213403719963.png',
            title: '红米Note 4X 32GB',
            con: '多彩金属 / 超长续航',
            money: 899,
            href: '/detail/1010'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011213403719963.png',
            title: '红米Note 4X 32GB',
            con: '多彩金属 / 超长续航',
            money: 899,
            href: '/detail/1010'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011213403719963.png',
            title: '红米Note 4X 32GB',
            con: '多彩金属 / 超长续航',
            money: 899,
            href: '/detail/1010'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011213403719963.png',
            title: '红米Note 4X 32GB',
            con: '多彩金属 / 超长续航',
            money: 899,
            href: '/detail/1010'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011213403719963.png',
            title: '红米Note 4X 32GB',
            con: '多彩金属 / 超长续航',
            money: 899,
            href: '/detail/1010'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011213403719963.png',
            title: '红米Note 4X 32GB',
            con: '多彩金属 / 超长续航',
            money: 899,
            href: '/detail/1010'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011213403719963.png',
            title: '红米Note 4X 32GB',
            con: '多彩金属 / 超长续航',
            money: 899,
            href: '/detail/1010'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011213403719963.png',
            title: '红米Note 4X 32GB',
            con: '多彩金属 / 超长续航',
            money: 899,
            href: '/detail/1010'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011213403719963.png',
            title: '红米Note 4X 32GB',
            con: '多彩金属 / 超长续航',
            money: 899,
            href: '/detail/1010'
          }
        ],

        bannerList02 : [
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011213533255816.png',
            href: '/detail/1011'
          }
        ],
        shoplist02: [
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/93cc1fa15e0e9af87e37cba047d8186e.jpg',
            title: '米家四位四控插线板',
            con: '四位分控，随用随开',
            money: 89,
            href: '/detail/1012'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/93cc1fa15e0e9af87e37cba047d8186e.jpg',
            title: '米家四位四控插线板',
            con: '四位分控，随用随开',
            money: 89,
            href: '/detail/1012'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/93cc1fa15e0e9af87e37cba047d8186e.jpg',
            title: '米家四位四控插线板',
            con: '四位分控，随用随开',
            money: 89,
            href: '/detail/1012'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/93cc1fa15e0e9af87e37cba047d8186e.jpg',
            title: '米家四位四控插线板',
            con: '四位分控，随用随开',
            money: 89,
            href: '/detail/1012'
          }
        ],

        bannerList03: [
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/2bf70582edb45d83d7120a22c87200c9.jpg',
            href: '/detail/1013'
          }
        ],
        shoplist03: [
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011316504878837.png',
            title: '小米电视4A 43英寸',
            con: '全高清 HDR，64位处理器',
            money: 1999,
            href: '/detail/1004'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011316504878837.png',
            title: '小米电视4A 43英寸',
            con: '全高清 HDR，64位处理器',
            money: 1999,
            href: '/detail/1004'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011316504878837.png',
            title: '小米电视4A 43英寸',
            con: '全高清 HDR，64位处理器',
            money: 1999,
            href: '/detail/1004'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011316504878837.png',
            title: '小米电视4A 43英寸',
            con: '全高清 HDR，64位处理器',
            money: 1999,
            href: '/detail/1004'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011316504878837.png',
            title: '小米电视4A 43英寸',
            con: '全高清 HDR，64位处理器',
            money: 1999,
            href: '/detail/1004'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011316504878837.png',
            title: '小米电视4A 43英寸',
            con: '全高清 HDR，64位处理器',
            money: 1999,
            href: '/detail/1004'
          }
        ],

        bannerList04: [
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011316542272196.png',
            href: '/detail/1014'
          }
        ],
        shoplist04: [
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
            title: '13.3"笔记本i5 独显',
            con: '指纹解锁，全金属机身',
            money: 5199,
            href: '/detail/1014'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
            title: '13.3"笔记本i5 独显',
            con: '指纹解锁，全金属机身',
            money: 5199,
            href: '/detail/1014'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
            title: '13.3"笔记本i5 独显',
            con: '指纹解锁，全金属机身',
            money: 5199,
            href: '/detail/1014'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
            title: '13.3"笔记本i5 独显',
            con: '指纹解锁，全金属机身',
            money: 5199,
            href: '/detail/1014'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
            title: '13.3"笔记本i5 独显',
            con: '指纹解锁，全金属机身',
            money: 5199,
            href: '/detail/1014'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
            title: '13.3"笔记本i5 独显',
            con: '指纹解锁，全金属机身',
            money: 5199,
            href: '/detail/1014'
          }
        ],

        bannerList06: [
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011317083831934.png',
            href: '/detail/1015'
          }
        ],
        shoplist06: [
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011317083193859.png',
            title: '8H护颈乳胶枕 Z2',
            con: '多重新科技  升级好睡眠',
            money: 239,
            href: '/detail/1016'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011317083193859.png',
            title: '8H护颈乳胶枕 Z2',
            con: '多重新科技  升级好睡眠',
            money: 239,
            href: '/detail/1016'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011317083193859.png',
            title: '8H护颈乳胶枕 Z2',
            con: '多重新科技  升级好睡眠',
            money: 239,
            href: '/detail/1016'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011317083193859.png',
            title: '8H护颈乳胶枕 Z2',
            con: '多重新科技  升级好睡眠',
            money: 239,
            href: '/detail/1016'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011317083193859.png',
            title: '8H护颈乳胶枕 Z2',
            con: '多重新科技  升级好睡眠',
            money: 239,
            href: '/detail/1016'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011317083193859.png',
            title: '8H护颈乳胶枕 Z2',
            con: '多重新科技  升级好睡眠',
            money: 239,
            href: '/detail/1015'
          }
        ],

        bannerList07: [
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011317121511939.png',
            href: '/detail/1017'
          }
        ],
        shoplist07: [
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011317120865819.png',
            title: '小米影视会员卡',
            con: '畅享海量片库',
            money: 498,
            href: '/detail/1018'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011317120865819.png',
            title: '小米影视会员卡',
            con: '畅享海量片库',
            money: 498,
            href: '/detail/1018'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011317120865819.png',
            title: '小米影视会员卡',
            con: '畅享海量片库',
            money: 498,
            href: '/detail/1018'
          },
          {
            src: 'http://qiniu.verydog.cn//show.liluo.cc/2018011317120865819.png',
            title: '小米影视会员卡',
            con: '畅享海量片库',
            money: 498,
            href: '/detail/1018'
          }
        ]
      }
    },
    components: {
      swiper
    },
    mounted() {
      // 笨方法，设置N个盒子的scroll top

      this.navListActiveIndex = DB.getItemOnce('home-index-nowIndex').toNumber() || 0

      setTimeout(()=>{
        this.$refs.view01.scrollTop = DB.getItemOnce('home-index-view01').toNumber() || 0
        this.$refs.view02.scrollTop = DB.getItemOnce('home-index-view02').toNumber() || 0
        this.$refs.view03.scrollTop = DB.getItemOnce('home-index-view03').toNumber() || 0
        this.$refs.view04.scrollTop = DB.getItemOnce('home-index-view04').toNumber() || 0
        this.$refs.view05.scrollTop = DB.getItemOnce('home-index-view05').toNumber() || 0
        this.$refs.view06.scrollTop = DB.getItemOnce('home-index-view06').toNumber() || 0
        this.$refs.view07.scrollTop = DB.getItemOnce('home-index-view07').toNumber() || 0
      }, 10)


    },
    methods: {
      navChange(index) { // 导航栏切换
        this.navListActiveIndex = index;
      }
    },
    beforeRouteLeave (to, from, next) {
      DB.setItem('home-index-view01', this.$refs.view01.scrollTop)
      DB.setItem('home-index-view02', this.$refs.view02.scrollTop)
      DB.setItem('home-index-view03', this.$refs.view03.scrollTop)
      DB.setItem('home-index-view04', this.$refs.view04.scrollTop)
      DB.setItem('home-index-view05', this.$refs.view05.scrollTop)
      DB.setItem('home-index-view06', this.$refs.view06.scrollTop)
      DB.setItem('home-index-view07', this.$refs.view07.scrollTop)

      DB.setItem('home-index-nowIndex', this.navListActiveIndex)
      next();
    }
  }
</script>

<style type="text/sass" lang="sass">

  .home-index .tab-box
    top: 2.5rem
  .home-index .tab-box.mi-tj .nav-mi-tj a
      display: block
      width:  25%
  .home-index .shop-box
    background-color: #fff

</style>
