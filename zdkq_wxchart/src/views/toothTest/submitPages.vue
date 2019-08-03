<template>
  <div id="page" class="submitPages">
    <div class="bordviewTop"></div>
    <div class="bordview">
      <div class="title">
        <span>您的测试结果正在传送中...</span>
      </div>

      <div class="item">
        <div class="pagetype2">
          <div :class="active=='A'?'selectbox active':'selectbox defult'" @click="selectcClk('A')">
            <van-row type="flex" align="center" style="text-align:center;">
              <van-col span="7">
                <span class="name">您的姓名:</span>
              </van-col>
              <van-col span="17">
                <span>
                  <input class="input" type="text" v-model="username" placeholder="请填写姓名" />
                </span>
              </van-col>
            </van-row>
          </div>
        </div>
        <div class="pagetype2">
          <div :class="active=='B'?'selectbox active':'selectbox defult'" @click="selectcClk('B')">
            <van-row type="flex" align="center" style="text-align:center;">
              <van-col span="7">
                <span class="name">手机号码:</span>
              </van-col>
              <van-col span="17">
                <span>
                  <input class="input" v-model="mobile" type="text" placeholder="请填写手机号码" />
                </span>
              </van-col>
            </van-row>
          </div>
        </div>
      </div>
    </div>
    <img class="btnNext" v-show="hidshow" src="../../../static/submit.png" @click="btnClk()" alt />
  </div>
</template>
<script>
import { Toast } from "vant";

export default {
  data() {
    return {
      active: "",
      username: "",
      mobile: "",
      docmHeight: 0, //默认屏幕高度

      showHeight: 0, //实时屏幕高度

      hidshow: true, //显示或者隐藏footer,

      isResize: false //默认屏幕高度是否已获取
    };
  },
  watch: {
    showHeight: function() {
      if (this.docmHeight >= this.showHeight) {
        this.hidshow = false;
      } else {
        this.hidshow = true;
      }
    }
  },
  mounted() {
    window.onresize = () => {
      return (() => {
        if (!this.isResize) {
          //默认屏幕高度
          this.docmHeight = document.documentElement.clientHeight;
          this.isResize = true;
        } //实时屏幕高度
        this.showHeight = document.body.clientHeight;
        console.log(this.showHeight);
      })();
    };
  },
  methods: {
    selectcClk(val) {
      console.log(val);
      this.active = val;
    },
    btnClk() {
      // console.log(this.$store.state.toothTestData);
      let that = this;
      const toast = Toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: true, // 禁用背景点击
        loadingType: "spinner",
        message: "提交中..."
      });
      let bool = true;

      if (this.username == "") {
        bool = false;
        Toast("请输入姓名!");
        return;
      } else if (this.mobile == "") {
        bool = false;
        Toast("请输入手机号!");
        return;
      } else if (!/^1[3456789]\d{9}$/.test(this.mobile)) {
        Toast("手机号有误!");
        bool = false;
        return;
      }
      if (!bool) {
        return;
      }
      let second = 3;
      this.$axios
        .post("/ebapi/Reply_api/relpy", {
          username: this.username,
          mobile: this.mobile,
          content: JSON.stringify(this.$store.state.toothTestData)
        })
        .then(function(res) {
          console.log(res);

          if (res.data.code == 200) {
            const timer = setInterval(() => {
              second--;
              if (second) {
                toast.message = `倒计时 ${second} 秒`;
              } else {
                clearInterval(timer);
                Toast.clear();
                that.$router.push({
                  name: "getProject",
                  query: { getProject: res.data.data }
                });
              }
            }, 1000);
          } else {
            Toast(res.data.msg);
          }
        });
    }
  }
};
</script>
<style lang="less" scoped>
.submitPages {
  width: 100%;
  height: 100vh;
  background: url("../../../static/BG@2xtest.png");
  background-size: 100% 100%;
  .bordviewTop {
    height: 100px;
  }
  .bordview {
    height: 220px;
    margin: auto;
    margin: 0 5px;
    padding: 25px;
    background: url("../../../static/testBg.png");
    background-size: 100% 100%;
    border-radius: 5px;
    .title {
      font-size: 14px;
      text-align: center;
      margin-bottom: 30px;
    }
    .item {
      margin-top: 60px;
    }
    //选择类型2 文字
    .pagetype2 {
      margin-bottom: 20px;
      .name {
        font-size: 13px;
        padding: 0 10px;
      }
      .input {
        width: 150px;
      }
      .input::-webkit-input-placeholder {
        // color: #00a7fb;
        font-size: 13px;
      }
      .input:-moz-placeholder {
        // color: #00a7fb;
        font-size: 13px;
      }
      .input:-ms-input-placeholder {
        // color: #00a7fb;
        font-size: 13px;
      }

      .active {
        color: #00a7fb;
        input {
          border: 1px solid #00a7fb;
          padding: 8px 15px;
          border-radius: 25px;
        }
      }
      .defult {
        color: #767676;
        input {
          border: 1px solid #767676;
          padding: 8px 15px;
          border-radius: 25px;
        }
      }
    }
  }
  .btnNext {
    width: 250px;
    position: fixed;
    bottom: 0px;
    left: calc(50% - 125px);
  }
}
</style>


