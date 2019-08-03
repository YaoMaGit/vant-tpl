<template>
  <div id="myAppointment">
    <div class="tabBar">
      <div @click="tabClk(1)">
        <span :class="active==1?'active':''">可用券(2)</span>
      </div>
      <div @click="tabClk(0)">
        <span :class="active==0?'active':''">失效券(0)</span>
      </div>
    </div>

    <div class="body" v-if="active==1">
      <div class="listBox" v-for="(item,index) in listData" :key="index" @click="detailClk(item)">
        <img class="statusImg" src="../../../../static/vipcenter/over.png" alt />
        <!-- <img class="statusImg" src="../../../../static/vipcenter/yishiyong.png" alt /> -->
        <div class="left">
          <div class="price">
            <span>￥</span>
            <span>{{parseFloat(item.min_amount)}}</span>
          </div>
          <div class="maxprice">满{{parseFloat(item.money)}}元可用</div>
        </div>

        <div class="right">
          <div class="title">
            <b>{{item.title}}</b>
          </div>
          <div class="time">有效期至：{{item.end_date | dateFilters}}</div>
          <div class="detail">
            <span>详情 ></span>
          </div>
        </div>
      </div>
    </div>

    <div class="body" v-else>
      <div class="listBox" v-for="(item,index) in listData" :key="index" @click="detailClk(item)">
        <img class="statusImg" src="../../../../static/vipcenter/over.png" alt />
        <!-- <img class="statusImg" src="../../../../static/vipcenter/yishiyong.png" alt /> -->
        <div class="left">
          <div class="price">
            <span class="noactive">￥</span>
            <span class="noactive">{{parseFloat(item.min_amount)}}</span>
          </div>
          <div class="maxprice"><span class="noactive">满{{parseFloat(item.money)}}元可用</span></div>
        </div>

        <div class="right">
          <div class="title">
            <b>{{item.title}}</b>
          </div>
          <div class="time">有效期至：{{item.end_date | dateFilters}}</div>
          <div class="detail">
            <span class="noactive">详情 ></span>
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
      active: 1,
      listData: []
    };
  },
  filters: {
    //     dateFiler(dataStr){
    //       var time = new Date(dataStr*1000);
    //         function timeAdd0(str) {
    //             if(str<10){
    //                 str='0'+str;
    //             }
    //             return str
    //         }
    //         var y = time.getFullYear();
    //         var m = time.getMonth()+1;
    //         var d = time.getDate();
    //         var h = time.getHours();
    //         var mm = time.getMinutes();
    //         var s = time.getSeconds();
    //         return y+'-'+timeAdd0(m)+'-'+timeAdd0(d)+' '+timeAdd0(h)+':'+timeAdd0(mm)+':'+timeAdd0(s);
    //     }
  },
  mounted() {
    this.getlistData();
  },
  methods: {
    getlistData() {
      let that = this;
      this.$axios
        .post("/api/user/myCoupons", {
          type: this.active
        })
        .then(function(res) {
          console.log(res);

          if (res.data.code == 200) {
            that.listData = res.data.data;
          } else {
            that.$Toast(res.data.msg);
          }
          that.loading = false;
        });
    },
    tabClk(val) {
      this.active = val;
      this.listData =[]
      this.getlistData();
    },
    detailClk(item) {
      this.$router.push({ name: "couponDetail" ,query:{item:item}});
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
      background: url("../../../../static/vipcenter/coupon1@3x.png");
      height: 120px;
      background-size: 100% 100%;
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
        margin: 35px 0px 0px 20px;
        .price {
          flex: 1;
          color: @globleColor;
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
        margin: 35px 0px 0px 45px;
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
  }
}
.noactive {
  color: #dddddd;
}
</style>


