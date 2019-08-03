<template>
  <div id="doctorDetail">
    <div class="header">
      <div class="topCard">
        <van-row>
          <van-col span="7">
            <img
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563171330420&di=5e51c5fddccdd5310c88f3a2a565d9fe&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20160408%2Fe7a90a78169a48ba9b7d3404adc7855c_th.jpg"
              alt
            />
          </van-col>
          <van-col span="17">
            <div class="top">
              <span class="name">张医生</span>
              <span class="subname">副主任医师</span>
            </div>
            <div class="bottom">
              <span>口腔正畸科学科带头人</span>
            </div>
          </van-col>
        </van-row>
        <div
          class="account"
          v-bind:class="{'globleAccountP':upDownShow1}"
        >擅长：成人及青少年各类错合畸形的固定矫12青少年各类错合畸形的固定青少年各类错合畸形的固定青少年各类错合畸形的固定正、隐形矫正；最多显示两行，超过两行省略折叠，展开查看更多...</div>
        <div class="accountMore" v-if="upDownShow1" @click="upDownShow1=!upDownShow1">
          <van-icon name="arrow-down" />
        </div>
        <div class="accountMore" v-else @click="upDownShow1=!upDownShow1">
          <van-icon name="arrow-up" />
        </div>
      </div>
    </div>
    <div class="docAccount view">
      <div>
        <span class="title">医生简介</span>
        <span class="setOpen" v-if="upDownShow2" @click="upDownShow2=!upDownShow2">
          展开
          <van-icon name="arrow-down" />
        </span>
        <span class="setOpen" v-else @click="upDownShow2=!upDownShow2">
          收起
          <van-icon name="arrow-up" />
        </span>
      </div>
      <div class="item" v-bind:class="{'globleAccountP':upDownShow2}">
        <div>从事口腔临床工作近10年，曾在上海市第九人民医院等多家国内知名医院进修、学习，具有扎上海市第九人民医院等多家国内知名医院进修、学习，具有扎上海市第九人民医院等多家国内知名医院进修、学习，具有扎上海市第九人民医院等多家国内知名医院进修、学习，具有扎实的口腔理论知识和临床实践经验，拥有良好的综合诊疗...</div>
      </div>
    </div>
    <div class="docAccount view">
      <div>
        <span class="title">职称和专业认证</span>
        <span class="setOpen" v-if="upDownShow3" @click="upDownShow3=!upDownShow3">
          展开
          <van-icon name="arrow-down" />
        </span>
        <span class="setOpen" v-else @click="upDownShow3=!upDownShow3">
          收起
          <van-icon name="arrow-up" />
        </span>
      </div>
      <div class="item" v-bind:class="{'globleAccountP':upDownShow3}">
        <div>美国哥伦比亚大学（纽约）牙学院访问学者</div>
        <div>美国哥伦比亚大学（纽约）牙学院访问学者</div>
        <div>美国哥伦比亚大学（纽约）牙学院访问学者</div>
      </div>
    </div>
    <div class="docAccount view">
      <div>
        <span class="title">服务网点</span>
      </div>
      <div class="item border">
        <div>
          <van-row type="flex" align="center">
            <van-col span="23">
              <div class="name">
                <van-icon class="globleIcon iconfont" class-prefix="my-icon" name="home-outline" />
                <span>郑州市金水区植得口腔</span>
              </div>
              <div class="address">郑州市金水路与未来路地铁口F出口向北800m...</div>
            </van-col>
            <van-col span="1">
              <van-icon name="arrow" color="#DDDDDD" size="20" />
            </van-col>
          </van-row>
        </div>
      </div>
      <div class="item border">
        <div>
          <van-row type="flex" align="center">
            <van-col span="23">
              <div class="name">
                <van-icon class="globleIcon iconfont" class-prefix="my-icon" name="home-outline" />
                <span>郑州市金水区植得口腔</span>
              </div>
              <div class="address">郑州市金水路与未来路地铁口F出口向北800m...</div>
            </van-col>
            <van-col span="1">
              <van-icon name="arrow" color="#DDDDDD" size="20" />
            </van-col>
          </van-row>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Icon } from "vant";

export default {
  components: {
    Icon
  },
  data() {
    return {
      upDownShow1: true,
      upDownShow2: true,
      upDownShow3: true
    };
  },
};
</script>
<style lang="less" scoped>
@import url("../../common/css/globle.less");

#doctorDetail {
  .header {
    // height: 190px;
    background: url("../../../static/bgDoc.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 25px 10px 0px 10px;
    .topCard {
      border-radius: 5px;
      padding: 20px 20px 10px 20px;
      background: #ffffff;
      margin-bottom: 10px;
      img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
      }
      .top {
        margin-top: 2px;
        .name {
          font-size: 20px;
          font-weight: 600;
          color: #333333;
        }
        .subname {
          font-size: 13px;
          color: #999999;
          margin-left: 10px;
        }
      }
      .bottom {
        margin-top: 12px;
        span {
          font-size: 11px;
          color: @globleColor;
          padding: 5px 10px;
          background: rgba(140, 198, 63, 0.2);
        }
      }
      .account {
        font-size: 12px;
        color: #999999;
        margin-top: 5px;
      }
      .accountMore {
        text-align: center;
        padding-top: 15px;
        color: #999999;
      }
    }
  }

  .docAccount {
    .title {
      font-weight: 600;
      color: #333333;
      border-left: @globleColor 3px solid;
      padding-left: 10px;
    }
    .setOpen {
      color: @globleColor;
      float: right;
      font-size: 14px;
    }
    p {
      color: #666666;
      font-size: 14px;
    }
    .item {
      color: #666666;
      font-size: 14px;
      margin-top: 15px;
    }
    .address {
      color: #666666;
      font-size: 13px;
      margin-top: 5px;
    }
    .border {
      border-bottom: 1px solid #dddddd;
      padding-bottom: 18px;
    }
  }
}
</style>


