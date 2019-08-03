<template>
  <div id="appointSuccess">
    <div>
      <van-icon
        class="globleIcon iconfont successIcon"
        class-prefix="my-icon"
        name="checkbox-circle-fill"
      />
    </div>
    <div>
      <span>预约成功！</span>
    </div>
    <div style="font-size:20px">预约编码：ZDM0000001</div>
    <div class="successSpan" @click="detailClk()">
      <span>查看详情</span>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    detailClk(){
      this.$router.push({ name: "myAppointment" });
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../../common/css/globle.less");

#appointSuccess {
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
    margin-top: 30px;
    span {
      color: @globleColor;
      border: 1px solid @globleColor;
      border-radius: 3px;
      padding: 5px;
    }
  }
}
</style>


