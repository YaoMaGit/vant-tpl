<template>
  <div id="subNewUploud">
    <div class="selectItme0">
      <div class="title">不符合要求的照片</div>

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
    <div class="phoneItem view">
      <div>
        <span class="title">重新上传以下照片</span>
        <span class="subtitle">（参考右侧示例及图片详解）</span>
      </div>

      <div class="itemPhoneBox">
        <div class="item" v-for="(item,index) in [1,2,3,4,5]" :key="index">
          <div class="left">
            <div class="dashedBox">
              <div class="addIcon">
                <van-icon
                  class="iconfont"
                  size="46"
                  color="#DDDDDD"
                  class-prefix="my-icon"
                  name="add-circle-fill"
                />
              </div>
              <div>上传照片</div>
            </div>
          </div>
          <div class="center">
            <div class="centerImgBox">
              <span class="centerSpan">示例</span>
              <img src="../../../static/carmer8/微笑像.png" alt />
            </div>
          </div>
          <div class="right">
            <div style="font-size:14px;margin-bottom:5px;">
              <img src="../../../static/requied.png" alt /> 上传微笑像
            </div>
            <div style="font-size:12px;color:#999999;">保持微笑，拍一张美哒哒微笑像。</div>
          </div>
        </div>
      </div>
      <div class="save" @click="btnClk()">
        <span>提交</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
      ]
    };
  },
  methods: {
    selectItme3Clk(index) {
      this.selectItme3[index].active = !this.selectItme3[index].active;
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../../common/css/globle.less");
#subNewUploud {
  .selectItme0 {
    font-size: 14px;
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

  .phoneItem {
    background: #ffffff;
    margin-top: 10px;
    .subtitle {
      color: #999999;
      font-size: 12px;
      margin-bottom: 15px;
    }
    .itemPhoneBox {
      .item {
        display: flex;
        padding: 15px 0;
        border-bottom: 1px solid #dddddd;
        .left {
          flex: 1;
          .dashedBox {
            height: 90px;
            width: 90px;
            text-align: center;
            color: #dddddd;
            border: 1px dashed #dddddd;
            .addIcon {
              margin-top: 6px;
            }
          }
        }
        .center {
          flex: 1;
          .centerImgBox {
            width: 91px;
            height: 91px;
            overflow: hidden;
            position: relative;
            .centerSpan {
              color: #ffffff;
              background: rgba(51, 51, 51, 1);
              position: absolute;
              display: inline-block;
              padding: 3px 6px;
              font-size: 12px;
            }
            > img {
              width: 90px;
            }
          }
        }
        .right {
          flex: 1;
          img {
            width: 10px;
            padding-bottom: 5px;
          }
        }
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


