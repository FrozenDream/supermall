<template>
  <div class="param-info" v-if="Object.keys(paramsInfo).length !== 0">
    <table
      class="info-size"
      v-for="(table, index) in paramsInfo.sizes"
      :key="index"
    >
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{ td }}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(info, index) in paramsInfo.infos">
        <td class="info-key">{{ info.key }}</td>
        <td class="info-value">{{ info.value }}</td>
      </tr>
    </table>
    <div class="info-img" v-if="paramsInfo.image.length !== 0">
      <img :src="paramsInfo.image" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailParamInfo',
  props: {
    paramsInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
}

</script>

<style scoped>
.param-info {
  border-top: 5px solid #eee;
  padding: 20px 15px;
  line-height: 1.4;
}
.param-info table {
  width: 100%;
  font-size: 16px;
}
.info-size td {
  height: 40px;
  border-bottom: 2px solid #eee;
}
.info-param td {
  width: 30px;
  height: 40px;
  border-bottom: 2px solid #eee;
}
.info-param .info-value {
  color: var(--color-high-text);
}
.info-img img {
  width: 100%;
}
</style>
