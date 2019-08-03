<template>
  <div id="forgetPassword">
    <div class="top">
      <div>请输入你的账号绑定的手机号</div>
    </div>

    <div class="inputBox">
      <div class="left">新密码</div>
      <div class="center">
        <input class="input" type="text" placeholder="请输入新密码" />
      </div>
      <div class="right"></div>
      <!-- 60秒获取 -->
    </div>
    <div class="inputBox">
      <div class="left">确认密码</div>
      <div class="center">
        <input class="input" type="text" placeholder="再次确认新密码" />
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
export default {
  components: {},
  data() {
    return {
      showPopup: false
    };
  },
  methods: {
    btnClk() {
      this.$router.push({ name: "forgetPassword2" });
    }
  }
};
</script>

<style lang="less" scoped>
@import url("../../common/css/globle.less");
#forgetPassword {
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
      flex: 3;
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
