<template>
  <div id="setPassword">
    <div class="inputBox">
      <div class="left">旧密码</div>
      <div class="center">
        <input type="text" placeholder="请填写旧密码" />
      </div>
      <div class="right">
        <van-icon
          class="globleIcon iconfont successIcon"
          class-prefix="my-icon"
          name="eye-fill"
        />
      </div>
    </div>
    <div class="inputBox">
      <div class="left">新密码</div>
      <div class="center">
        <input type="text" placeholder="请输入新密码，数字和字母组合6~16位" />
      </div>
      <div class="right">
        <van-icon
          class="globleIcon iconfont successIcon"
          class-prefix="my-icon"
          name="eye-fill"
        />
      </div>
    </div>
    <div class="inputBox">
      <div class="left">确认密码</div>
      <div class="center">
        <input type="text" placeholder="请重复确认新密码" />
      </div>
      <div class="right">
        <van-icon
          class="globleIcon iconfont successIcon"
          class-prefix="my-icon"
          name="eye-close-line"
        />
      </div>
    </div>
    <div class="subtitle">
      <span>忘记旧密码？</span>
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
      // this.$router.push({ name: "setPassword2" });
    }
  }
};
</script>

<style lang="less" scoped>
@import url("../../../common/css/globle.less");
#setPassword {
  font-size: 14px;
  .top {
    text-align: center;
    margin-bottom: 15px;
  }
  .inputBox {
    display: flex;
    padding: 20px 0px;
    background: #ffffff;
    border-bottom: 1px solid #ededed;
    font-size: 14px;
    .left {
      flex: 3;
      text-align: center;
    }
    .center {
      flex: 7;
      input {
        border: 0px;
      }
    }
    .right {
      flex: 1;
      text-align: center;
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
