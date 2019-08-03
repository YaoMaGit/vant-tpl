<template>
  <div id="getProject" class="getProject">
    <div style="padding-bottom:50px">
      <div class="bordviewTitle">
        <span>
          {{getData[0].project_remark}}
          <span>
            请联系医生
            <span
              class="telphone"
              @click="callClk(getData[0].project_tel)"
            >{{getData[0].project_tel}}</span>
          </span>
        </span>
      </div>
      <div class="bordview">
        <div class="title">
          <span>方案</span>
        </div>
        <div class="content">
          <div>
            <span class="left">牙齿可能存在的问题：</span>
            <span class="right">{{getData[0].project_title}}</span>
          </div>
          <div>
            <span class="left">预估治疗周期：</span>
            <span class="right" style="color:#ff0000">{{getData[0].project_time}}</span>
          </div>
          <div>
            <span class="left">值得美报价约：</span>
            <span class="right">{{getData[0].project_price}}元</span>
          </div>
          <div>
            <span class="left">治疗方式：</span>
            <span class="right ways">{{getData[0].project_content}}</span>
          </div>
        </div>
      </div>

      <div class="btnNext">
        <img class="btnShare" src="../../../static/shareBtn.png" @click="btnClk()" alt />
        <img class="btnYy" src="../../../static/yuyueBtn.png" @click="btnClk()" alt />
      </div>
    </div>
    <van-overlay id="overMask" @click="btnClk()" />
    <img v-if="show" class="share" src="../../../static/share.png" alt />
  </div>
</template>
<script>
export default {
  components: {
    // Overlay
  },
  data() {
    return {
      getData: this.$route.query.getProject,
      show: false
    };
  },
  mounted() {
    console.log(this.$route.query.getProject);
  },
  methods: {
    selectcClk(val) {
      console.log(val);
      this.active = val;
    },
    btnClk() {
      this.show = !this.show;
      if (this.show) {
        document.getElementById("overMask").style.display = "block";
      } else {
        document.getElementById("overMask").style.display = "none";
      }
    },
    callClk(val) {
      Dialog.confirm({
        message: val
      })
        .then(() => {
          // on confirm
          window.location.href = `tel://${val}`;
        })
        .catch(() => {
          // on cancel
        });
    }
  }
};
</script>
<style lang="less" scoped>
.getProject {
  width: 100%;
  height: 100vh;
  background: url("../../../static/BG@2xtest.png");
  background-size: 100% 100%;
  overflow: scroll;
  .bordviewTitle {
    font-size: 13px;
    padding: 15px 15px 0 15px;
    text-indent: 2em;
    .telphone {
      color: #ff0000;
    }
  }
  .bordviewTop {
    height: 100px;
  }
  .bordview {
    margin: auto;
    margin: 0 5px;
    margin-top: 30px;
    padding: 22px;
    background: url("../../../static/projectItemBg.png");
    background-size: 100% 100%;
    border-radius: 5px;
    .title {
      font-size: 15px;
      text-align: center;
      color: #ffffff;
      margin-bottom: 30px;
    }
    .content {
      font-size: 13px;
      > div {
        margin-bottom: 10px;
        .left {
          color: #a3a3a3;
        }
        .ways {
          line-height: 30px;
        }
      }
    }
  }
  .btnNext {
    img {
      width: 160px;
    }
    position: fixed;
    top: 350px;
    width: 100%;
    text-align: center;
  }
  .share {
    width: 250px;
    position: fixed;
    right: 40px;
    top: 100px;
  }
}
</style>


