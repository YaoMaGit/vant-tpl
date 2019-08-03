<template>
  <div id="setMobile">
    <div class="top">
      <div>
        <img src="../../../../static/vipcenter/mobileicon@2x.png" alt />
      </div>
      <div>为了您的账户安全，需要验证您的手机</div>
      <div>155*****699</div>
    </div>
    <div class="inputBox">
      <div class="left">验证码</div>
      <div class="center">
        <input type="text" placeholder="请输入验证码" />
      </div>
      <div class="right">获取验证码</div>
      <!-- 60秒获取 -->
    </div>
    <div class="subtitle">
      <span>旧号码已停用，收不到验证码？</span>
    </div>
    <div class="save" @click="btnClk()">
      <span>下一步</span>
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
  methods:{
    btnClk(){
      this.$router.push({name:'setMobile2'})
    }
  }
};
</script>

<style lang="less" scoped>
@import url("../../../common/css/globle.less");
#setMobile {
  font-size: 14px;
  .top{
    text-align: center;
    margin-bottom: 15px;
    img{
      height: 110px;
      margin: 15px 0;
      margin-top: 30px;
    }
  }
  .inputBox {
    display: flex;
    padding: 20px 0px;
    background: #ffffff;
    text-align: center;
    border-top: 15px solid #ededed;
    font-size: 14px;
    .left {
      flex: 2;
      text-align: center;
    }
    .center {
      flex: 5;
      text-align: center;
      input {
        border: 0px;
      }
    }
    .right {
      flex: 3;
      text-align: center;
      border-left: 1px solid #dddddd;
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
    border-radius: 5px;
    padding: 15px 0;
    text-align: center;
    color: #ffffff;
  }
}
</style>
