<template>
  <div id="page" class="toothTest">
    <div class="bordview">
      <div class="title">
        {{initPage}}、
        <span>下列图片有没有跟您牙齿情况相似的？(单选)</span>
      </div>

      <van-row>
        <van-col class="col" span="12">
          <div :class="active==='A'?'imgDivActive':'imgDiv'" @click="selectcClk('A',10)">
            <img src="../../../static/baoya.png" alt />
          </div>
          <div class="selectDiv">
            <img v-if="active==='A'" src="../../../static/select.png" alt />
            <img v-else src="../../../static/noselect.png" alt />
            <span :class="active==='A'?'active':'defult'">A 双颌前突</span>
            <!-- （跳转第10题） -->
          </div>
        </van-col>
        <van-col class="col" span="12">
          <div :class="active==='B'?'imgDivActive':'imgDiv'" @click="selectcClk('B',10)">
            <img src="../../../static/baoyace.png" alt />
          </div>
          <div class="selectDiv">
            <img v-if="active==='B'" src="../../../static/select.png" alt />
            <img v-else src="../../../static/noselect.png" alt />
            <span :class="active==='B'?'active':'defult'">B 上颌前突、下颌后缩</span>
            <!-- （跳转第10题） -->
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
    return {initPage:'',
      thisPage: 6,
      active: "A",
      page: 10
    };
  }
};
</script>
<style lang="less" scoped>
.toothTest {
}
</style>


