<template>
  <div class="tab">
        <van-tabbar v-model="active">        
            <van-tabbar-item icon="yooxi" to="./Home">主页</van-tabbar-item>
            <van-tabbar-item icon="fenlei" to="./Class">分类</van-tabbar-item>
            <van-tabbar-item icon="quanzi" to="./Pop">圈子</van-tabbar-item>
            <van-tabbar-item icon="wode" to="./Mine">我的</van-tabbar-item>
        </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "tab",
  components: {},
  data() {
    return {
      active: 0,
      tabdata: [
        {
          name: "首页",
          routerUrl: ""
        }
      ]
    };
  },
  created() {
    
  },
};
</script>
<style>
</style>