<template>
  <div id="page" class="toothTest">
    <div class="bordview">
      <div class="title">
        {{initPage}}、
        <span>当您下巴向后缩时，上下牙齿是否能咬合到一起？(单选)</span>
      </div>
      <div class="pagetype2">
        <div class="pagetypeItem">
          <div
            :class="active=='A'?'selectbox active':'selectbox defult'"
            @click="selectcClk('A',10)"
          >
            <img v-if="active==='A'" src="../../../static/select.png" alt />
            <img v-else src="../../../static/noselect.png" alt />
            <span>A 能</span>
            <!-- （跳转第10题） -->
          </div>
        </div>
        <div class="pagetypeItem">
          <div
            :class="active=='B'?'selectbox active':'selectbox defult'"
            @click="selectcClk('B',10)"
          >
            <img v-if="active==='B'" src="../../../static/select.png" alt />
            <img v-else src="../../../static/noselect.png" alt />
            <span>B 不能</span>
            <!-- （跳转第10题） -->
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
      thisPage: 8,
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


