<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommendView',
  props: {
    recommends: {
      tyepe: Array,
      defalut() {
        return []
      }
    }
  }
}

</script>

<style>
.recommend {
  display: flex;
  text-align: center;
  padding: 10px 0 20px;
  font-size: 14px;
  border-bottom: 8px solid #ccc;
}
.recommend-item {
  flex: 1;
}
.recommend-item img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>
