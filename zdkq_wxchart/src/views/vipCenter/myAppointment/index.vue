<template>
  <div id="myAppointment">
    <div class="tabBar">
      <div @click="tabClk(1)">
        <span :class="active==1?'active':''">进行中(2)</span>
      </div>
      <div @click="tabClk(0)">
        <span :class="active==0?'active':''">已结束(0)</span>
      </div>
    </div>
    <div class="body">
      <div class="listBox" @click="detailClk()">
        <div class="top">
          <van-row align="center" type="flex">
            <van-col span="17">
              <div class="num">预约编号：ZDM000001</div>
              <div class="time">创建时间：2019-06-25 10:25:31</div>
            </van-col>
            <van-col span="7">
              <span class="btn">查看详情</span>
              <!-- <span style="color:#999999;">已结束</span> -->
            </van-col>
          </van-row>
        </div>
        <div class="bottom">
          <div>
            <span class="name">预约网点</span>
            <span>郑州市金水区金水路未来路植得口腔...</span>
          </div>
          <div>
            <span class="name">预约目的</span>
            <span>初步了解正畸</span>
          </div>
          <div>
            <span class="name">预约时间</span>
            <span>2019年05月26日 14:00~15:00</span>
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
  mounted(){
    this.tabClk(this.active) 
  },
  methods: {
    tabClk(val) {
      let that=this
      this.active = val;
      this.$axios
        .get("/api/appointment", {
          user_id: 1,
          status:val,
        })
        .then(function(res) {
          console.log(res);
          if (res.data.code == 200) {
            // console.log(res);
          } else {
            that.$Toast(res.data.msg);
          }
        });
    },
    detailClk() {
      this.$router.push({ name: "myAppointmentDetail" });
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
      background: #ffffff;
      border-radius: 5px;
      .top {
        padding: 15px 15px 5px 15px;
        border-bottom: 1px solid #dddddd;
        div {
          padding-bottom: 5px;
          .num {
            font-size: 16px;
          }
          .time {
            font-size: 12px;
            color: #999999;
          }
        }
        .btn {
          color: @globleColor;
          border-radius: 5px;
          border: 1px solid @globleColor;
          padding: 5px 10px;
        }
      }
      .bottom {
        font-size: 14px;
        padding: 15px;
        div {
          padding-bottom: 5px;
          .name {
            color: #999999;
          }
        }
      }
    }
  }
}
</style>


