<template>
  <div id="userSetting">
    <div class="header" @click="showPopup=!showPopup">
      <div>
        <van-row>
          <van-col span="4">头像</van-col>
          <van-col span="14"></van-col>
          <van-col span="4">
            <img
              src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3710565464,1963065772&fm=26&gp=0.jpg"
              alt
            />
          </van-col>
          <van-col span="2">
            <van-icon color="#969799" name="arrow" />
          </van-col>
        </van-row>
      </div>
    </div>
    <div class="linkCell">
      <van-cell title="用户名" value="王大锤678" is-link to="setUsername" />
      <van-cell title="手机号" value="15517893699" is-link to="setMobile" />
      <van-cell title="登录密码" value="未设置" is-link to="setPassword" />
    </div>

    <div class="footer">
      <span>退出登录</span>
    </div>

    <van-popup v-model="showPopup" position="bottom">
      <div class="popContent">
        <span>拍照</span>
      </div>
      <div class="popContent">
        <span>从手机相册选择</span>
      </div>
      <div @click="showPopup=!showPopup" class="cancle">
        <span>取消</span>
      </div>
    </van-popup>
  </div>
</template>
    
<script>
export default {
  components: {},
  data() {
    return {
      showPopup: false
    };
  }
};
</script>

<style lang="less" scoped>
#userSetting {
  font-size: 14px;
  .header {
    background: #ffffff;
    height: 70px;

    padding-left: 15px;
    line-height: 70px;
    img {
      width: 50px;
      height: 50px;
      margin-top: 10px;
      border-radius: 50%;
    }
    div {
      height: 100%;
      border-bottom: 1px solid #ebedf0;
    }
  }
  .footer {
    padding: 20px 0px;
    background: #ffffff;
    text-align: center;
    margin-top: 30px;
  }

  .popContent {
    padding: 20px 0px;
    background: #ffffff;
    text-align: center;
    font-size: 18px
  }
  .popContent:nth-child(1) {
    border-bottom: 1px solid #ebedf0;
  }
  .cancle {
    padding: 20px 0px;
    background: #ffffff;
    text-align: center;
    border-top: 15px solid #ededed;
    font-size: 18px
  }
}
</style>
