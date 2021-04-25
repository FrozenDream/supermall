<template>
  <div id="detail">
    <detail-nav-bar @titleClick="titleClick" ref="nav"></detail-nav-bar>
    <scroll
      class="content"
      ref="scroll"
      @scroll="contentScroll"
      :probe-type="3"
    >
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info
        :detail-info="detailInfo"
        @imageLoad="imageLoad"
      ></detail-goods-info>
      <detail-param-info
        ref="params"
        :params-info="paramsInfo"
      ></detail-param-info>
      <detail-comment-info
        ref="comment"
        :comment-info="commentInfo"
      ></detail-comment-info>
      <goods-list
        ref="recommend"
        :goods="recommends"
        :key="recommends"
      ></goods-list>
    </scroll>
    <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBottomBar from './childComps/DetailBottomBar'


import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'

import { debounce } from 'common/utils'
import { backTopMixin } from 'common/mixin'
import { getDetail, Goods, Shop, GoodsParam, getRecommend } from 'network/detail'


export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    Scroll,
    GoodsList,
  },
  mixins: [backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramsInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      getThemeTopy: null,
      currentIndex: 0,
      // message: '',
      // isShow: false
    }
  },
  created() {
    // 保存传入的iid
    this.iid = this.$route.params.iid
    // 根据iid请求详情页数据
    getDetail(this.iid).then(res => {
      const data = res.result
      this.topImages = data.itemInfo.topImages
      // 获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      // 获取店铺信息
      this.shop = new Shop(data.shopInfo)
      // 获取商品详情信息
      this.detailInfo = data.detailInfo
      // 获取参数信息
      this.paramsInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      // 获取评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0]
      }
      // 详情页点击图片跳转对应内容
      // 防抖函数
      this.getThemeTopy = debounce(() => {
        this.themeTopYs = []
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.params.$el.offsetTop - 44)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop - 70)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop - 65)
        this.themeTopYs.push(Number.MAX_VALUE)
      })

    })
    // 请求推荐数据
    getRecommend().then(res => {
      this.recommends = res.data.list
    })

  },
  methods: {
    contentScroll(position) {
      // 判断backTop是否显示
      this.isShowBackTop = (-position.y) > 1000
      // 获取y值
      const positionY = -position.y
      // 滚动内容显示对应标题 positionY和主题中的值进行对比
      // 数组索引中的[0,1,2,3,Number.MAX_VALUE]
      // positionY在0 - 1之间 标题的 index 为0
      // positionY在1 - 2之间 标题的 index 为1
      // positionY在2 - 3之间 标题的 index 为2
      // positionY在3 - 非常大的值之后 标题的 index 为3

      // positionY在大于3之后 标题的 index 为3
      let length = this.themeTopYs.length
      for (let i = 0; i < length - 1; i++) {
        // if (positionY > this.themeTopYs[i] && positionY < this.themeTopYs[i + 1]) {
        //   console.log(i);
        // }
        if (this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1])) {
          this.currentIndex = i
          this.$refs.nav.currentIndex = this.currentIndex
        }
        // if (this.currentIndex !== i && ((i < length - 1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1]) || (
        //   i === length - 1 && positionY >= this.themeTopYs[i]))) {
        //   this.currentIndex = i
        //   this.$refs.nav.currentIndex = this.currentIndex
        // }
      }
    },
    imageLoad() {
      this.$refs.scroll.scroll.refresh()
      this.getThemeTopy()
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 1000)
    },
    addToCart() {
      // 获取需要在购物车展示的信息
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid
      // 将商品添加到购物车里面
      // 传给mutations
      // this.$store.commit('addCart', product)
      // 传给action
      // 将商品添加到购物车后 返回信息.要现在action 使用promise里面完成操作再返回信息
      // 另一种方式需要 使用 导入mapActions  ...mapActions(['addCart']) 映射actions里面的关系
      // this.addCart(product).then(res => {
      //   console.log(res);
      // })
      this.$store.dispatch('addCart', product).then(res => {

        console.log(res);
      })

    }
  },
}

</script>

<style scoped>
#detail {
  /* height: 100vh; */
  position: relative;
  z-index: 1;
  background-color: #fff;
}
.content {
  /* touch-action: none; */
  height: calc(100vh - 44px - 49px);
  overflow: hidden;
}
</style>
