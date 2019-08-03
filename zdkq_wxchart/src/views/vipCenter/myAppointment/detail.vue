<template>
  <div id="detail">
    <div class="card view">
      <div class="topFixed">
        <div>
          <van-icon
            style="font-size: 45px;"
            class="globleIcon iconfont"
            class-prefix="my-icon"
            name="task"
          />
        </div>
      </div>

      <div class="top">
        <div class>
          <b>预约编号：ZDM000001</b>
        </div>
        <div class="creatTime">创建时间：2019-06-25 10:25:31</div>
      </div>

      <div class="bottom">
        <div>
          <span class="key">预约目的</span>
          <span>初步了解正畸</span>
        </div>
        <div>
          <span class="key">预约时间</span>
          <span>2019年05月26日 14:00~15:00</span>
        </div>
        <div>
          <span class="key">预约网点</span>
          <span>郑州市金水区金水路植得口腔</span>
        </div>
        <div style="display:flex;">
          <div style="flex:2;" class="key">网点地址</div>
          <div style="flex:9;">
            郑州市金水区民航路地铁口F1出口，植
            得口腔口腔医院4楼405
          </div>
        </div>
        <div>
          <span class="key">主治医生</span>
          <span>zhang医生</span>
        </div>
        <div>
          <span class="key">网点电话</span>
          <span>03711111111</span>
        </div>
      </div>

      <div class="footer" @click="flowClk()">
        <van-row type="flex" align="center">
          <van-col span="22" style="font-size:14px;">查看就诊流程</van-col>
          <van-col span="2">
            <van-icon color="#dddddd" name="arrow" />
          </van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods:{
    flowClk() {
      this.$router.push({name:"myAppointmentdirection"})
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../../../common/css/globle.less");

#detail {
  width: 100%;
  height: 100vh;
  background: @globleColor;
  padding-top: 45px;
  .card {
    margin: 10px;
    border-radius: 5px;
    position: relative;
    .topFixed {
      position: absolute;
      left: calc(50% - 35px);
      top: -30px;
      div {
        width: 70px;
        height: 70px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 0px 10px 0px rgba(42, 42, 42, 0.1);
        border-radius: 50%;
        text-align: center;
        line-height: 70px;
      }
    }
    .top {
      text-align: center;
      padding: 35px 0px 15px;
      border-bottom: 1px dashed #dddddd;
      div {
      }
      .creatTime {
        font-size: 12px;
        color: #999999;
      }
    }
    .bottom {
      font-size: 14px;
      border-bottom: 1px dashed #dddddd;
      padding: 15px 0px;
      div {
        padding-bottom: 10px;
      }
      .key {
        color: #999999;
        margin-right: 5px;
      }
    }
    .footer {
      padding-top: 20px;
    }
  }
}
</style>


