<template>
  <div id="login">
    <div class="logo">
      <img src="../../../static/zdmLogo.png" alt />
    </div>
    <div class="body">
      <div class="mobile">
        <div class="left">
          <van-icon class="globleIcon iconfont" size="22" class-prefix="my-icon" name="shouji" />
        </div>
        <div class="right">
          <input  class="input" type="number" v-model="mobile" placeholder="请输入手机号" />
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
        <div class="left">
          <van-icon class="globleIcon iconfont" size="22" class-prefix="my-icon" name="mima" />
        </div>
        <div class="right">
          <input  class="input" v-model="password" :type="inputType?'password':'text'" placeholder="请输入密码" />
        </div>
        <!-- <van-icon
          class="globleIcon iconfont"
          size="22"
          class-prefix="my-icon"
          name="eye-close-line"
        />-->

        <van-icon class="globleIcon iconfont" size="22" @click="inputType=!inputType" class-prefix="my-icon" :name="inputType?'eye-close-line':'eye-fill'" />
      </div>
    </div>
    <div class="loginBtn" @click="btnClk()">
      <span>登录</span>
    </div>
    <div class="typeLeftRight">
      <span class="left"  @click="forgetPassword('register')">短信验证登录 / 注册</span>
      <span class="right" @click="forgetPassword('forgetPasswordCode')">找回密码</span>
    </div>
    <div class="footer" @click="forgetPassword('xieyi')">
      点击登录即表示同意
      <span>值得美使用协议、隐私政策</span>
    </div>
  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {
      inputType: true,
      mobile:'15890679823',
      password:'222222',
    };
  },
  methods: {
    btnClk(){
      let that=this
      this.$axios
        .post("/api/user/login", {
          mobile:this.mobile,
          password: this.password,
        })
        .then(function(res) {
          console.log(res);

          if (res.data.code == 200) {
            localStorage.setItem("TOKEN",res.data.data.api_token)
            that.$Toast(res.data.msg);
          } else {
            that.$Toast(res.data.msg);
          }
          that.loading = false;
        });
    },
    // focusFn(inputType) {
    //   if (inputType=='mobile') {
    //     this.inputType="password"
    //   } else if (inputType=='password')  {
    //     this.inputType="mobile"
    //   }
    // },
    forgetPassword(name){
      this.$router.push({name:name})
    },
  }
};
</script>

<style lang="less" scoped>
@import url("../../common/css/globle.less");

#login {
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
    margin-bottom: 20px;
    .left {
      flex: 1;
      // background: red;
      padding-right: 10px;
      border-right: 1px solid #dddddd;
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

  .loginBtn {
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
