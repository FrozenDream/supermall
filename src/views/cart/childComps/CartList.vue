<template>
  <div clsss="cart-list">
    <cart-list-item
      v-for="(item, index) in CartList"
      :item-info="item"
      :key="index"
    ></cart-list-item>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CartListItem from './CartListItem'
export default {
  name: 'CartList',
  components: {
    CartListItem
  },
  computed: {
    ...mapGetters(['CartList'])
  },

}

</script>

<style scoped>
</style>
