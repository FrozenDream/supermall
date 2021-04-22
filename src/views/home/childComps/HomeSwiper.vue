<template>
  <swiper>
    <swiper-item
      v-for="(item, index) in banners"
      :key="item.title"
      class="swiper"
    >
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper'
export default {
  name: 'HomeSwiper',
  components: {
    Swiper, SwiperItem
  },
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      isLoad: false
    }
  },
  methods: {
    imageLoad() {
      // 只执行一次 data 定义变量isLoad 加个if
      if (!this.isLoad) {
        this.$emit('swiperImageLoad')
        this.isLoad = true
      }

    }
  },
}

</script>

<style scoped>
.swiper img {
  width: 100%;
}
</style>
