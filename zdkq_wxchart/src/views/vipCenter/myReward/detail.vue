<template>
  <div id="detail">
    <div class="card view">
      <div class="topFixed">
        <div>
          <van-icon
            style="font-size: 35px;"
            class="globleIcon iconfont"
            class-prefix="my-icon"
            name="jiangliguanli"
          />
        </div>
      </div>

      <div class="top">
        <div>
          <b>推荐新客户奖励1280元</b>
        </div>
        <div class="btnClk">立即领取</div>
        <div class="subtitle">领取后，24小时内发放</div>
        <!-- <div class="center">已领取</div> -->
      </div>
      <div class="bottom">
        <div>
          <span class="key">被推荐人</span>
          <span>王大锤678</span>
        </div>
        <div>
          <span class="key">推荐时间</span>
          <span>2019.05.26 14:35:57</span>
        </div>
        <!-- <div>
          <span class="key">领取时间</span>
          <span>2019.05.26 14:35:57</span>
        </div> -->
      </div>

      <div class="footer" @click="flowClk()">
        <van-row type="flex" align="center">
          <van-col span="22" style="font-size:14px;">奖励金领取说明</van-col>
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
  methods: {
    flowClk() {
      this.$router.push({ name: "myRewardDirection" });
    },
    btnClk() {}
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
      .btnClk {
        width: 300px;
        height: 44px;
        background: @globleColor;
        border-radius: 50px;
        margin: auto;
        color: #ffffff;
        line-height: 44px;
        margin-top: 20px;
        margin-bottom: 10px;
      }
      .subtitle {
        font-size: 12px;
        margin-bottom: 15px;
      }
    }
    .center {
      color: @globleColor;
      padding: 10px;
    }
    .bottom {
      font-size: 14px;
      border-bottom: 1px dashed #dddddd;
      padding: 15px 0px;
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


