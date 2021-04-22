<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" alt="" />
      <span class="title">{{ shop.name }}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">
            {{ sellCountFilter }}
          </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">
            {{ shop.goodsCount }}
          </div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{ item.name }}</td>
            <td class="score" :class="{ 'score-better': item.isBetter }">
              {{ item.score }}
            </td>
            <td class="better" :class="{ 'better-more': item.isBetter }">
              <span>{{ item.isBetter ? "高" : "低" }}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shop: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    sellCountFilter() {
      if (this.shop.sells < 10000) return this.shop.sells
      return (this.shop.sells / 10000).toFixed(1) + '万'
    }
  }
}

</script>

<style scoped>
.shop-info {
  padding: 25px 8px;
  border-bottom: 5px solid #ccc;
}
.shop-top {
  line-height: 45px;
  display: flex;
  align-items: center;
}
.shop-top img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.shop-top .title {
  margin-left: 10px;
  vertical-align: center;
}
.shop-middle {
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.shop-middle::after {
  content: "";
  position: absolute;
  top: 10%;
  left: 50%;
  height: 80%;
  content: "";
  border-left: 1px solid #ccc;
}
.shop-middle-left {
  margin-top: 5px;
}
.shop-middle-left {
  margin-top: 20px;
}
.info-sells,
.info-goods {
  display: inline-block;
  margin: 0 10px;
  text-align: center;
}
.sells-count,
.goods-count {
  margin-bottom: 10px;
  font-size: 22px;
}
.shop-middle-right {
  margin-right: 10px;
}
.shop-middle-right table td {
  padding: 5px 5px;
}
.shop-middle-right .score {
  color: #5ea732;
}
.shop-middle-right .score-better {
  color: #f13e3a;
}
.shop-middle-right .better span {
  background-color: #5ea732;
  color: #fff;
  text-align: center;
}
.shop-middle-right .better-more span {
  background-color: #f13e3a;
}
.shop-bottom {
  margin-top: 20px;
  text-align: center;
}
.enter-shop {
  display: inline-block;
  padding: 8px 30px;
  border-radius: 10px;
  background-color: #ddd;
}
</style>
