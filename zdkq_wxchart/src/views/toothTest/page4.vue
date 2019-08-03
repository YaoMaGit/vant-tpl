<template>
  <div id="page" class="toothTest">
    <div class="bordview">
      <div class="title">
        {{initPage}}、
        <span>您吃饭的时候遇到过塞牙的情况吗(单选)</span>
      </div>
      <div class="pagetype2">
        <div class="pagetypeItem">
          <div
            :class="active=='A'?'selectbox active':'selectbox defult'"
            @click="selectcClk('A',9)"
          >
            <img v-if="active==='A'" src="../../../static/select.png" alt />
            <img v-else src="../../../static/noselect.png" alt />
            <span>A 没有</span>
            <!-- （跳转第9题） -->
          </div>
        </div>
        <div class="pagetypeItem">
          <div
            :class="active=='B'?'selectbox active':'selectbox defult'"
            @click="selectcClk('B',5)"
          >
            <img v-if="active==='B'" src="../../../static/select.png" alt />
            <img v-else src="../../../static/noselect.png" alt />
            <span>B 偶尔</span>
            <!-- （跳转第5题） -->
          </div>
        </div>
        <div class="pagetypeItem">
          <div
            :class="active=='C'?'selectbox active':'selectbox defult'"
            @click="selectcClk('C',5)"
          >
            <img v-if="active==='C'" src="../../../static/select.png" alt />
            <img v-else src="../../../static/noselect.png" alt />
            <span>C 经常</span>
            <!-- （跳转第5题） -->
          </div>
        </div>
      </div>
    </div>
    <img class="btnNext" src="../../../static/next.png" @click="btnClk()" alt />
  </div>
</template>
<script>
import mixin from "@/common/js/mixin";

export default {
  mixins: ["mixin"],
  data() {
    return { initPage: "", thisPage: 4, active: "A", page: 9 };
  }
};
</script>
<style lang="less" scoped>
.toothTest {
}
</style>


