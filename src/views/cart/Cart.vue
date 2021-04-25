<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="nav-bar">
      <template v-slot:center
        ><h2>购物车({{ length }})</h2></template
      >
    </nav-bar>
    <!-- 商品列表 -->
    <scroll class="content" ref="scroll">
      <cart-list></cart-list>
    </scroll>
    <!-- 底部 -->
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import CartList from './childComps/CartList'
import Scroll from 'components/common/scroll/Scroll'
import NavBar from 'components/common/navbar/NavBar'
import CartBottomBar from './childComps/CartBottomBar'
import { mapGetters } from 'vuex'
export default {
  name: "Cart",
  components: {
    CartList,
    Scroll,
    CartBottomBar,
    NavBar
  },
  computed: {
    // 两种语法 mapGetters
    // ...mapGetters(['cartLength'])
    ...mapGetters({
      length: 'cartLength'
    })
  }, activated() {
    this.$refs.scroll.scroll.refresh()
  },
}
</script>

<style scoped>
.cart {
  height: 100%;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
.content {
  touch-action: none;
  height: calc(100vh - 49px - 44px - 40px);
  overflow: hidden;
}
</style>
