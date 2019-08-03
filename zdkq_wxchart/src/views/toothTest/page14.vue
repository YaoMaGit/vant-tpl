<template>
  <div id="page" class="toothTest">
    <div class="bordview">
      <div class="title">
        {{initPage}}、
        <span>您是否了解过隐形正畸？(单选)</span>
      </div>

      <div class="pagetype2">
        <div class="pagetypeItem">
          <div :class="active=='A'?'selectbox active':'selectbox defult'" @click="selectcClk('A',15)">
            <img v-if="active==='A'" src="../../../static/select.png" alt />
            <img v-else src="../../../static/noselect.png" alt />
            <span>A 没有</span>
            <!-- （跳转第15题） -->
          </div>
        </div>
        <div class="pagetypeItem">
          <div :class="active=='B'?'selectbox active':'selectbox defult'" @click="selectcClk('B',15)">
            <img v-if="active==='B'" src="../../../static/select.png" alt />
            <img v-else src="../../../static/noselect.png" alt />
            <span>B 知道一点</span>
            <!-- （跳转第15题） -->
          </div>
        </div>
        <div class="pagetypeItem">
          <div :class="active=='C'?'selectbox active':'selectbox defult'" @click="selectcClk('C',15)">
            <img v-if="active==='C'" src="../../../static/select.png" alt />
            <img v-else src="../../../static/noselect.png" alt />
            <span>C 很清楚</span>
            <!-- （跳转第15题） -->
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
      thisPage:14,
      active: "A",
      page:15
    };
  }, 
  
};
</script>
<style lang="less" scoped>
.toothTest {
}
</style>


