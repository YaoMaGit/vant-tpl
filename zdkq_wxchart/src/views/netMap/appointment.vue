<template>
  <div id="appointment">
    <van-cell-group>
      <van-field
        v-model="username"
        required
        clearable
        type="text"
        label="预约人"
        placeholder="请输入预约人姓名"
      />
      <van-field v-model="phone" type="number" label="手机号" placeholder="请输入预约人手机号" required />
      <van-field
        v-model="activeArea.string"
        type="text"
        label="所在地"
        placeholder="请选择所在地"
        @click-right-icon="areaClk()"
        right-icon="arrow"
        disabled
      />
      <van-field v-model="address" type="text" label="详细地区" placeholder="街道门牌、楼层房间号等信息" />
    </van-cell-group>
    <div class="subInput">
      <van-field
        v-model="activePurpose.text"
        type="text"
        label="预约目的"
        placeholder="请选择预约目的"
        right-icon="arrow"
        @click-right-icon="purposeClk()"
        required
        disabled
      />
      <van-field
        v-model="dateTimeList.string"
        type="text"
        label="预约时间"
        placeholder="请选择预约时间"
        right-icon="arrow"
        @click-right-icon="dateshowClk()"
        required
        disabled
      />
    </div>
    <div class="btn" @click="postClk()">提交</div>

    <!-- 所在地 -->
    <van-popup position="bottom" v-model="areaListshow">
      <van-area title="所在地" @cancel="onCancel" @confirm="onConfirmArea" :area-list="areaList" />
    </van-popup>
    <!-- 预约目的 -->
    <van-popup position="bottom" v-model="purposeshow">
      <van-picker
        title="预约目的"
        show-toolbar
        :columns="purposeList"
        @cancel="onCancel"
        @confirm="onConfirmPurpose"
      />
    </van-popup>
    <!-- 预约时间 -->
    <van-popup position="bottom" :style="{ height: '406px' }" v-model="dateshow">
      <div id="popupMudel">
        <div class="header">
          <van-row type="flex" justify="space-between">
            <van-col span="4">
              <span @click="onCancel">取消</span>
            </van-col>
            <van-col span="4">
              <span @click="onConfirmdate">确认</span>
            </van-col>
          </van-row>
        </div>
        <div class="center">
          <div class="scollLIst">
            <div
              :class="dateActive==index?'active':'item'"
              @click="dateClk(index)"
              v-for="(item,index) in dateTimeList.data"
              :key="index"
            >{{item.date}}</div>
          </div>
        </div>
        <div class="bottom">
          <div class="row">
            <div
              @click="timeClk(index)"
              :class="itemActive==index?'item active':'item'"
              v-for="(item,index) in activeItem"
              :key="index"
            >{{item}}</div>
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>
<script>
import { Toast } from "vant";

