<template>
  <div id="registerSetPassword">
    <div class="logo">
      <img src="../../../static/zdmLogo.png" alt />
    </div>
    <div class="body">
      <div class="mobile">
        <div class="right">
          <input
            @focus="focusFn('mobile')"
            class="input"
            v-model="repassword"
            type="number"
            placeholder="请设置密码,数字和字母组合6~16位"
          />
        </div>
        <van-icon
          class="globleIcon iconfont"
          size="22"
          color="#dddddd"
          class-prefix="my-icon"
          name="close-circle-fill"
        />
      </div>
      <div class="password">
        <div class="right">
          <input
            @focus="focusFn('password')"
            v-model="password"
            class="input"
            :type="inputType"
            placeholder="请重复确认密码"
          />
        </div>
        <van-icon
          class="globleIcon iconfont"
          size="22"
          color="#dddddd"
          class-prefix="my-icon"
          name="close-circle-fill"
        />
      </div>
    </div>
    <div class="registerBtn" @click="btnClk()">
      <span>提交</span>
    </div>
    <div class="typeLeftRight">
      <!-- <span>暂不设置</span> -->
    </div>
  </div>
</template>

<script>
import { Notify } from "vant";

export default {
  components: {},
  data() {
    return {
      inputType: "password",
      mobile:this.$route.query.mobile,
      smsCode: this.$route.query.smsCode,
      repassword:'',
      password:'',
    };
  },
  methods: {
    focusFn(inputType) {
      if (inputType == "mobile") {
        this.inputType = "password";
      } else if (inputType == "password") {
        this.inputType = "mobile";
      }
    },
    forgetPassword() {
      this.$router.push({ name: "forgetPasswordCode" });
    },
    btnClk() {
      let that = this;
      this.$axios
        .post("/api/user/register", {
          mobile: this.mobile,
          repassword: this.password,
          password: this.password,
          smsCode: this.smsCode
        })
        .then(function(res) {
          console.log(res);

          if (res.data.code == 200) {
            that.$Toast(res.data.msg);
          } else {
            that.$Toast(res.data.msg);
          }
          that.loading = false;
        });
    }
  }
};
</script>

<style lang="less" scoped>
@import url("../../common/css/globle.less");

#registerSetPassword {
  // width: 100%;
  height: 100vh;
  background: #ffffff;
  padding: 30px;
  .logo {
    text-align: center;
    margin: 50px 0;
    img {
      height: 54px;
    }
  }
  .mobile,
  .password {
    display: flex;
    border-radius: 5px;
    border: 1px solid #dddddd;
    padding: 15px;
    // padding-left: 15px;
    margin-bottom: 20px;
    .right {
      flex: 1;
      .input {
        width: 80%;
        border: 0px;
      }
      .input::-webkit-input-placeholder {
        color: #c4c4c4;
        font-size: 13px;
      }
      .input:-moz-placeholder {
        color: #c4c4c4;
        font-size: 13px;
      }
      .input:-ms-input-placeholder {
        color: #c4c4c4;
        font-size: 13px;
      }
    }
  }

  .registerBtn {
    background: @globleColor;
    width: 100%;
    margin: auto;
    border-radius: 5px;
    padding: 15px 0;
    text-align: center;
    color: #ffffff;
    margin-top: 35px;
  }

  .typeLeftRight {
    font-size: 13px;
    margin-top: 20px;
    text-align: center;
    color: @globleColor;
  }

  .footer {
    font-size: 12px;
    text-align: center;
    margin-top: 100px;
    span {
      color: @globleColor;
    }
  }
}
</style>
