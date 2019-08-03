<template>
  <div id="setSuccess">
    <div>
      <van-icon
        class="globleIcon iconfont successIcon"
        class-prefix="my-icon"
        name="checkbox-circle-fill"
      />
    </div>
    <div class="successSpan">
      <span>设置成功！下次登录可使用新手机号登录 10S后返回上级页面...</span>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
@import url("../../../common/css/globle.less");

#setSuccess {
  text-align: center;
  padding-top: 100px;
  > div {
    margin-bottom: 10px;
    font-size: 15px;
    color: #333333;
  }
  .successIcon {
    font-size: 70px;
  }
  .successSpan {
    padding: 15px;
  }
}
</style>


