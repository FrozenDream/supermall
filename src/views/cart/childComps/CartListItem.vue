<template>
  <div class="cart-item">
    <div class="item-check">
      <check-button
        :is-checked="itemInfo.checked"
        @click.native="checkClick"
      ></check-button>
    </div>
    <div class="cart-img">
      <img :src="itemInfo.image" alt="商品图片" />
    </div>
    <div class="item-info">
      <div class="item-title">{{ itemInfo.title }}</div>
      <div class="item-desc">{{ itemInfo.desc }}</div>
    </div>
    <div class="item-bottom">
      <div class="item-price">￥{{ itemInfo.price }}</div>
      <div class="item-count">x{{ itemInfo.count }}</div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
export default {
  name: 'CartListItem',
  components: {
    CheckButton
  },
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    checkClick() {
      this.itemInfo.checked = !this.itemInfo.checked
    }
  },
}

</script>

<style scoped>
.cart-item {
  display: flex;
  position: relative;
  width: 100%;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.item-check {
  margin-top: 55px;
}
.cart-img {
  padding: 5px;
}
.cart-img img {
  display: block;
  width: 80px;
  /* height: 100px; */
  background-size: cover;
  border-radius: 5px;
}

.item-info {
  font-size: 16px;
  padding: 5px 10px;
  overflow: hidden;
  /* position: relative; */
}
.item-desc,
.item-title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-top: 10px;
}
.item-price {
  color: orangered;
}
.item-bottom {
  position: absolute;
  bottom: 10px;
  left: 115px;
  display: flex;
}
.item-bottom .item-count {
  margin-left: 160px;
}
</style>
