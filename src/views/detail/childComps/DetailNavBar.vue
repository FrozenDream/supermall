<template>
  <nav-bar>
    <template v-slot:left>
      <div class="iconfont" @click="backClick">&#xe617;</div>
    </template>
    <template v-slot:center>
      <div class="title">
        <div
          v-for="(item, index) in titles"
          class="title-item"
          :class="{ active: currentIndex == index }"
          @click="itemClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: 'DetailNavBar',
  components: {
    NavBar
  },
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('titleClick', index)
    },
    backClick() {
      this.$router.back()
    }
  },
}

</script>

<style scoped>
.title {
  display: flex;
}
.title-item {
  flex: 1;
}
.active {
  color: red;
}
.iconfont {
  font-size: 24px;
}
</style>
