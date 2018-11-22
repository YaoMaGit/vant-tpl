<template>
  <div class="goodslist">

      <div class="goods-item" v-for="(item,index) in goods_list" :key='index' @click="goods_detail_clk(item)">
            <div class="goods-item-left"><img :src="item.image"></div>
            <div class="goods-item-right ">
                <div class="goods-item-title">
                  <img v-if="item.is_tmall==1" src="../../static/images/home_tab_tb_d.png" alt="">
                  <img v-else src="../../static/images/home_tab_tm_d.png" alt="">
                  <span>{{item.title}}</span>
                  </div>
                <div class="goods-item-gift" style="margin-top: 15px;"><div class="cont_voucher1">{{item.quan_price}}券
                  <div class="dotl"></div>
                  <div class="dotr"></div>
                </div></div>
                <div class="goods-item-gift" style="margin-top: 15px;">券后价：¥{{item.coupon_price}}</div>
                <div class="goods-item-bot">
                    <div class="goods-pick-btn ">立即抢购</div>
                </div>
            </div>
      </div>

  </div>
</template>

<script>
export default {
  name: "goodslist",
  props: {
    msg: String
  },
  data() {
    return {
      goods_list: []
    };
  },
  created() {
    this.setNewsApi();
  },
  methods: {
    setNewsApi: function() {
      var _this = this;
      _this.$api
        .HTTP(_this.$URL.HTTPS.INDEX, "type=top&key=123456")
        .then(res => {
          console.log(res);

          _this.goods_list = res.data;
        });
    },
    goods_detail_clk: function(item) {
      this.$router.push({ name: "goods_detail"});
    }
  }
};
</script>

<style lang="less" scoped>
.goodslist {
  min-height: 100%;
  width: 100%;
}

.goods-item {
  background: #fff;
  border-radius: 8px;
  box-sizing: border-box;
  display: flex;
  height: 160px;
  margin-top: 10px;
  padding: 10px 8px;
}
.goods-item-left {
  flex: 0 0 140px;
  height: 100%;
  margin-right: 12px;
}
.goods-item-right {
  flex: 1 1 auto;
  line-height: 20px;
  position: relative;
  text-align: left;
}
.goods-item-left img {
  height: 100%;
  width: 100%;
}
.goods-item-title {
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  color: #666;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #333;
  font-weight: 100;
  font-size: 0.65rem;
}
.goods-item-gift {
  color: rgb(255, 101, 68);
  font-size: 14px;
}
.goods-tip {
  box-sizing: border-box;
  color: #ffdb80;
  font-size: 12px;
  line-height: 24px;
  margin-top: 20px;
  padding: 0 15px;
  text-align: left;
  width: 100%;
}
.goods-tip p {
  margin-bottom: 5px;
  color: rgb(255, 101, 68);
}
.goods-item-bot {
  bottom: 0;
  line-height: 14px;
  position: absolute;
  right: 0;
}
.goods-pick-btn.inactive {
  background: #ccc;
  box-shadow: unset;
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  padding: 6px 12px;
}
.goods-pick-btn {
  background-image: linear-gradient(270deg, #cc1018, #ff8538);
  background-repeat: no-repeat;
  border-radius: 4px;
  box-shadow: 0 0 2px 0 rgba(224, 0, 0, 0.5);
  color: #fff;
  font-size: 12px;
  padding: 6px 12px;
}
.cont_voucher1 {
  color: #fff;
  font-size: 14px;
  width: 33%;
  text-align: center;
  position: relative;
  background: rgb(255, 101, 68);
  box-shadow: 0 1px 4px 0 rgba(150, 0, 0, 0.2);
}
.cont_voucher1 div {
  position: absolute;
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 0.3rem;
  background: #fff;
  top: 50%;
  margin-top: -0.15rem;
}
.dotl {
  left: -0.15rem;
}
.dotr {
  right: -0.15rem;
}
.soldout .goods-item-left,
.soldout .goods-item-title,
.soldout .goods-item-gift {
  opacity: 0.3;
}
.goods-item-title {
  img {
    display: inline-block;
    width: 15px;
    height: 15px;
    vertical-align: middle;
    margin-right: 5px;
  }
}
</style>
