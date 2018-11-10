<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">

    
      <div class="header_div">
        <div><img src="../../static/images/jingdong.png" alt=""></div>
        <div>
          <div><span>Yao</span></div>
          <div><span>ID:</span><span>1001</span></div>
        </div>
        <div>
          <img src="../../static/images/set.png" alt="">
        </div>
      </div>

      <div class="card_div">
        <van-row>
          <van-col span="8">
            <div>今日收益(元)</div>
            <div class="paddingmax_div">99￥</div>
          </van-col>
          <van-col  span="8" offset="8">
            <div>
                <van-circle
                  v-model="currentRate"
                  color="#13ce66"
                  fill="#fff"
                  size="80px"
                  layer-color="#eee"
                  text="转化率50.2%"
                  :rate="rate"
                  :speed="70"
                  :clockwise="false"
                  :stroke-width="80"
                />
            </div>
            
          </van-col>
        </van-row>

      <div class="back_div">
          <van-row>
            <van-col span="8"><div>存款金额(元)</div>
            <div class="paddingmax_div">0</div></van-col>
            <van-col span="8"><div>累计收益(元)</div>
            <div class="paddingmax_div">16.5</div></van-col>
            <van-col span="8"><div>可用余额(元)</div>
            <div class="paddingmax_div">2</div></van-col>
          </van-row>
          <van-row >
            <van-col span="12" >
              <div  class="van-hairline--right paddingmin_div reward_div">明细</div>
            </van-col>
            <van-col span="12">
              <div  class="paddingmin_div reward_div">提现</div>
            </van-col>
          </van-row>
      </div>

      </div>
      <!-- 我的订单 -->
      <div class="goodsorder_div">
        <div class="van-hairline--top van-hairline--bottom">
              <van-row class="paddingmin_div">
                    <van-col span="6" style="line-height:20px;">
                      <span>我的订单</span>
                    </van-col>
                    <van-col span="3" offset="15">
                      <img width="20" src="../../static/images/right.png" alt="">
                    </van-col>
              </van-row>
        </div>
        <div class="van-hairline--bottom">
          <van-row class="row_padding">
            <van-col  span="6"> 
              <div><img class="type_img" src="../../static/images/deliver.png" alt=""></div>  
              <div>全部</div>
            </van-col>
            <van-col span="6">
              <div><img class="type_img" src="../../static/images/pay.png" alt=""></div>  
              <div>已结算</div>
            </van-col>
            <van-col span="6">
              <div><img class="type_img" src="../../static/images/send.png" alt=""></div>  
              <div>已付款</div>
            </van-col>
            <van-col span="6">
              <div><img class="type_img" src="../../static/images/delete.png" alt=""></div>  
              <div>已失效</div>
            </van-col>
        </van-row>
        </div>
      </div>
<!-- 单元 -->
      <div class="list_div">
          <van-cell-group>
            <van-cell title="我的团队" @click="xxx()" icon="location" is-link />
            <van-cell title="邀请海报" @click="xxxx()" icon="location" is-link />
            <van-cell title="客服中心" icon="location" is-link />
            <van-cell title="帮助" icon="location" is-link />
          </van-cell-group>
      </div>
      </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "home",
  components: {},
   props: {
      /**
       * 1 滚动的时候会派发scroll事件，会截流。
       * 2 滚动的时候实时派发scroll事件，不会截流。
       * 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
       */
      probeType: {
        type: Number,
        default: 1
      },
      /**
       * 点击列表是否派发click事件
       */
      click: {
        type: Boolean,
        default: true
      },
   },
  data() {
    return {
      currentRate: 0,
      rate: 50
    };
  },
  created() {
    var _this = this;
    _this.$nextTick(() => {
      _this._initScroll();
    });
  },
  methods: {
    _initScroll() {
      this.scroll1 = new BScroll(this.$refs.wrapper, {
        click: this.click,
      }); //注意此处是 this.$refs.xxx
    },
    xxx(){
      alert("xxxxx")
    },
    xxxx(){
      alert("dianwo")
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../static/themes/var.less";
.wrapper {
  width: 100%;
  height: calc(90vh + 10px);
  overflow: hidden;
  text-align: center;

}
.paddingmax_div {
  margin: 20px 0;
}
.paddingmin_div {
  padding: 5px 0;
}
.hide_fff {
  color: #fff;
}
.back_div {
  background-image: url(../../static/images/user_bg.png);
  background-size: 100%;
  background-repeat: no-repeat;
}
.header_div {
  display: flex;
  font-size: @font-size12;
  padding-top: 15px;
  > div:nth-child(1) {
    flex-grow: 1;
    // background: red;
    img {
      width: 45px;
      height: 45px;
    }
  }
  > div:nth-child(2) {
    flex-grow: 8;
    // background: blue;
    text-align: left;
    padding-top: 10px;
  }
  > div:nth-child(3) {
    flex-grow: 1;
    // background: red;
    img {
      width: 25px;
      height: 25px;
    }
  }
}

.card_div {
  border-radius: 15px;
  // border: 1px solid #ccc;
  margin: 10px 10px 0px 10px;
  padding: 5px;
  font-size: @font-size12;
  box-shadow: 0 2px 10px #ccc;
  // background-image:url(../../static/images/home_update.png);
  background: @orange-dark;
  .radius_div {
    width: 60px;
    height: 60px;
    border-radius: 50px;
    border: 1px solid #ccc;
    font-size: @font-size12;
    > div {
      margin-top: 10px;
    }
  }
  .reward_div {
    color: red;
  }
}

.goodsorder_div {
  font-size: @font-size12;
  background: @white;
  > div:nth-child(1) {
    margin-top: 10px;
  }
  > div:nth-child(2) {
    .row_padding {
      padding: 15px 0px;
    }
  }
  .goodstitle_img {
    width: 25px;
    height: 25px;
    display: inline-block;
    vertical-align: middle;
  }
  .type_img {
    width: 30px;
    height: 30px;
  }
}
.list_div {
  margin-top: 10px;
  margin-bottom: 80px;
  .van-cell__title {
    text-align: left;
  }
}
</style>

