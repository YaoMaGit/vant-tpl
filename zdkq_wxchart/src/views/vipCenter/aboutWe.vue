<template>
  <div id="aboutWe"  class="view">
    <div class="img">
      <img src="../../../static/vipcenter/gift@3x.png" alt />
    </div>
    <div>
      <p>
        专家会根据您上传的图片，判断您是否适合隐形正畸。如果可以做的，客服会通知您去我们授权诊室制作咬合牙模，然后邮寄给我们客服。
        专家根据您上传照片和牙模出1-3个治疗方案。如果您对方案满意，直接在线付款就可以了。隐形牙套会在10个工作日内邮寄给您。我们的客服会定期回访您治疗情况。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      value: ""
    };
  }
};
</script>

<style lang="less" scoped>
#aboutWe{
  height: 100vh;
  background: #ffffff;
  .img{
    text-align: center;
    margin:50px 0px;
  }
  p{
    color: #666666;
    font-size: 14px;
    line-height: 24px;
    text-indent:2em;
  }
}
</style>
