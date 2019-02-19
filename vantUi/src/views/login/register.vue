<template>
  <div id="login" v-cloak>
    <van-nav-bar title="用户注册" left-arrow>
      <!-- <van-icon name="search" slot="right" /> -->
    </van-nav-bar>
    <van-cell-group>
      <van-field v-model="username" clearable label="用户名" placeholder="请输入用户名"/>

      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码"/>
    </van-cell-group>

    <div class="btn_div">
      <van-button round size="large" @click="login()" type="danger" :loading="loading">注册</van-button>
    </div>
  </div>
</template>

<script>
import {Toast} from 'vant'
import axios from 'axios'

export default {
  components: {},
  data() {
    return {
      loading:false,
      username: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      var _this = this;
      
      if (_this.username == "" || _this.password == "") {
        Toast("请输入完整");
      } else {
        // _this.$api
        // .APIPOST(_this.$URL.HTTPS.LOGIN, "type=top&key=123456")
        // .then(res => {
        //   console.log(res);
        //   console.log(_this.$store.state.token)
        //   // _this.$store.state.token =  res.data.data.token;
        //   _this.$store.commit("tokenFn",res.data.data.token)
        //   console.log(_this.$store.state.token)

        // });
        _this.loading = true
        axios
          .post("/user/register", {
            params: {
              userName: _this.username,
              password:_this.password,
            }
          })
          .then(function(res) {
            console.log(res);
            if (res.code==500) {
              Toast(res.data.massage);
            } else {
              Toast(res.data.massage);
            }
            _this.loading = false
          })
          .catch(function(error) {
            console.log(error);
            _this.loading = false
            Toast('注册失败！');
          });
      }
    }
  }
};
</script>

<style>
.btn_div {
  width: 100%;
  margin-top: 100px;
  text-align: center;
}
</style>

