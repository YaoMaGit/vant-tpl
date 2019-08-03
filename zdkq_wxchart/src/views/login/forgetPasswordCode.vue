<template>
  <div id="forgetPasswordCode">
    <div class="top">
      <div>请输入你的账号绑定的手机号</div>
    </div>

    <div class="inputBox">
      <div class="left">
        <b>+86</b>
      </div>
      <div class="center">
        <input class="input" type="text" v-model="mobile" placeholder="请输入新手机号" />
      </div>
      <div class="right"></div>
      <!-- 60秒获取 -->
    </div>
    <div class="inputBox">
      <div class="left">验证码</div>
      <div class="center">
        <input class="input" type="text" v-model="smsCode" placeholder="请输入验证码" />
      </div>
      <div class="right" @click="getCodeClk()">获取验证码</div>
      <!-- 60秒获取 -->
    </div>
    <div class="inputBox">
      <div class="left">新密码</div>
      <div class="center">
        <input class="input" type="text" v-model="repassword" placeholder="请输入新密码" />
      </div>
      <div class="right"></div>
      <!-- 60秒获取 -->
    </div>
    <div class="inputBox">
      <div class="left">确认密码</div>
      <div class="center">
        <input class="input" type="text" v-model="password" placeholder="再次确认新密码" />
      </div>
      <div class="right"></div>
      <!-- 60秒获取 -->
    </div>
    <div class="save" @click="btnClk()">
      <span>保存</span>
    </div>
  </div>
</template>
    
<script>
import { setTimeout } from 'timers';
export default {
  components: {},
  data() {
    return {
      mobile: "",
      smsCode: "",
      repassword: "",
      password: ""
    };
  },
  methods: {
    getCodeClk() {
      let that = this;
      this.$axios
        .post("/api/smsSend", {
          mobile: this.mobile,
          scene: 2
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
        this.$axios
          .post("/api/user/findPwd", {
            mobile: this.mobile,
            repassword: this.repassword,
            password: this.password,
            smsCode: this.smsCode
          })
          .then(function(res) {
            console.log(res);

            if (res.data.code == 200) {
              that.$Toast(res.data.msg);
              setTimeout(function(){
                 that.$router.push({name:'login'})
              },1000)
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
#forgetPasswordCode {
  font-size: 14px;
  .top {
    padding: 15px;
    color: #999999;
    font-size: 15px;
  }
  .inputBox {
    display: flex;
    padding: 20px 0px;
    background: #ffffff;
    text-align: center;
    border-bottom: 1px solid #ededed;
    font-size: 14px;
    .left {
      flex: 2;
      text-align: center;
    }
    .center {
      flex: 5;
      text-align: center;
      .input {
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
    .right {
      flex: 3;
      text-align: center;
      color: @globleColor;
    }
  }
  .subtitle {
    padding: 25px 10px 60px 0;
    span {
      float: right;
      color: @globleColor;
    }
  }

  .save {
    background: @globleColor;
    width: 90%;
    margin: auto;
    margin-top: 25px;
    border-radius: 5px;
    padding: 15px 0;
    text-align: center;
    color: #ffffff;
  }
}
</style>
