<template>
  <div id="register">
    <div class="logo">
      <img src="../../../static/zdmLogo.png" alt />
    </div>
    <div class="body">
      <div class="mobile">
        <div class="left">
          <b>+86</b>
        </div>
        <div class="right" style="padding-top: 3px;">
          <input
            @focus="focusFn('mobile')"
            class="input"
            v-model="mobile"
            type="number"
            placeholder="请输入手机号"
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
            class="input"
            v-model="smsCode"
            :type="inputType"
            placeholder="请输入密码"
          />
        </div>
        <div class="getCode" @click="getCodeClk()">获取验证码</div>
      </div>
    </div>
    <div class="registerBtn" @click="nextClk()">
      <span>下一步</span>
    </div>
    <div class="typeLeftRight">
      <span class="left" @click="forgetPassword('login')">账号密码登录</span>
      <span class="right" @click="forgetPassword('noSmsCode')">收不到验证码？</span>
    </div>
    <div class="footer"  @click="forgetPassword('xieyi')">
      点击登录即表示同意
      <span>值得美使用协议、隐私政策</span>
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
      mobile: "15890679823",
      smsCode: ""
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
    forgetPassword(name) {
      this.$router.push({ name: name });
    },
    getCodeClk() {
      let that = this;
      this.$axios
        .post("/api/smsSend", {
          mobile: this.mobile,
          scene: 1
        })
        .then(function(res) {
          console.log(res);

          if (res.data.code == 200) {
            that.$Toast(res.data.data.code);
          } else {
            that.$Toast(res.data.msg);
          }
        });
    },
    nextClk() {
      if (this.smsCode == "") {
        this.$Toast("请输入验证码");
      } else {
        this.$router.push({ name: "registerSetPassword",query:{mobile:this.mobile,smsCode:this.smsCode} });
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import url("../../common/css/globle.less");

#register {
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
    text-align: center;
    border-radius: 5px;
    border: 1px solid #dddddd;
    padding: 15px;
    padding-left: 15px;
    margin-bottom: 20px;
    .left {
      flex: 1;
      // background: red;
      padding-right: 15px;
      border-right: 1px solid #dddddd;
      padding-top: 5px;
    }
    .getCode {
      font-size: 15px;
      color: @globleColor;
    }
    .right {
      flex: 9;
      .input {
        width: 80%;
        padding-left: 0px;
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
    .left {
      color: @globleColor;
    }
    .right {
      color: #666666;
      float: right;
    }
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
