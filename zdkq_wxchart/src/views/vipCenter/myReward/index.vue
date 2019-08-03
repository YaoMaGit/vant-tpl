<template>
  <div id="myAppointment">
    <!-- <van-tabs title-active-color="#8CC63F" v-model="active">
      <van-tab title="进行中(2)">进行中(2)</van-tab>
      <van-tab title="已结束(0)">已结束(0)</van-tab>
    </van-tabs>-->
    <div class="tabBar">
      <div @click="tabClk(1)">
        <span :class="active==1?'active':''">待领取(2)</span>
      </div>
      <div @click="tabClk(2)">
        <span :class="active==2?'active':''">已领取(0)</span>
      </div>
    </div>
    <div class="body">
      <div class="listBox bgactive" @click="detailClk()">
        <img class="statusImg" src="../../../../static/vipcenter/over.png" alt />
        <!-- <img class="statusImg" src="../../../../static/vipcenter/yishiyong.png" alt /> -->
        <div class="left">
          <div class="price">
            <span>￥</span>
            <span>2000</span>
          </div>
        </div>

        <div class="right">
          <div class="title">
            <b>推荐新客户奖励1280元</b>
          </div>
          <div class="time">
            <span>被推荐人</span>
            <span style="color:black;padding-left:10px;">王大锤678</span>
          </div>
          <div class="detail">
            <span>详情 ></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 1
    };
  },
  methods: {
    tabClk(val) {
      this.active = val;
    },
    detailClk() {
      this.$router.push({ name: "myRewardDetail" });
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../../../common/css/globle.less");

#myAppointment {
  .tabBar {
    display: flex;
    padding: 10px 0px;
    background: #ffffff;
    box-shadow: 0px 0px 10px 0px rgba(42, 42, 42, 0.1);
    font-size: 15px;
    div {
      flex: 1;
      text-align: center;
      span {
        padding-bottom: 8px;
        color: #999999;
      }
      .active {
        color: #000000;
        border-bottom: 2px solid @globleColor;
      }
    }
  }
  .body {
    padding: 10px;
    .listBox {
      height: 120px;

      border-radius: 5px;
      display: flex;
      position: relative;
      .statusImg {
        position: absolute;
        right: 6px;
        top: 8px;
        width: 55px;
        height: 50px;
      }
      .left {
        margin: 45px 0px 0px 15px;
        .price {
          flex: 1;
          color: #ffffff;
          span:nth-child(1) {
            font-size: 15px;
          }
          span:nth-child(2) {
            font-size: 26px;
          }
        }
        .maxprice {
          color: @globleColor;
          font-size: 10px;
        }
      }
      .right {
        margin: 35px 0px 0px 20px;
        flex: 2;
        .title {
          font-size: 18px;
          padding-bottom: 5px;
        }
        .time {
          font-size: 14px;
          color: #dddddd;
        }
        .detail {
          width: 100%;
          color: @globleColor;
          font-size: 14px;
          span {
            float: right;
            margin-right: 25px;
          }
        }
      }
    }

    .bgactive {
      background: url("../../../../static/vipcenter/jinglibg.png");
      background-size: 100% 100%;
    }
    .bggg {
      background: url("../../../../static/vipcenter/jianglibglingqu.png");
      background-size: 100% 100%;
    }
  }
}
</style>


