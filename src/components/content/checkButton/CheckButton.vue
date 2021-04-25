<template>
  <!-- <div class="check-button iconfont">&#xe628;</div> -->
  <input type="checkbox" class="check" id="" :checked="isChecked" />
</template>

<script>
export default {
  name: 'CheckButton',
  props: {
    isChecked: {
      type: Boolean,
      default: true
    }
  },
  methods: {

  },
}

</script>

<style scoped>
/* .iconfont {
  font-size: 22px;
  color: red;
} */

.check {
  display: inline-block;
  width: 25px;
  height: 25px;
  position: relative;
  top: -10px;
  left: 0;
  border-radius: 50%;
}
</style>
