<template>
 <div id="login" v-cloak>
    <van-cell-group>
      <van-field
        v-model="username"
        clearable
        label="用户名"
        placeholder="请输入用户名"
      />

      <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
      />
    </van-cell-group>

    <div class="btn_div">
        <van-button round size="large" @click="login()" type="danger">登陆</van-button>
    </div>

 </div>
</template>

<script>

export default {
  name: "login",
  components: {},
  data() {
    return {
      username: '',
      password:'',
    };
  },
  methods:{
    login:function(){
      var _this = this
        if (_this.username==''||_this.password=='') {
          Toast('请输入完整');
        } else {
          _this.$api
          .APIPOST(_this.$URL.HTTPS.LOGIN, "type=top&key=123456")
          .then(res => {
            console.log(res);
            console.log(_this.$store.state.token)
            // _this.$store.state.token =  res.data.data.token;
            _this.$store.commit("tokenFn",res.data.data.token)
            console.log(_this.$store.state.token)
          
          });
          
        }
    },

  },
};
</script>

<style>
.btn_div{
  width: 100%;
  margin-top: 100px;
  text-align: center;
}
</style>

