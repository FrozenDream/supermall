<template>
  <div class="base-info" v-if="Object.keys(goods).length !== 0">
    <div class="goods-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="new-price">{{ goods.newPrice }}</span>
      <span class="old-price">{{ goods.oldPrice }}</span>
      <span v-if="goods.discount" class="discount">{{ goods.discount }}</span>
    </div>
    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-services">
      <span
        class="info-services-item"
        v-for="index in goods.services.length - 1"
        :key="index"
      >
        <img :src="goods.services[index - 1].icon" alt="" />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  },
}

</script>

<style scoped>
.base-info {
  margin-top: 10px;
  padding: 0 10px;
}
.goods-title {
  color: #333;
}
.info-price {
  position: relative;
  display: inline-block;
  /* background-color: pink; */
  margin-top: 10px;
}
.new-price {
  font-size: 20px;
  color: #fa7485;
}
.old-price {
  font-size: 12px;
  color: #ccc;
  text-decoration: line-through;
  margin-left: 5px;
}
.discount {
  position: absolute;
  top: 0;
  right: -60px;
  display: inline-block;
  width: 60px;
  height: 15px;
  font-size: 12px;
  color: #fff;
  background-color: #fa7485;
  text-align: center;
  border-radius: 7px;
  line-height: 15px;
}
.info-other {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #908686;
  margin-top: 15px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 5px;
}
.info-services {
  display: flex;
  justify-content: space-between;
  color: #333;
  font-size: 14px;
  margin-top: 15px;
  border-bottom: 3px solid #ccc;
  padding-bottom: 15px;
}
.info-services img {
  width: 15px;
  height: 15px;
  vertical-align: text-top;
}
</style>
