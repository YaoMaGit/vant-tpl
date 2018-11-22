<template>
  <div class="goodsdetail">
    <div class="header_div">
       <div class="leftback_div">
         <van-icon color="#fff" name="arrow-left" />
        </div>

       <div id="d1">xxxx</div>
    </div>
    <div>
        <van-swipe @change="onChange">
          <van-swipe-item v-for="(item,index) in goodsdata.banner" :key="index">
            <img v-lazy="item" class="xxx" :key="index" />
          </van-swipe-item>

          <div class="custom-indicator" slot="indicator">
            {{ current + 1 }}/4
          </div>
        </van-swipe>
    </div>
    <div>
      <div>
        <img v-if="goodsdata.is_tmall==1" src="../../static/images/home_tab_tb_d.png" alt="">
        <img v-else src="../../static/images/home_tab_tm_d.png" alt="">
        <span>xxxxxxxxxxx</span>
      </div>
    </div>
    <div class="tab_div">
      <van-goods-action>
        <van-goods-action-mini-btn icon="chat" text="客服" @click="onClickMiniBtn" />
        <van-goods-action-mini-btn icon="cart" text="购物车" @click="onClickMiniBtn" />
        <van-goods-action-big-btn text="加入购物车" @click="onClickBigBtn" />
        <van-goods-action-big-btn text="立即购买" @click="onClickBigBtn" primary />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "goodsdetail",
  components: {
    //  GoodsAction, GoodsActionBigBtn, GoodsActionMiniBtn
  },
  data() {
    return {
      goods_id: 543544648408,
      goodsdata: "",
      current: 0
    };
  },
  created() {
    this.getdata();
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    getdata: function() {
      var _this = this;
      _this.$api
        .HTTP(_this.$URL.HTTPS.GOODSDETAIL, "type=top&key=123456")
        .then(res => {
          console.log(res);

          _this.goodsdata = res.data;
        });
    },
    onClickMiniBtn() {
      Toast("点击图标");
    },
    onClickBigBtn() {
      Toast("点击按钮");
    }
  }
};
</script>

<style lang="less" scoped>
.header_div {
  text-align: center;
  height: 46px;
  background: red;
  line-height: 46px;
  font-size: 16px;
  position: relative;
  .leftback_div {
    display: inline-block;
    position: absolute;
    background: rgba(204, 204, 204, 0.829);
    height: 30px;
    width: 30px;
    top: 10px;
    left: 15px;
    line-height: 35px;
    text-align: center;
    border-radius: 50%;
  }
}
.tab_div {
  position: fixed;
  bottom: 0;
}
.xxx {
  width: 100%;
}

.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  color: #fff;
  background: rgba(0, 0, 0, 0.1);
}
</style>
