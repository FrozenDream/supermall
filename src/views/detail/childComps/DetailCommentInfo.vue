<template>
  <div class="comment-info" v-if="Object.keys(commentInfo).length !== 0">
    <div class="info-header">
      <div class="info-title">用户评价</div>
      <div class="info-more">更多<i class="iconfont">&#xe600;</i></div>
    </div>
    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt="" />
      <span>{{ commentInfo.user.uname }}</span>
    </div>
    <div class="info-detail">
      <p>{{ commentInfo.content }}</p>
      <div class="detail-other">
        <span class="date">{{ showDtae }}</span>
        <span class="style">{{ commentInfo.style }}</span>
      </div>
    </div>
    <div class="info-imgs">
      <img
        :src="item"
        alt=""
        v-for="(item, index) in commentInfo.images"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import { formatDate } from 'common/utils'
export default {
  name: 'DetailCommentInfo',
  props: {
    commentInfo: {
      type: Object,
      defalut() {
        return {}
      }
    }
  },
  computed: {
    // showDtae() {
    //   // 将时间戳转换为Date对象
    //   const date = new Date(this.commentInfo.created * 1000)
    //   let y = date.getFullYear();
    //   let MM = date.getMonth() + 1;
    //   MM = MM < 10 ? ('0' + MM) : MM;
    //   let d = date.getDate();
    //   d = d < 10 ? ('0' + d) : d;
    //   let h = date.getHours();
    //   h = h < 10 ? ('0' + h) : h;
    //   let m = date.getMinutes();
    //   m = m < 10 ? ('0' + m) : m;
    //   let s = date.getSeconds();
    //   s = s < 10 ? ('0' + s) : s;
    //   return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
    // }
    showDtae() {
      let date = new Date(this.commentInfo.created * 1000)
      return formatDate(date, 'yyyy-MM-dd hh:mm')
    }
  }
}

</script>

<style scoped>
.comment-info {
  padding: 0 15px 20px;
  border-bottom: 3px solid #ccc;
  margin-bottom: 20px;
}
.info-header {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #ccc;
  padding: 0 20px 10px 0;
}
.info-user {
  font-size: 16px;
  margin-top: 10px;
}
.info-user img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  vertical-align: middle;
  margin-right: 10px;
}
.info-detail {
  margin-top: 15px;
  line-height: 1.4;
}
.info-detail .detail-other {
  margin-top: 10px;
}
.detail-other .style {
  margin-left: 10px;
}
.info-imgs {
  margin-top: 10px;
}
.info-imgs img {
  width: 70px;
  height: 70px;
}
</style>
