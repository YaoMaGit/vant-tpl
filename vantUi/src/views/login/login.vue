<template>
 <div id="login" v-cloak>
        <div id="hea">
          <header id="aui-header">
              <div class="aui-pull-right aui-btn aui-btn-outlined" style="border: none;">
                  <span class="aui-iconfont aui-icon-close" style="margin-top:1rem;font-size:0.9rem"></span>
              </div>

          </header>

          <div class="logo">
              <div class="lg">
                  <img src="../../../static/images/logo.png">
              </div>
              <div class="logo_a">最专业淘客app</div>
          </div>
          <div class="footer">
              <div class="footer_a" style="background:red;">
                  <img src="../../../static/images/login_weixin_icon.png" alt="" class="wx">
                  <div>微信登录</div>
              </div>
              <div class="user_xieyi" tapmode>登录注册即表示同意《用户隐私协议》</div>
              <div class="line">
                  <div tapmode><i class="aui-iconfont aui-icon-my"></i> 新用户注册</div>
                  <div @click="login()" tapmode><i class="aui-iconfont aui-icon-mobile"></i>  手机号登录</div>
              </div>
          </div>
        </div>

        <div class="cont_logo">
          <header id="aui-header">
              <div class="aui-pull-right aui-btn aui-btn-outlined" style="border: none;">
                  <span class="aui-iconfont aui-icon-close" style="margin-top:1rem;font-size:0.9rem;color:#fff;"></span>
              </div>
              <div class="aui-pull-right aui-btn aui-btn-outlined" style="border: none;">
                  <span class="aui-iconfont aui-icon-close" style="margin-top:1rem;font-size:0.9rem;color:#fff;"></span>
              </div>

          </header>
        </div>
    </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "login",
  components: {}
};
</script>

<style>

.footer {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  bottom: 100px;
  z-index: 9999;
}

img {
  display: inline !important;
}
[v-cloak] {
  display: none;
}
.line div {
  display: flex;
  align-items: center;
  justify-content: center;
}

.cont_logo {
  height: 100%;
  /*background: #ccc;*/
}
.logo_white {
  margin-top: 40px;
  font-size: 20px;
  color: #fff;
}
.user_white {
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  margin-top: 10px;
}
.footer_b {
  margin-bottom: 80px;
}
.logo_line {
  width: 100%;
  /*text-align: center;*/
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.logo_line span {
  width: 80%;
  padding: 12px 0;
  border-radius: 100px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #777;
  background: #fff;
}
.logo_line i {
  display: inline-block;
  margin-right: 5px;
}
.cont_logo .lg img {
  border: 2px solid rgba(255, 0, 0, 0.1);
  border-radius: 10px;
}
.mobile_icon {
  margin-right: 5px;
  margin-bottom: 3px;
}
.aui-content {
  margin-top: 0 !important;
}
.aui-bar-nav {
  color: #333;
  background: #fff;
  border-bottom: 1px solid #efefef;
  position: fixed;
}

.aui-bar-nav .aui-btn.aui-btn-outlined {
  border-width: 0;
}

.aui-bar-nav .aui-btn .aui-iconfont {
  color: #333;
}
.aui-list {
  background: none !important;
}
#hea {
  width: 100%;
  /*background: #fff;*/
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100% 100%;
}

.logo {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.lg img {
  float: left;
  width: 72px;
  margin-top: 100%;
}

.logo_a {
  margin-top: 40px;
  font-size: 20px;
  color: #333;
}

.footer h4 {
  float: left;
  margin-bottom: 35pt;
  margin-top: 100pt;
  font-weight: 100;
}

.footer_a {
  width: 80%;
  height: 46px;
  line-height: 38px;
  padding: 5px;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  background-image: -moz-linear-gradient(
    -33.69deg,
    rgb(255, 101, 68) 0%,
    rgb(255, 50, 74) 100%
  );
  background-image: -webkit-linear-gradient(
    -33.69deg,
    rgb(255, 101, 68) 0%,
    rgb(255, 50, 74) 100%
  );
  background-image: -ms-linear-gradient(
    -33.69deg,
    rgb(255, 101, 68) 0%,
    rgb(255, 50, 74) 100%
  );
  box-shadow: 0.279px 1px 10px 0px #ddd;
  margin-bottom: 12px;
}

.footer_a .wx {
  float: left;
  width: 28px;
  margin-right: 10px;
}

.footer_a .shouji {
  float: left;
  margin-left: 60pt;
  width: 40pt;
  height: 40pt;
  background-color: #43caec;
  border-radius: 100%;
}

.footer_a .shouji img {
  width: 25pt;
  height: 30pt;
  float: left;
  margin: 5pt 8pt;
}

.line {
  width: 80%;
  height: 50px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.line div {
  width: 100%;
  height: 46px;
  color: #999;
  margin-top: 40px;
  text-align: center;
  font-size: 0.7rem;
}

.line .mobile_icon {
  vertical-align: top;
}

#app {
  background: #fff;
}

.user_xieyi {
  color: #999;
  font-size: 0.65rem;
}

.user_xieyi span {
  color: #ff5a45;
}

/*register*/
.aui-list .aui-list-item-label,
.aui-list .aui-list-item-label-icon {
  width: auto;
}
input {
  background: none !important;
  font-size: 0.75rem !important;
  height: 2.5rem !important;
}

.aui-list .aui-list-item {
  background: none !important;
  border-bottom: 1px solid #efefef;
}

#fun_b {
  /* width: 5rem; */
  border-radius: 1.2rem;
  border: 1px solid #999 !important;
  color: #999 !important;
  background: none !important;
  font-size: 0.6rem;
  height: 1.3rem;
  line-height: 1.3rem;
}

#zhantie {
  width: 5rem;
  border-radius: 1.2rem;
  background-image: -moz-linear-gradient(
    -33.69deg,
    rgb(255, 101, 68) 0%,
    rgb(255, 50, 74) 100%
  );
  background-image: -webkit-linear-gradient(
    -33.69deg,
    rgb(255, 101, 68) 0%,
    rgb(255, 50, 74) 100%
  );
  background-image: -ms-linear-gradient(
    -33.69deg,
    rgb(255, 101, 68) 0%,
    rgb(255, 50, 74) 100%
  );
  color: #fff;
}
#content {
  text-align: left;
  padding: 10px 15px;
}
#content p {
  margin: 10px 0;
}
.ThemeTextColor {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>

