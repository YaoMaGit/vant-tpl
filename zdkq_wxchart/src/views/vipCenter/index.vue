<template>
  <div id="vipCenter">
    <div class="topHeader" @click="userSettingClk()">
      <van-row type="flex" align="center">
        <van-col span="5">
          <img
            src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3710565464,1963065772&fm=26&gp=0.jpg"
            alt
          />
        </van-col>
        <van-col span="18">
          <span class="name">
            <span>王大锤678</span>
            <!-- <span>登录/注册</span> -->
          </span>
        </van-col>
        <van-col span="1">
          <van-icon color="#C3DCA2" name="arrow" />
        </van-col>
      </van-row>
    </div>
    <div class="btnTab">
      <van-row style="text-align:center" type="flex" align="center">
        <van-col span="8">
          <div @click="tabClk('myAppointment')">
            <div>
              <img src="../../../static/vipcenter/clock@3x.png" alt />
            </div>
            <div>我的预约</div>
          </div>
        </van-col>
        <van-col span="8">
          <div @click="tabClk('coupon')">
            <div>
              <img src="../../../static/vipcenter/folder@3x.png" alt />
            </div>
            <div>优惠券</div>
          </div>
        </van-col>
        <van-col span="8">
          <div @click="tabClk('myReward')">
            <div>
              <img src="../../../static/vipcenter/gift@3x.png" alt />
            </div>
            <div>我的奖励</div>
          </div>
        </van-col>
      </van-row>
    </div>
    <div class="advance">广告</div>
    <div class="linkCell">
      <van-cell title="在线客服" icon="service-o" is-link to="customerService" />
      <van-cell title="常见问题" icon="question-o" is-link to="question" />
      <van-cell title="关于我们" icon="friends-o" is-link to="aboutWe" />
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
  methods:{
    tabClk(name){
      this.$router.push({name:name})
    },
    userSettingClk(){
      this.$router.push({name:'userSetting'})
    }
  }
};
</script>

<style lang="less" scoped>
@import url("../../common/css/globle.less");
#vipCenter {
  .topHeader {
    background: @globleColor;
    padding: 35px 30px;
    .name {
      color: #ffffff;
      font-size: 20px;
    }
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
  }
  .btnTab {
    background: #ffffff;
    padding: 15px;
    img {
      width: 30px;
      margin-bottom: 5px;
    }
    div {
      font-size: 13px;
    }
  }
  .advance {
    background: #cccccc;
    height: 70px;
    border-radius: 50px;
    text-align: center;
    margin: 15px 5px;
  }
  .linkCell {
    van-icon left-icon {
      color: #c4c4c4 !important;
    }
  }
}
</style>
