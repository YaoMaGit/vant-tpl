<template>
  <div id="basicInforDetail">
    <div class="status">
      <van-row>
        <van-col span="4">
          <van-icon color="#DF6353" size="46" name="clear" />
        </van-col>
        <van-col span="20">
          <div class="title">审核未通过</div>
          <div class="subtitle">
            亲，鉴于您的牙齿问题比较复杂，专家建议您 到郑州值得口腔医院面诊治疗，稍后会有专门 的客服联系您。
            <br />请耐心等待哦~
          </div>
        </van-col>
      </van-row>
    </div>
    <div class="status">
      <van-row>
        <van-col span="4">
          <van-icon color="#8CC63F" size="46" name="checked" />
        </van-col>
        <van-col span="20">
          <div class="title">审核通过</div>
          <div class="subtitle">
            亲，客服小姐姐会在24小时内联系您并帮您 建立病历档案
            <br />请耐心等待哦~
          </div>
        </van-col>
      </van-row>
    </div>
    <div class="status">
      <van-row>
        <van-col span="4">
          <van-icon
            class="globleIcon iconfont"
            color="#FFBB3E"
            size="46"
            class-prefix="my-icon"
            name="error-warning-fill"
          />
        </van-col>
        <van-col span="20">
          <div class="title">审核中</div>
          <div class="subtitle">
            亲，客服小姐姐会在24小时之内处理您的申请
            <br />请耐心等待哦~
          </div>
        </van-col>
      </van-row>
    </div>

    <div class="selectItme0">
      <div class="title">上传八面照</div>

      <div class="item">
        <div class="jiuFlex">
          <div class="jiuFlexItem" v-for="(item,index) in selectItme2" :key="index">
            <div class="imgBox">
              <img :src="item.img" width="100" />
              <div class="mask">
                <div class="iconclcoe">
                  <van-icon name="cross" size="42" color="#DF6353" />
                </div>
                <div>
                  <span>牙齿图像不合规</span>
                </div>
              </div>
            </div>
            <div class="imgTitle">{{item.title}}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="selectItme1">
      <div class="item">
        <div v-for="(item,index) in selectItme1" :key="index">
          <van-row>
            <van-col span="10">{{item.title}}</van-col>
            <van-col span="14">
              <van-radio-group
                style="display:flex;flex-flow:row nowarp;justify-content:flex-end;"
                v-model="selectItme1[index].active"
              >
                <van-radio style="margin-right:15px;" name="1" checked-color="#8CC63F">
                  <span>有</span>
                </van-radio>
                <van-radio name="2" checked-color="#8CC63F">
                  <span>没有</span>
                </van-radio>
              </van-radio-group>
            </van-col>
          </van-row>
        </div>
      </div>
    </div>

    <div class="selectItme2">
      <div class="title">您的牙齿症状（多选）</div>

      <div class="item">
        <div class="jiuFlex">
          <div class="jiuFlexItem" v-for="(item,index) in selectItme2" :key="index">
            <div class="imgBox">
              <img :src="item.img" height="46" />
            </div>
            <div class="imgTitle">{{item.title}}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="selectItme3">
      <div class="title">您想要解决的问题（多选）</div>

      <div class="item">
        <span
          :class="selectItme3[index].active?'itemlist active':'itemlist'"
          v-for="(item,index) in selectItme3"
          :key="index"
          @click="selectItme3Clk(index)"
        >{{item.title}}</span>
      </div>
    </div>

    <div class="selectItme4">
      <div class="title">您是否同意邮寄牙模、拍摄牙齿X光片？</div>

      <div class="item">
        <van-radio-group
          style="display:flex;flex-flow:row nowarp;justify-content:flex-start;"
          v-model="agree"
        >
          <van-radio style="margin-right:35px;" name="1" checked-color="#07c160">
            <span>同意</span>
          </van-radio>
          <van-radio name="2" checked-color="#07c160">
            <span>不同意</span>
          </van-radio>
        </van-radio-group>
      </div>
    </div>

    <div class="save" @click="btnClk()">
      <span>重新上传</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      agree: "",
      selectItme1: [
        { title: "之前矫正过牙齿吗？", value: 1, active: false },
        { title: "您有蛀牙吗？", value: 2, active: false },
        { title: "您有种植牙吗？", value: 3, active: false },
        { title: "您有智齿吗？", value: 4, active: false },
        { title: "您有牙冠吗？", value: 5, active: false }
      ],
      selectItme2: [
        {
          title: "牙齿拥挤",
          value: 1,
          img: "../../../static/zhongduzhongyongji.png",
          active: false
        },
        {
          title: "牙齿稀疏",
          value: 2,
          img: "../../../static/zhongdujianxi.png",
          active: false
        },
        {
          title: "牙齿外凸",
          value: 3,
          img: "../../../static/qiantu.png",
          active: false
        },
        {
          title: "反颌",
          value: 4,
          img: "../../../static/fanhe.png",
          active: false
        },
        {
          title: "开颌",
          value: 5,
          img: "../../../static/kaihe.png",
          active: false
        },
        {
          title: "深覆颌",
          value: 6,
          img: "../../../static/shenfuhe.png",
          active: false
        }
      ],
      selectItme3: [
        { title: "排齐牙齿", value: 1, active: false },
        { title: "缩小牙间距", value: 2, active: false },
        { title: "矫正牙齿外凸", value: 3, active: false },
        { title: "矫正牙齿反颌", value: 4, active: false },
        { title: "矫正牙齿开颌", value: 5, active: false },
        { title: "矫正牙齿深覆颌", value: 6, active: false }
      ]
    };
  },
  methods: {
    btnClk(){
      this.$router.push({ name: "subNewUploud" });
    },
    selectItme3Clk(index) {
      this.selectItme3[index].active = !this.selectItme3[index].active;
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../../common/css/globle.less");
#basicInforDetail {
  .status {
    background: #ffffff;
    padding: 20px;
    .title {
      font-size: 20px;
    }
    .subtitle {
      font-size: 13px;
    }
  }

  .noActive {
    color: #c3dca2;
  }
  .selectItme0 {
    font-size: 14px;
    margin-top: 10px;
    padding: 10px 0;
    background: #ffffff;
    .title {
      color: #333333;
      font-size: 16px;
      margin: 10px;
    }
    .jiuFlex {
      display: flex;
      align-items: center;
      width: 100%;
      flex-wrap: wrap;
    }

    .jiuFlexItem {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 33.33%;
      .imgBox {
        width: 100px;
        height: 100px;
        background: #dddddd;
        position: relative;
        .mask {
          width: 100px;
          height: 100px;
          text-align: center;
          background: rgba(0, 0, 0, 0.5);
          position: absolute;
          top: 0;
          left: 0;
          .iconclcoe {
            margin-top: 20px;
          }
          span {
            font-size: 12px;
            color: #ffffff;
          }
        }
      }
    }

    .imgTitle {
      margin: 5px;
      font-size: 12px;
      color: #999999;
    }
  }

  .selectItme1 {
    font-size: 14px;
    margin-top: 10px;
    .title {
      color: #333333;
      font-size: 16px;
      margin: 10px;
    }
    .item {
      background: #ffffff;
      padding: 0 10px;
      > div {
        padding: 15px 0;
        border-bottom: 1px solid #eeeeee;
        span {
          color: #999999;
        }
      }
    }
  }

  .selectItme2 {
    font-size: 14px;
    background: #ffffff;
    padding: 10px;
    margin-top: 10px;
    .title {
      color: #333333;
      font-size: 16px;
      margin: 10px;
    }
    .item {
      .jiuFlex {
        display: flex;
        align-items: center;
        width: 100%;
        flex-wrap: wrap;
      }

      .jiuFlexItem {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 33.33%;
        .imgBox {
          background: @globleColor;
          padding: 10px 15px;
          border-radius: 5px;
          margin-top: 10px;
        }
      }

      .imgTitle {
        margin-top: 10px;
      }
    }
  }

  .selectItme3 {
    font-size: 14px;
    margin-top: 10px;
    background: #ffffff;
    padding: 10px;

    .title {
      color: #333333;
      font-size: 16px;
      margin: 10px;
    }
    .item {
      .itemlist {
        display: inline-block;
        padding: 10px;
        margin: 5px;
        border-radius: 5px;
        background: @globleColor;
        color: #ffffff;
      }
    }
  }

  .selectItme4 {
    font-size: 14px;
    background: #ffffff;
    padding: 10px;
    margin-top: 10px;

    .title {
      color: #333333;
      font-size: 16px;
    }
    .item {
      padding-top: 20px;
      span {
        color: #999999;
      }
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
    margin-top: 50px;
    margin-bottom: 50px;
  }
}
</style>


