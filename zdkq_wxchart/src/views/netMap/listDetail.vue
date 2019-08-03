<template>
  <div id="newWorkMap">
    <div id="Map"></div>
    <div class="listBox view">
      <div>
        <span class="name">{{branchInfo.name}}</span>
        <span class="distance">{{branchInfo.distance}}米</span>
      </div>
      <div class="address">地址：{{branchInfo.address}}</div>
      <div class="time">营业时间：{{branchInfo.business_hours}}</div>
      <div class="btnItmes">
        <div>
          <span class="telphone" @click.stop="callClk(branchInfo.phone)">
            <span class="iconSpan">
              <van-icon class="globleIcon iconfont" class-prefix="my-icon" name="phone-outline" />
            </span>
            {{branchInfo.phone}}
          </span>
        </div>
        <div>
          <span class="location">
            <span class="iconSpan">
              <van-icon class="globleIcon iconfont" class-prefix="my-icon" name="pin-outline" />
            </span>
            导航
          </span>
        </div>
        <div>
          <span class="btn" @click="appointmentClk()">立即预约</span>
        </div>
      </div>
    </div>
    <div class="netWorkAccount view">
      <div>
        <span class="title">网点介绍</span>
        <span class="setOpen" v-if="upDownShow" @click="upDownShow=!upDownShow">
          展开
          <van-icon name="arrow-down" />
        </span>
        <span class="setOpen" v-else @click="upDownShow=!upDownShow">
          收起
          <van-icon name="arrow-up" />
        </span>
      </div>
      <div :class="{'AccountP':upDownShow}">
        <p>{{branchInfo.desc}}</p>
      </div>
    </div>

    <div class="newWorkDoctor view">
      <div>
        <span class="title">专家医生</span>
      </div>
      <div class="scollList">
        <div class="item" v-for="(item,index) in doctors" :key="index" @click="doctorDetailClk()">
          <img :src="item.cover" alt />
          <div class="name">{{item.name}}</div>
          <div class="subname">{{item.title}}</div>
          <div class="lookDetail">
            <span>查看详情</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { TMap } from "@/common/js/TMap.js";
import wx from "weixin-js-sdk";
import { Dialog } from "vant";

