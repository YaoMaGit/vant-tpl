<template>
  <div id="detail">
    <div class="card view">
      <div class="topFixed">
        <div>
          <van-icon
            style="font-size: 26px;"
            class="globleIcon iconfont"
            class-prefix="my-icon"
            name="youhuiquan"
          />
        </div>
      </div>

      <div class="top">
        <div>
          <b>{{item.title}}</b>
        </div>
        <div>
          <b>满{{parseFloat(item.money)}}元减{{parseFloat(item.min_amount)}}元</b>
        </div>
        <div class="center">已领取</div>
        <!-- <div class="center">已失效</div> -->
      </div>
      <div class="bottom">
        <div>
          <span class="key">有效期至</span>
          <span>{{item.end_date | dateFilters}}</span>
        </div>
      </div>

      <div class="footer" @click="flowClk()">
        <van-row type="flex" align="center">
          <van-col span="22" style="font-size:14px;">优惠券使用说明</van-col>
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
    return {
      item:this.$route.query.item
    };
  },
  methods: {
    flowClk() {
      this.$router.push({ name: "couponDirection" });
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
      .creatTime {
        font-size: 12px;
        color: #999999;
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