import Area from "../../common/js/area.js";
import { setTimeout } from "timers";
export default {
  components: {},
  data() {
    return {
      dateshow: false,
      areaListshow: false,
      purposeshow: false,
      activeArea: {},
      activePurpose: "",
      areaList: Area,
      username: "Yao",
      phone: "15890679888",
      address: "人民路128号9单元xx层西",
      purposeList: [],
      user_id: 1,
      dateTimeList: {
        string: "",
        data: []
      },
      dateActive: 0,
      itemActive: 0,
      activeItem: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      let that = this;
      this.$axios
        .get("/api/appointment/create", {
          // id: 1,
        })
        .then(function(res) {
          if (res.data.code == 200) {
            console.log(res);
            for (const key in res.data.data.purpose) {
              that.purposeList.push({
                text: res.data.data.purpose[key],
                key: key
              });
            }

            let arr = [];
            for (const key in res.data.data.date) {
              arr.push({
                date: key,
                time: res.data.data.date[key]
              });
            }
            that.dateTimeList.data = arr;
            console.log(that.dateTimeList);
            that.dateClk(that.dateActive);
          } else {
            Toast(res.data.msg);
          }
        });
    },
    dateshowClk() {
      this.dateshow = !this.dateshow;
    },
    purposeClk() {
      this.purposeshow = !this.purposeshow;
    },
    onCancel() {
      this.dateshow = false;
      this.purposeshow = false;
      this.areaListshow = false;
    },
    onConfirmArea(value) {
      console.log(value);
      let string = "",
        province_id = "",
        city_id = "",
        county_id = "";
      for (const key in value) {
        if (key == 0) {
          province_id = value[key].code;
        } else if (key == 1) {
          city_id = value[key].code;
        } else if (key == 2) {
          county_id = value[key].code;
        }
        string += value[key].name + " ";
      }
      this.activeArea = {
        string: string,
        province_id: province_id,
        city_id: city_id,
        county_id: county_id
      };
      console.log(this.activeArea);
    },
    onConfirmPurpose(value) {
      console.log(value);
      this.activePurpose = value;
    },
    areaClk() {
      this.areaListshow = !this.areaListshow;
    },
    postClk() {
      let that = this;
      let bool = true;
      if (that.username == "") {
        bool = false;
        Toast("请填写预约人");
      } else if (that.phone == "") {
        bool = false;
        Toast("请填写手机号");
      } else if (that.activePurpose.key == "") {
        bool = false;
        Toast("请选择预约目的");
      } else if (that.dateTimeList.string == "") {
        bool = false;
        Toast("请选择预约目的");
      }
      if (bool) {
        that.$axios
          .post("/api/appointment", {
            name: that.username,
            phone: that.phone,
            user_id: that.user_id,
            branch_id: that.$route.query.branch_id,
            purpose: that.activePurpose.key,
            date: that.dateTimeList.data[that.dateActive].date,
            time: that.dateTimeList.data[that.dateActive].time[that.itemActive],
            province_id: that.activeArea.province_id,
            city_id: that.activeArea.city_id,
            county_id: that.activeArea.county_id,
            address: that.address
          })
          .then(function(res) {
            console.log(res);
            if (res.data.code == 200) {
              Toast("提交成功");
              setTimeout(function() {
                Toast.clear();
                that.$router.push({ name: "appointSuccess" });
              }, 1000);
            } else {
              Toast(res.data.msg);
            }
          });
      }
    },
    dateClk(index) {
      this.dateActive = index;
      this.activeItem = this.dateTimeList.data[index].time;
    },
    timeClk(index) {
      this.itemActive = index;
    },
    onConfirmdate() {
      this.dateshow = !this.dateshow;
      this.dateTimeList.string = `${
        this.dateTimeList.data[this.dateActive].date
      } ${this.dateTimeList.data[this.dateActive].time[this.itemActive]}`;
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../../common/css/globle.less");
#appointment {
  .subInput {
    margin-top: 10px;
  }
  .btn {
    width: 340px;
    height: 50px;
    background: @globleColor;
    border-radius: 5px;
    color: #ffffff;
    text-align: center;
    line-height: 50px;
    margin: auto;
    margin-top: 40px;
  }
}

#popupMudel {
  width: 100vw;
  .header {
    text-align: center;
    color: #1989fa;
    font-size: 14px;
    padding: 15px;
    border-bottom: 1px solid #ebedf0;
  }
  .center {
    .scollLIst {
      border-bottom: 1px solid #ebedf0;
      padding: 10px;
      display: flex;
      overflow-x: auto;
      overflow-y: hidden;
    }

    .scollLIst {
      .active {
        height: 50px;
        color: #ffffff;
        border-radius: 3px;
        background: @globleColor;
        margin: 10px 5px 10px 10px;
        text-align: center;
        line-height: 50px;
        min-width: 150px;
      }
      .item {
        height: 44px;
        color: #ffffff;
        border-radius: 3px;
        background: #c3dca2;
        margin: 13px 5px 10px 10px;
        text-align: center;
        line-height: 44px;
        min-width: 150px;
        font-size: 14px;
      }
    }
  }
  .bottom {
    padding: 25px 0px;
    .row {
      margin-bottom: 25px;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      padding: 0 10px;
      .item {
        width: 100px;
        height: 44px;
        margin: 8px;
        color: #333333;
        border-radius: 3px;
        text-align: center;
        line-height: 44px;
        font-size: 14px;
        border: 1px solid @globleColor;
      }
      // .notSelet {
      //   background: rgba(195, 220, 162, 1);
      //   color: #ffffff;
      //   position: relative;
      //   .over {
      //     position: absolute;
      //     right: 0px;
      //     top: 0px;
      //     background: #cd7c79;
      //     display: inline-block;
      //   }
      // }
      .active {
        background: @globleColor;
        color: #ffffff;
      }
    }
  }
}
</style>


