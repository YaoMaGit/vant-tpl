<template>
  <div id="newWorkMap">
    <div id="Map"></div>
    <van-list v-model="loading" finished-text="没有更多了">
      <div
        class="listBox view"
        v-for="(item,index) in listdata"
        :key="index"
        @click="listDetailClk(item)"
      >
        <div>
          <span class="name">{{item.name}}</span>
          <span class="distance">{{item.distance}}米</span>
        </div>
        <div class="address">地址：{{item.address}}</div>
        <div class="time">营业时间：{{item.business_hours}}</div>
        <div class="btnItmes">
          <div>
            <span class="telphone" @click.stop="callClk(item.phone)">
              <span class="iconSpan">
                <van-icon class="globleIcon iconfont" class-prefix="my-icon" name="phone-outline" />
              </span>
              {{item.phone}}
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
            <span class="btn">立即预约</span>
          </div>
        </div>
      </div>
    </van-list>

    <div class="footerMore">
      <span>
        点击查看全部20条结果
        <van-icon name="arrow-down" />
      </span>
    </div>
  </div>
</template>
<script>
// import { TMap } from "@/common/js/TMap.js";
import { Dialog } from "vant";

import wx from "weixin-js-sdk";
export default {
  data() {
    return {
      page: 1,
      loading: true,
      finished: true,
      listdata: []
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
    // onLoad() {
    //   this.page++;
    //   this.getlistData();
    // },
    getlistData() {
      let that = this;
      this.$axios
        .get("/api/branch", {
          lng: 34.9,
          lat: 113.2,
          page: that.page
        })
        .then(function(res) {
          console.log(res);

          if (res.data.code == 200) {
            that.listdata = res.data.data.branchList;
          } else {
            Toast(res.data.msg);
          }
          that.loading = false;
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
    listDetailClk(item) {
      this.$router.push({ name: "listDetail", query: { branch_id: item.id } });
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
    }
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
    .name {
      font-size: 18px;
      color: #333333;
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
        padding: 8px 8px;
        border-radius: 4px;
      }
    }
  }
  .footerMore {
    height: 60px;
    background: #ffffff;
    text-align: center;
    line-height: 60px;
  }
}
</style>
