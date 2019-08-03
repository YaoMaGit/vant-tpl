<template>
  <div id="page" class="toothTest">
    <div class="bordview">
      <div class="title">
        {{initPage}}、
        <span>您知道自己是什么面型吗?(按下方图片测量 鼻尖、嘴巴、下巴尖是否在一条直线上）</span>
      </div>
      <van-row>
        <van-col class="col" span="12">
          <div @click="selectcClk('A',2)">
            <div :class="active==='A'?'imgDivActive':'imgDiv'">
              <img src="../../../static/ao1.png" alt />
            </div>
            <div class="selectDiv">
              <img v-if="active==='A'" src="../../../static/select.png" alt />
              <img v-else src="../../../static/noselect.png" alt />
              <span :class="active==='A'?'active':'defult'">A 直面型</span>
              <!-- （跳转第2题） -->
            </div>
          </div>
        </van-col>
        <van-col class="col" span="12">
          <div @click="selectcClk('B',6)">
            <div :class="active==='B'?'imgDivActive':'imgDiv'">
              <img src="../../../static/ao2.png" alt />
            </div>
            <div class="selectDiv">
              <img v-if="active==='B'" src="../../../static/select.png" alt />
              <img v-else src="../../../static/noselect.png" alt />
              <span :class="active==='B'?'active':'defult'">B 凸面型</span>
              <!-- （跳转第6题） -->
            </div>
          </div>
        </van-col>
        <van-col class="col" span="12">
          <div @click="selectcClk('C',7)">
            <div :class="active==='C'?'imgDivActive':'imgDiv'">
              <img src="../../../static/ao3.png" alt />
            </div>
            <div class="selectDiv">
              <img v-if="active==='C'" src="../../../static/select.png" alt />
              <img v-else src="../../../static/noselect.png" alt />
              <span :class="active==='C'?'active':'defult'">C 凹面型</span>
              <!-- （跳转第7题） -->
            </div>
          </div>
        </van-col>
      </van-row>
    </div>
    <img class="btnNext" src="../../../static/next.png" @click="btnClk()" alt />
  </div>
</template>
<script>
import mixin from "@/common/js/mixin";
import { mapState, mapGetters, mapActions } from "vuex"; //先要引入

export default {
  mixins: ["mixin"],
  data() {
    return {
      initPage: "",
      thisPage: 1,
      active: "",
      page: 2
    };
  }
};
</script>
<style lang="less" scoped>
.toothTest .bordview .imgDivActive img {
  height: 125px;
}
.toothTest .bordview .imgDiv img {
  height: 125px;
}
</style>


