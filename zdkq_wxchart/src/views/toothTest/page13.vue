<template>
  <div id="page" class="toothTest">
    <div class="bordview">
      <div class="title">
        {{initPage}}、
        <span>您认为牙齿的美观是否对您的生活、工作起着比较重要的影响？(单选)</span>
      </div>

      <div class="pagetype2">
        <div class="pagetypeItem">
          <div :class="active=='A'?'selectbox active':'selectbox defult'" @click="selectcClk('A',14)">
            <img v-if="active==='A'" src="../../../static/select.png" alt />
            <img v-else src="../../../static/noselect.png" alt />
            <span>A 没有影响</span>
            <!-- （跳转第14题） -->
          </div>
        </div>
        <div class="pagetypeItem">
          <div :class="active=='B'?'selectbox active':'selectbox defult'" @click="selectcClk('B',14)">
            <img v-if="active==='B'" src="../../../static/select.png" alt />
            <img v-else src="../../../static/noselect.png" alt />
            <span>B 有一点影响</span>
            <!-- （跳转第14题） -->
          </div>
        </div>
        <div class="pagetypeItem">
          <div :class="active=='C'?'selectbox active':'selectbox defult'" @click="selectcClk('C',14)">
            <img v-if="active==='C'" src="../../../static/select.png" alt />
            <img v-else src="../../../static/noselect.png" alt />
            <span>C 比较重要的影响</span>
            <!-- （跳转第14题） -->
          </div>
        </div>
      </div>
    </div>
    <img class="btnNext" src="../../../static/next.png" @click="btnClk()" alt />
  </div>
</template>
<script>import mixin from "@/common/js/mixin";

export default {mixins: ["mixin"],
  data() {
    return {initPage:'',
      thisPage:13,
      active: "A",
      page:14
    };
  }, 
};
</script>
<style lang="less" scoped>
.toothTest {
}
</style>


