<template>
  <div id="flow">
    <div class="title">就诊流程</div>
    <div class="body">
      <van-row v-for="(item,index) in [0,1,2,3,4]" :key="index">
        <van-col span="3">
          <div class="leftRadio">
            <div>{{index}}</div>
          </div>
          <div class="dashed">
            <span></span>
          </div>
        </van-col>
        <van-col span="21">
          <div class="content">预约后，客服会打电话跟您次确认预约时间。</div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
@import url("../../../common/css/globle.less");

#flow {
  width: 100%;
  height: 100vh;
  background: #ffffff;
  padding-top: 30px;
  .body{
      padding: 10px;
  }
  .title {
    font-size:24px;
    margin: 0px 0 10px 30px;
  }
  .leftRadio {
    text-align: center;
    div {
      width: 16px;
      height: 16px;
      display: inline-block;
      background: @globleColor;
      border-radius: 50%;
      text-align: center;
      line-height: 16px;
      color: #ffffff;
      font-size: 13px;
    }
  }
  .dashed {
    //   height: 30px;
    text-align: center;
    span {
      border-left: 1px dashed @globleColor;
    }
  }
  .content{
      font-size: 14px;
      color: #666666;
  }
}
</style>


