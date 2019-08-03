<template>
  <div id="basicInfor1">
    <div class="steps">
      <div class="top">
        <van-row>
          <van-col span="8">
            <div>第一步</div>
            <div>基本信息</div>
          </van-col>
          <van-col class="noActive" span="8">
            <div>第二步</div>
            <div>上传照片</div>
          </van-col>
          <van-col class="noActive" span="8">
            <div>第三步</div>
            <div>牙齿情况</div>
          </van-col>
        </van-row>
      </div>
      <div class="bottom">
        <span class="checked">
          <van-icon name="checked" />
        </span>
        <span class="slid noActiveBG"></span>
        <span class="circle noActiveBG"></span>
        <span class="slid noActiveBG"></span>
        <span class="circle noActiveBG"></span>
      </div>
    </div>

    <div class="infor">
      <van-cell-group>
        <van-field v-model="ajaxData.username" required clearable label="姓名" placeholder="请输入用姓名" />
        <van-field
          v-model="ajaxData.sex.text"
          required
          clearable
          disabled
          label="性别"
          right-icon="arrow"
          placeholder="请选择性别"
          @click-right-icon="sexshow=!sexshow"
        />
        <van-field v-model="ajaxData.age" required clearable label="年龄" placeholder="请选择年龄" />
        <van-field v-model="ajaxData.phone" required clearable label="电话" placeholder="请输入电话" />
        <van-field
          v-model="ajaxData.address.city_district_id_string"
          required
          clearable
          label="居住地"
          right-icon="arrow"
          placeholder="请选择居住地"
          @click-right-icon="areaListshow=!areaListshow"
        />
      </van-cell-group>
    </div>

    <!-- 预约目的 -->
    <van-popup position="bottom" v-model="sexshow">
      <van-picker
        title="性别"
        show-toolbar
        :columns="sexList"
        @cancel="onCancel"
        @confirm="onConfirmSex"
      />
    </van-popup>
    <!-- 所在地 -->
    <van-popup position="bottom" v-model="areaListshow">
      <van-area title="所在地" @cancel="onCancel" @confirm="onConfirmArea" :area-list="areaList" />
    </van-popup>

    <div class="save" @click="btnClk()">
      <span>下一步</span>
    </div>
  </div>
</template>
<script>
import Area from "../../common/js/area.js";

export default {
  data() {
    return {
      active: 1,
      areaListshow: false,
      sexshow: false,
      sexList: [{ text: "男", key: 1 }, { text: "女", key: 2 }],
      areaList: Area,
      ajaxData: {
        username: "Yao",
        sex: { text: "", key: "" },
        age: 90,
        phone: "15890679823",
        address: {
          city: "",
          district_id: "",
          city_district_id_string: ""
        }
      }
    };
  },
  methods: {
    onCancel() {
      this.sexshow = false;
      this.areaListshow = false;
    },
    onConfirmSex(value) {
      console.log(value);
      this.ajaxData.sex = value;
      this.onCancel()
    },
    onConfirmArea(value) {
      console.log(value);
      let string = "";
      let city = "";
      let district_id = "";
      for (const key in value) {
        if (key == 0) {
          city = value[key].code;
        } else if (key == 1) {
          district_id = value[key].code;
        }
        string += value[key].name + " ";
      }
      this.ajaxData.address = {
        city: city,
        district_id: district_id,
        city_district_id_string: string
      };
      console.log(this.ajaxData.address);
      this.onCancel()
    },
    btnClk() {
      let that = this;
      let bool = true;
      if (this.ajaxData.username == "") {
        bool = false;
        that.$Toast("请输入姓名");
      } else if (this.ajaxData.sex.text == "") {
        bool = false;
        that.$Toast("请输入性别");
      } else if (this.ajaxData.age == "") {
        bool = false;
        that.$Toast("请输入年龄");
      } else if (this.ajaxData.phone == "") {
        bool = false;
        that.$Toast("请输入手机号");
      } else if (this.ajaxData.address.city_district_id_string == "") {
        bool = false;
        that.$Toast("请选择居住地");
      }
      if (bool) {
        this.$axios
          .post("/api/cases/casesfirst", {
            name: this.ajaxData.username,
            sex: this.ajaxData.sex.key,
            age: this.ajaxData.age,
            phone: this.ajaxData.phone,
            city: this.ajaxData.address.city,
            district_id: this.ajaxData.address.district_id,
            user_id:12,
          })
          .then(function(res) {
            console.log(res);

            if (res.data.code == 200) {
              that.$Toast(res.data.msg);
              setTimeout(function() {
                that.$router.push({ name: "basicInfor2", query: { freeApplyId: res.data.data.id }  });
              }, 1000);
            } else {
              that.$Toast(res.data.msg);
            }
            that.loading = false;
          });
      }
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../../common/css/globle.less");
#basicInfor1 {
  .steps {
    text-align: center;

    .top {
      padding-top: 15px;
      font-size: 13px;
      color: #ffffff;
      background: @globleColor;
      text-align: center;
      padding-bottom: 5px;
      > div {
        //   padding-bottom: 3px;
      }
    }
    .bottom {
      padding-bottom: 10px;
      color: #ffffff;
      background: @globleColor;
      .checked {
      }
      .slid {
        width: 110px;
        height: 1px;
        margin-bottom: 7px;
        display: inline-block;
        background: #ffffff;
      }
      .circle {
        width: 8px;
        height: 8px;
        display: inline-block;
        background: #ffffff;
        border-radius: 50px;
        margin-bottom: 4px;
      }
      .noActiveBG {
        background: #c3dca2;
      }
    }
  }

  .noActive {
    color: #c3dca2;
  }

  .infor {
    margin-top: 15px;
    margin-bottom: 50px;
  }

  .save {
    background: @globleColor;
    width: 90%;
    margin: auto;
    border-radius: 5px;
    padding: 15px 0;
    text-align: center;
    color: #ffffff;
  }
}
</style>


