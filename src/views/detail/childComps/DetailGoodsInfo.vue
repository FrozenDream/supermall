<template>
  <div class="goods-info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="info-desc">
      <div class="desc">{{ detailInfo.desc }}</div>
    </div>
    <div class="info-key">{{ detailInfo.detailImage[0].key }}</div>
    <div class="info-list">
      <img
        v-for="(item, index) in detailInfo.detailImage[0].list"
        :src="item"
        :key="index"
        alt=""
        @load="imgLoad"
      />
    </div>
  </div>
</template>

<script>

export default {
  name: 'DetailGoodsInfo',
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }, data() {
    return {
      counter: 0,
      imagesLength: 0
    }
  },
  methods: {
    imgLoad() {
      // 判断 所有图片加载完了，那么进行一次回调就可以了
      if (++this.counter === this.imagesLength) {
        this.$emit('imageLoad')
      }
    }
  },
  watch: {
    detailInfo() {
      this.imagesLength = this.detailInfo.detailImage[0].list.length
    }
  }
}

</script>

<style scoped>
.goods-info {
  padding: 20px 10px;
}
.info-desc .desc {
  font-size: 16px;
  line-height: 1.7;
}
.info-key {
  margin: 15px 0;
  font-size: 18px;
}
.info-list img {
  display: block;
  margin-bottom: 10px;
  width: 100%;
}
</style>
