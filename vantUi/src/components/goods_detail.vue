<template>
  <div class="goodsdetail">
  <demo-section>
    <demo-block :title="('basicUsage')">
      <van-goods-action>
        <van-goods-action-mini-btn
          icon="chat"
          :text="('icon1')"
          @click="onClickMiniBtn"
        />
        <van-goods-action-mini-btn
          icon="cart"
          :text="('icon2')"
          @click="onClickMiniBtn"
        />
        <van-goods-action-big-btn
          :text="('button1')"
          @click="onClickBigBtn"
        />
        <van-goods-action-big-btn
          primary
          :text="('button2')"
          @click="onClickBigBtn"
        />
      </van-goods-action>
    </demo-block>

    <demo-block :title="('title2')">
      <van-goods-action>
        <van-goods-action-mini-btn
          icon="chat"
          :text="('icon1')"
          @click="onClickMiniBtn"
        />
        <van-goods-action-mini-btn
          icon="cart"
          info="5"
          :text="('icon2')"
          @click="onClickMiniBtn"
        />
        <van-goods-action-mini-btn
          icon="shop"
          :text="('icon3')"
          @click="onClickMiniBtn"
        />
        <van-goods-action-big-btn
          :text="('button1')"
          @click="onClickBigBtn"
        />
        <van-goods-action-big-btn
          primary
          :text="('button2')"
          @click="onClickBigBtn"
        />
      </van-goods-action>
    </demo-block>
  </demo-section>
  </div>
</template>

<script>
import { GoodsAction, GoodsActionBigBtn, GoodsActionMiniBtn } from "vant";

// Vue.use(GoodsAction)
//   .use(GoodsActionBigBtn)
//   .use(GoodsActionMiniBtn);
export default {
  name: "goodsdetail",
    components: {
     GoodsAction, GoodsActionBigBtn, GoodsActionMiniBtn 
  },
  props: {
    msg: String
  }
};
</script>

<style scoped>
</style>