export default {
  data() {
    return {
      upDownShow: true,
      branchInfo: "",
      doctors: []
    };
  },
  mounted() {
    const map = new BMap.Map("Map");
    let point = new BMap.Point(113.65, 34.76);
    map.centerAndZoom(point, 14);
    let driving = new BMap.DrivingRoute(map, {
      renderOptions: {
        map: map,
        autoViewport: true
      }
    });
    let start = new BMap.Point(116.310791, 40.003419);
    let end = new BMap.Point(116.486419, 39.877282);
    driving.search(start, end);
    //配置wx jsSDK
    wx.config({
      debug: false,
      appId: "wxf8b4f85f3a794e77",
      timestamp: 1562566480,
      nonceStr: "mPJWufCQppZIe2lo",
      signature: "f3ee5e6e3c1537f55bc4ca78b1e88481d11beabb",
      jsApiList: [
        "checkJsApi",
        "onMenuShareTimeline",
        "onMenuShareAppMessage",
        "onMenuShareQQ",
        "onMenuShareWeibo",
        "onMenuShareQZone",
        "hideMenuItems",
        "showMenuItems",
        "hideAllNonBaseMenuItem",
        "showAllNonBaseMenuItem",
        "translateVoice",
        "startRecord",
        "stopRecord",
        "onVoiceRecordEnd",
        "playVoice",
        "onVoicePlayEnd",
        "pauseVoice",
        "stopVoice",
        "uploadVoice",
        "downloadVoice",
        "chooseImage",
        "previewImage",
        "uploadImage",
        "downloadImage",
        "getNetworkType",
        "openLocation",
        "getLocation",
        "hideOptionMenu",
        "showOptionMenu",
        "closeWindow",
        "scanQRCode",
        "chooseWXPay",
        "openProductSpecificView",
        "addCard",
        "chooseCard",
        "openCard"
      ]
    });

    // TMap("A2IBZ-INJW4-X4EUU-DJ7NZ-WEW4V-OZFHS").then(qq => {
    //   var map = new qq.maps.Map(document.getElementById("Map"), {
    //     // 地图的中心地理坐标。
    //     center: new qq.maps.LatLng(34.76,113.65),
    //     zoom:2,
    //     zoomControl: false,
    //     mapTypeControlOptions: {
    //         mapTypeIds: ['coordinate']
    //     }
    //   });
    // });
    this.getlistData();
  },
  methods: {
    getlistData() {
      let that = this;
      this.$axios
        .get("/api/branch/" + that.$route.query.branch_id, {
          // id: 1,
        })
        .then(function(res) {
          console.log(res);

          if (res.data.code == 200) {
            that.doctors = res.data.data.doctors;
            that.branchInfo = res.data.data.branchInfo;
          } else {
            Toast(res.data.msg);
          }
        });
    },
    getloca() {
      wx.getLocation({
        type: "wgs84", // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
        success: function(res) {
          var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
          var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
          var speed = res.speed; // 速度，以米/每秒计
          var accuracy = res.accuracy; // 位置精度
          console.log(res);
        }
      });
    },
    doctorDetailClk() {
      this.$router.push({ name: "doctorDetail" });
    },
    appointmentClk() {
      this.$router.push({
        name: "appointment",
        query: { branch_id: this.branchInfo.id }
      });
    },
    callClk(val) {
      Dialog.confirm({
        message: val
      })
        .then(() => {
          // on confirm
          window.location.href = `tel://${val}`;
        })
        .catch(() => {
          // on cancel
        });
    },
    upDownClk() {}
  },
  created: function() {}
};
</script>
<style lang="less" scoped>
@import url("../../common/css/globle.less");
#Map {
  width: 100%;
  height: 200px;
}
#newWorkMap {
  font-size: 14px;
  color: #999999;
  .listBox {
    margin-bottom: 10px;
    .name {
      font-size: 18px;
      color: #333333;
      font-weight: 500;
    }
    .distance {
      font-size: 12px;
      float: right;
      margin-top: 5px;
    }
    .address {
      margin-top: 15px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .time {
      margin-top: 5px;
      padding-bottom: 15px;
      border-bottom: 1px solid #eeeeee;
    }
    .btnItmes {
      padding-top: 20px;
      display: flex;
      text-align: center;
      justify-content: space-around;
      .btn {
        color: #ffffff;
        background: @globleColor;
        padding: 8px 12px;
        border-radius: 4px;
      }
    }
  }

  .netWorkAccount {
    .title {
      font-weight: 600;
      color: #333333;
      border-left: @globleColor 3px solid;
      padding-left: 10px;
    }
    .setOpen {
      color: @globleColor;
      float: right;
      font-size: 14px;
    }
    .AccountP p {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }
    p {
      color: #666666;
      font-size: 14px;
    }
  }

  .newWorkDoctor {
    .title {
      font-weight: 600;
      color: #333333;
      border-left: @globleColor 3px solid;
      padding-left: 10px;
    }

    .scollList {
      padding: 10px;
      display: flex;
      overflow-x: auto;
      overflow-y: hidden;
    }

    .scollList .item {
      background: #ffffff;
      box-shadow: 0px 0px 10px 0px rgba(42, 42, 42, 0.1);
      float: left;
      margin: 10px 20px 10px 10px;
      min-width: 155px;
      height: 205px;
      border-radius: 10px;
      text-align: center;
      img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        margin-top: 28px;
      }
      .name {
        color: #333333;
        font-weight: 600;
      }
      // .subname {
      // }
      .lookDetail {
        margin-top: 15px;
        span {
          padding: 6px 12px;
          border-radius: 5px;
          border: 1px solid @globleColor;
          color: @globleColor;
        }
      }
    }
  }
}
</style>
