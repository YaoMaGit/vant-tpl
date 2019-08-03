<template>
  <div id="page" class="toothTest">
    <div class="bordview">
      <div class="title">
        {{initPage}}、
        <span>请选出下列与您牙齿间隙情况相似的图(单选)</span>
      </div>
      <van-row>
        <van-col class="col" span="12">
          <div @click="selectcClk('A',9)">
            <div :class="active==='A'?'imgDivActive':'imgDiv'">
              <img src="../../../static/qingdujianxi.png" alt />
            </div>
            <div class="selectDiv">
              <img v-if="active==='A'" src="../../../static/select.png" alt />
              <img v-else src="../../../static/noselect.png" alt />
              <span :class="active==='A'?'active':'defult'">A 轻度间隙</span>
              <!-- （跳转第9题） -->
            </div>
          </div>
        </van-col>
        <van-col class="col" span="12">
          <div @click="selectcClk('B',9)">
            <div :class="active==='B'?'imgDivActive':'imgDiv'">
              <img src="../../../static/zhongdujianxi.png" alt />
            </div>
            <div class="selectDiv">
              <img v-if="active==='B'" src="../../../static/select.png" alt />
              <img v-else src="../../../static/noselect.png" alt />
              <span :class="active==='B'?'active':'defult'">B中度间隙</span>
              <!-- （跳转第9题） -->
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

export default {
  mixins: ["mixin"],
  data() {
    return {
      initPage: "",
      thisPage: 5,
      active: "A",
      page: 9
    };
  }
};
</script>
<style lang="less" scoped>
.toothTest {
}
</style>


