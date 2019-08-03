<template>
  <div id="page" class="toothTest">
    <div class="bordview">
      <div class="title">
        {{initPage}}、
        <span>牙齿闭合情况下，您的下牙齿是否包住了上牙？(单选)</span>
      </div>

      <div class="pagetype2">
        <div class="pagetypeItem">
          <div
            :class="active=='A'?'selectbox active':'selectbox defult'"
            @click="selectcClk('A',8)"
          >
            <img v-if="active==='A'" src="../../../static/select.png" alt />
            <img v-else src="../../../static/noselect.png" alt />
            <span>A 是</span>
            <!-- （跳转第8题） -->
          </div>
        </div>
        <div class="pagetypeItem">
          <div
            :class="active=='B'?'selectbox active':'selectbox defult'"
            @click="selectcClk('B',8)"
          >
            <img v-if="active==='B'" src="../../../static/select.png" alt />
            <img v-else src="../../../static/noselect.png" alt />
            <span>B 否</span>
            <!-- （跳转第8题） -->
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
    return {initPage:'',
      thisPage: 7,
      active: "A",
      page: 8
    };
  }
};
</script>
<style lang="less" scoped>
.toothTest {
}
</style>


