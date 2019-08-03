<template>
  <div id="basicInfor3">
    <div class="steps">
      <div class="top">
        <van-row>
          <van-col class="noActive" span="8">
            <div>第一步</div>
            <div>基本信息</div>
          </van-col>
          <van-col class="noActive" span="8">
            <div>第二步</div>
            <div>上传照片</div>
          </van-col>
          <van-col span="8">
            <div>第三步</div>
            <div>牙齿情况</div>
          </van-col>
        </van-row>
      </div>
      <div class="bottom">
        <span class="circle noActiveBG"></span>
        <span class="slid noActiveBG"></span>
        <span class="circle noActiveBG"></span>
        <span class="slid noActiveBG"></span>
        <span class="checked">
          <van-icon name="checked" />
        </span>
      </div>
    </div>

    <div class="selectItme1">
      <div class="title">以下提供的信息能更好的帮助值得美专家判断您的情况。</div>

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
                <van-radio name="0" checked-color="#8CC63F">
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
          <div
            class="jiuFlexItem"
            @click="selectItme2Clk(index)"
            v-for="(item,index) in selectItme2"
            :key="index"
          >
            <div :class="item.active?'imgBox active':'imgBox noActive'">
              <img :src="item.img" width="90" />
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
      <div class="title">为保证专家更准确的判断您牙齿情况，您是否同 意邮寄牙模、拍摄牙齿X光片？</div>

      <div class="item">
        <van-radio-group
          style="display:flex;flex-flow:row nowarp;justify-content:flex-start;"
          v-model="agree"
        >
          <van-radio name="1" checked-color="#07c160" style="margin-right:35px;">
            <span>同意</span>
          </van-radio>
          <van-radio name="0" checked-color="#07c160">
            <span>不同意</span>
          </van-radio>
        </van-radio-group>
      </div>
    </div>

    <div class="save" @click="btnClk()">
      <span>提交</span>
    </div>
  </div>
</template>
<script>
import { constants } from "fs";
export default {
  data() {
    return {
      agree: "1",
      selectItme1: [
        { title: "之前矫正过牙齿吗？", value: 1, active: '0' },
        { title: "您有蛀牙吗？", value: 2, active: '0' },
        { title: "您有种植牙吗？", value: 3, active: '0' },
        { title: "您有智齿吗？", value: 4, active: '0' },
        { title: "您有牙冠吗？", value: 5, active: '0' }
      ],
      selectItme2: [
        {
          title: "牙齿拥挤",
          img: "../../../static/zhongduzhongyongji.png",
          value: 1,
          active: false
        },
        {
          title: "牙齿稀疏",
          img: "../../../static/zhongdujianxi.png",
          value: 2,
          active: false
        },
        {
          title: "牙齿外凸",
          img: "../../../static/zhongduzhongyongji.png",
          value: 3,
          active: false
        },
        {
          title: "反颌",
          img: "../../../static/fanhe.png",
          value: 4,
          active: false
        },
        {
          title: "开颌",
          img: "../../../static/kaihe.png",
          value: 5,
          active: false
        },
        {
          title: "深覆颌",
          img: "../../../static/shenfuhe.png",
          value: 6,
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
    btnClk() {
      console.log(this.selectItme1);
      let that = this;
      let dental_symptomsString = "";
      let solve_problemString = "";

      for (const key in this.selectItme2) {
        if (this.selectItme2[key].active) {
          dental_symptomsString += this.selectItme2[key].value + ",";
        }
      }
      for (const key in this.selectItme3) {
        if (this.selectItme3[key].active) {
          solve_problemString += this.selectItme3[key].value + ",";
        }
      }
      if(dental_symptomsString==''||solve_problemString==''){
        that.$Toast('请提供完整信息！');
        return false
      }
      that.$axios
        .post("/api/cases/store", {
          id: that.$route.query.freeApplyId,
          is_correct: that.selectItme1[0].active,
          tooth_decay: that.selectItme1[1].active,
          implant_teeth: that.selectItme1[2].active,
          wisdom_tooth: that.selectItme1[3].active,
          is_crowns: that.selectItme1[4].active,
          dental_symptoms: dental_symptomsString.slice(0,dental_symptomsString.length-1),
          solve_problem: solve_problemString.slice(0,solve_problemString.length-1),
          is_agree: that.agree
        })
        .then(function(res) {
          console.log(res);
          if (res.data.code == 200) {
            that.$Toast(res.data.msg);
            setTimeout(function() {
              that.$router.push({
                name: "freeApply",
                query: { freeApplyId: res.data.data.id }
              });
            }, 1000);
          } else {
            that.$Toast(res.data.msg);
          }
        });
    },
    selectItme1Clk(index) {},
    selectItme2Clk(index) {
      this.selectItme2[index].active = !this.selectItme2[index].active;
    },
    selectItme3Clk(index) {
      this.selectItme3[index].active = !this.selectItme3[index].active;
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../../common/css/globle.less");
#basicInfor3 {
  .steps {
    text-align: center;
    .top {
      padding-top: 15px;
      font-size: 13px;
      color: #ffffff;
      background: @globleColor;
      text-align: center;
      padding-bottom: 5px;
      > div {
        //   padding-bottom: 3px;
      }
    }
    .bottom {
      padding-bottom: 10px;
      color: #ffffff;
      background: @globleColor;
      .checked {
      }
      .slid {
        width: 110px;
        height: 1px;
        margin-bottom: 7px;
        display: inline-block;
        background: #ffffff;
      }
      .circle {
        width: 8px;
        height: 8px;
        display: inline-block;
        background: #ffffff;
        border-radius: 50px;
        margin-bottom: 4px;
      }
      .noActiveBG {
        background: #c3dca2;
      }
    }
  }

  .selectItme1 {
    margin: 5px;
    margin-top: 25px;

    font-size: 14px;
    .title {
      color: #333333;
      font-size: 16px;
      margin: 10px;
    }
    .item {
      border-radius: 10px;
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
    margin: 10px;
    font-size: 14px;
    .title {
      color: #333333;
      font-size: 16px;
      margin: 5px;
      margin-top: 25px;
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
          border-radius: 5px;
          padding: 10px;
          margin: 10px 0;
        }
        .active {
          background: @globleColor;
        }
        .noActive {
          background: #ffffff;
        }
      }
    }
  }

  .selectItme3 {
    margin: 10px;
    font-size: 14px;
    .title {
      color: #333333;
      font-size: 16px;
      margin: 5px;
      margin-top: 25px;
    }
    .item {
      border-radius: 10px;
      background: #ffffff;
      padding: 10px;
      .itemlist {
        display: inline-block;
        padding: 10px;
        margin: 5px;
        border-radius: 5px;
        border: 1px solid #dddddd;
      }
      .active {
        background: @globleColor;
        border: 1px solid @globleColor;
        color: #ffffff;
      }
    }
  }

  .selectItme4 {
    margin: 5px;
    margin-top: 25px;

    font-size: 14px;
    .title {
      color: #333333;
      font-size: 16px;
      margin: 10px;
    }
    .item {
      border-radius: 10px;
      background: #ffffff;
      padding: 20px;
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


