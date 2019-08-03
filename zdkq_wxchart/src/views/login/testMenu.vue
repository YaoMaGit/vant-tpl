<template>
  <div id="testMenu">
    <div class="ceshi">
      <van-button type="warning" @click="btn('login')">登录</van-button>
      <br />
      <van-button type="primary" @click="btn('netWorkMap')">网点预约</van-button>
      <br />
      <van-button type="info" @click="btn('toothTest')">牙齿自测</van-button>
      <br />
      <van-button type="danger" @click="btn()">申请病例</van-button>
      <br />
      <van-button type="warning" @click="btn('freeApply')">免费申请</van-button>
      <br />
      <van-button type="danger" @click="btn('vipCenter')">个人中心</van-button>
      <br />
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";

export default {
  data() {
    return {};
  },
  methods: {
    btn(name) {
      if (name) {
        this.$router.push({ name: name });
      } else {
        Toast("开发ing");
      }
    }
  }
};
</script>
<style lang="less" scoped>
#testMenu {
  .ceshi {
    width: 100%;
    text-align: center;
    .van-button{
        margin-top: 20px;
    }
  }
}
</style>


