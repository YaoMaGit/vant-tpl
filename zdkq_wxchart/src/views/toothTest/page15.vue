<template>
  <div id="page" class="toothTest">
    <div class="bordview">
      <div class="title">
        {{initPage}}、
        <span>如果为了达到您要求的治疗效果，您是否同意拔牙或者磨牙？(单选)</span>
      </div>

      <div class="pagetype2">
      <div class="pagetypeItem">
        <div :class="active=='A'?'selectbox active':'selectbox defult'"  @click="selectcClk('A',16)">
          <img v-if="active==='A'" src="../../../static/select.png" alt />
          <img v-else src="../../../static/noselect.png" alt />
          <span>A 同意</span>
          <!-- （跳转第16题） -->
        </div>
      </div>
      <div class="pagetypeItem">
        <div :class="active=='B'?'selectbox active':'selectbox defult'"  @click="selectcClk('B',16)">
          <img v-if="active==='B'" src="../../../static/select.png" alt />
          <img v-else src="../../../static/noselect.png" alt />
          <span>B 不同意</span>
          <!-- （跳转第16题） -->
        </div>
      </div>
            <div class="pagetypeItem">
        <div :class="active=='C'?'selectbox active':'selectbox defult'"  @click="selectcClk('C',16)">
          <img v-if="active==='C'" src="../../../static/select.png" alt />
          <img v-else src="../../../static/noselect.png" alt />
          <span>C 根据专家建议来决定</span>
          <!-- （跳转第16题） -->
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
      thisPage:15,
      active: "A",
      page:16
    };
  },  
};
</script>
<style lang="less" scoped>

.toothTest {

}
</style>


