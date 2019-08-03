<template>
  <div id="freeApply">
    <!-- 免费初审 -->
    <div class="item" @click="detailClk()" v-for="(item,index) in listdata" :key="index">
      <span class="itemStatus shenhezhong" v-if="item.status">审核中</span>
      <span class="itemStatus ok" v-if="item.status">未通过</span>
      <span class="itemStatus no" v-if="item.status">已通过</span>
      <van-row>
        <van-col span="5" style="text-align: center;">
          <div class="img">
            <img
              class="imgimg"
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563171330420&di=5e51c5fddccdd5310c88f3a2a565d9fe&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20160408%2Fe7a90a78169a48ba9b7d3404adc7855c_th.jpg"
              alt
            />
          </div>
        </van-col>
        <van-col span="19">
          <div class="top">
            <span class="name">王大锤</span>
            <span class="sex">
              <van-icon class="iconfont" color="#58C4E1" class-prefix="my-icon" name="nan" />
              <!-- <van-icon class="iconfont" color="#F6808C" class-prefix="my-icon" name="nv" /> -->
            </span>
            <span class="age">29岁</span>
          </div>
          <div class="bottom">
            <span>
              <van-icon class="globleIcon iconfont" class-prefix="my-icon" name="shouji" />
              <span>15539684566</span>
            </span>
            <span class="address">
              <van-icon class="globleIcon iconfont" class-prefix="my-icon" name="pin-outline" />
              <span>郑州市·金水区</span>
            </span>
          </div>
        </van-col>
      </van-row>
    </div>

    <div class="addItem" @click="addCaseClk()">
      <div>
        <van-icon class="globleIcon iconfont" size="32" class-prefix="my-icon" name="add-fill" />
      </div>
      <div>申请病例</div>
    </div>

    <div class="nomoreAddItem" @click="addCaseClk()">
      <div>
        <van-icon class="globleIcon iconfont" size="42" class-prefix="my-icon" name="add-fill" />
      </div>
      <div>免费申请</div>
    </div>
    <div
      style="width:240px;margin:auto;margin-top:15px;text-align:center;"
    >亲，您还没有免费申请的列表哦~ 请点击免费申请病历</div>
    <div class="btn">
      <span>联系客服</span>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      value: ""
    };
  },
  mounted() {
    let that = this;
    that.$axios
      .get("/api/cases/caseslist", {
        params: {
          user_id: 12
        }
      })
      .then(function(res) {
        console.log(res);
        if (res.data.code == 200) {
          that.listdata = res.data.data.caseList;
        } else {
          that.$Toast(res.data.msg);
        }
        that.loading = false;
      });
  },
  methods: {
    detailClk() {
      this.$router.push({ name: "basicInforDetail" });
    },
    addCaseClk() {
      this.$router.push({ name: "basicInfor1" });
    },
    btnClk() {
      let that = this;
      let bool = true;
      if (this.mobile == "") {
        bool = false;
        that.$Toast("请输入手机号");
      } else if (this.repassword == "") {
        bool = false;
        that.$Toast("请输入密码");
      } else if (this.password == "") {
        bool = false;
        that.$Toast("请输入密码");
      } else if (this.smsCode == "") {
        bool = false;
        that.$Toast("请输入验证码");
      }
      if (bool) {
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import url("../../common/css/globle.less");

#freeApply {
  .item {
    padding: 20px;
    margin: 10px;
    box-shadow: 0px 0px 10px 0px rgba(42, 42, 42, 0.1);
    border-radius: 5px;
    background: #ffffff;
    font-size: 14px;
    position: relative;
    .img {
      height: 50px;
      overflow: hidden;
      .imgimg {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
      }
    }
    .top {
      margin-bottom: 5px;
      .name {
        font-size: 18px;
      }
      .sex {
        padding-left: 5px;
      }
      .age {
        padding-left: 20px;
      }
    }
    .bottom {
      .address {
        padding-left: 20px;
      }
    }
  }

  .itemStatus {
    position: absolute;
    right: 0px;
    top: 10px;
    color: #ffffff;
    padding: 3px 10px;
    display: inline-block;
  }
  .shenhezhong {
    background: #ffbb3e;
  }
  .no {
    background: #df6353;
  }
  .ok {
    background: #8cc63f;
  }

  .addItem {
    margin: 10px;
    padding: 17px;
    border: 1px dashed @globleColor;
    border-radius: 5px;
    color: @globleColor;
    text-align: center;
  }
  .nomoreAddItem {
    width: 120px;
    padding: 30px 10px;
    margin: auto;
    border: 1px dashed @globleColor;
    border-radius: 5px;
    color: @globleColor;
    text-align: center;
  }
  .btn {
    text-align: center;
    background: @globleColor;
    border-radius: 50px;
    width: 240px;
    margin: auto;
    color: #ffffff;
    padding: 20px 0;
    font-size: 14px;
    margin-top: 150px;
  }
}
</style>
