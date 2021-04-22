<template>
  <div class="goods-item" @click="itemClick">
    <img :src="showImage" alt="" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect iconfont">&#xe8b9;{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  methods: {
    itemClick() {
      this.$router.push('/detail/' + this.goodsItem.iid)
    }
  },
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    },
  },

}

</script>

<style scoped>
.goods-item {
  width: 48%;
  margin-right: 2px;
  font-size: 14px;
}
.goods-item img {
  width: 100%;
  border-radius: 10px;
}
.goods-info {
  padding-top: 5px;
  text-align: center;
  height: 44px;
}
.goods-info p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 5px;
}
</style>
