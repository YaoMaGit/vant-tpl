<template>
  <div id="page" class="toothTest">
    <div class="bordview">
      <div class="title">
        {{initPage}}、
        <span>请选出下列与您牙齿拥挤情况相似的图片(单选)</span>
      </div>

      <van-row>
        <van-col class="col" span="12">
          <div @click="selectcClk('A',9)">
            <div :class="active==='A'?'imgDivActive':'imgDiv'">
              <img src="../../../static/qingduyongji.png" alt />
            </div>
            <div class="selectDiv">
              <img v-if="active==='A'" src="../../../static/select.png" alt />
              <img v-else src="../../../static/noselect.png" alt />
              <span :class="active==='A'?'active':'defult'">A 轻度拥挤</span>
              <!-- （跳转第9题） -->
            </div>
          </div>
        </van-col>
        <van-col class="col" span="12">
          <div @click="selectcClk('B',9)">
            <div :class="active==='B'?'imgDivActive':'imgDiv'">
              <img src="../../../static/zhongduyongji.png" alt />
            </div>
            <div class="selectDiv">
              <img v-if="active==='B'" src="../../../static/select.png" alt />
              <img v-else src="../../../static/noselect.png" alt />
              <span :class="active==='B'?'active':'defult'">B中度拥挤</span>
            </div>
          </div>
        </van-col>
        <van-col class="col" span="12">
          <div @click="selectcClk('C',9)">
            <div :class="active==='C'?'imgDivActive':'imgDiv'">
              <img src="../../../static/zhongduzhongyongji.png" alt />
            </div>
            <div class="selectDiv">
              <img v-if="active==='C'" src="../../../static/select.png" alt />
              <img v-else src="../../../static/noselect.png" alt />
              <span :class="active==='C'?'active':'defult'">C重度拥挤</span>
            </div>
          </div>
        </van-col>
      </van-row>
    </div>
    <img class="btnNext" src="../../../static/next.png" @click="btnClk()" alt />
  </div>
</template>
<script>
// import mixin from "@/common/js/mixin";
import { mapState, mapGetters, mapActions } from "vuex"; //先要引入

export default {
  mixins: ["mixin"],
  data() {
    return { initPage: "", thisPage: 3, active: "A", page: 9 };
  }
};
</script>
<style lang="less" scoped>
.toothTest {
}
</style>


