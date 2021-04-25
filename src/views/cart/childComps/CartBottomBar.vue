<template>
  <div class="bottom-bar">
    <div class="all-checked">
      <check-button
        class="check-button"
        :is-checked="isSelectAll"
        @click.native="checkClick"
      ></check-button>
      <span class="all-check">全选</span>
    </div>
    <div class="total">合计:{{ totalPrice }}</div>
    <div class="cart-compute">去计算:{{ checkedLength }}</div>
  </div>
  <div></div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
export default {
  name: 'CartBottomBar',
  components: {
    CheckButton
  },
  computed: {
    totalPrice() {
      return '￥' + this.$store.state.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0).toFixed(2)
    },
    checkedLength() {
      return this.$store.state.cartList.filter(item => item.checked).length
    },
    isSelectAll() {
      // 当购物车为空时 默认全选按钮为false
      if (this.$store.state.cartList.length === 0) return false
      // 使用filter 判断是否全选 创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素
      // return !(this.$store.state.cartList.filter(item => !item.checked).length)
      // 使用find 判断是否全选  当数组中的元素在测试条件时返回 true 时, find() 返回符合条件的元素，之后的值不会再调用执行函数
      // return !this.$store.state.cartList.find(item => !item.checked)
      // 使用every 判断是否全选 如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测
      return this.$store.state.cartList.every(item => item.checked)
    }
  },
  methods: {
    checkClick() {
      if (this.isSelectAll) { // 全选按钮 全部选中
        this.$store.state.cartList.forEach(item => item.checked = false)
      } else {// 有部分或全部不选中 全选按钮也不选
        this.$store.state.cartList.forEach(item => item.checked = true)
      }
    }
  },
}

</script>

<style scoped>
.bottom-bar {
  position: fixed;
  left: 0;
  bottom: 51px;
  right: 0;
  display: flex;
  /* justify-content: space-between; */
  height: 40px;
  line-height: 40px;
  background-color: #f1f1f1;
  line-height: 40px;
  padding: 0 5px;
}

.all-checked {
  width: 30%;
}
.total {
  width: 35%;
}
.check-button {
  position: relative;
  top: 7px;
  left: 0;
}
.all-check {
  margin-left: 5px;
}
.cart-compute {
  width: 35%;
  text-align: center;
  background-color: red;
  color: #fff;
}
</style>
