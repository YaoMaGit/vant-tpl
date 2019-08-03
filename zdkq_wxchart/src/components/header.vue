<template>
  <div id="header">
    <div>
      <van-nav-bar
        title="头部"
        left-text="返回"
        right-text="按钮"
        fixed
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    }
  }
};
</script>

<style lang="less" scoped>
</style>
