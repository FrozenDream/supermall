<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="iconfont">&#xe604;</i>
        <p>客服</p>
      </div>
      <div>
        <i class="iconfont">&#xe603;</i>
        <p>店铺</p>
      </div>
      <div>
        <i class="iconfont">&#xe8b9;</i>
        <p>收藏</p>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="car">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
}

</script>

<style scoped>
.bottom-bar {
  display: flex;
  /* position: fixed;
  left: 0;
  right: 0;
  bottom: 0; */
  position: relative;
  /* bottom: 49px; */
  height: 49px;
}
.bar-item {
  flex: 1;
}
.iconfont {
  font-size: 20px;
  margin-bottom: 3px;
}
.bar-left {
  display: flex;
  justify-content: space-around;
  text-align: center;
  font-size: 18px;
  background-color: #fff;
}
.bar-left div {
  margin-top: 3px;
}
.bar-left > div > p {
  margin-top: 3px;
}
.bar-right {
  background-color: skyblue;
}
.bar-right {
  display: flex;
}
.bar-right div {
  flex: 1;
  text-align: center;
  line-height: 49px;
}
.car {
  background-color: #ffde0f;
}
.buy {
  color: #fff;
  background-color: #ff789a;
}
</style>
