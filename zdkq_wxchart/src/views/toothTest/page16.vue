<template>
  <div id="page" class="toothTest">
    <div class="bordview">
      <div class="title">
        {{initPage}}、
        <span>您在选择隐形正畸治疗方案过程时更看重方案的什么？(单选)</span>
      </div>

      <div class="pagetype2">
        <div class="pagetypeItem">
          <div :class="active=='A'?'selectbox active':'selectbox defult'" @click="selectcClk('A')">
            <img v-if="active==='A'" src="../../../static/select.png" alt />
            <img v-else src="../../../static/noselect.png" alt />
            <span>A 价格</span>
            <!-- （跳转第16题） -->
          </div>
        </div>
        <div class="pagetypeItem">
          <div :class="active=='B'?'selectbox active':'selectbox defult'" @click="selectcClk('B')">
            <img v-if="active==='B'" src="../../../static/select.png" alt />
            <img v-else src="../../../static/noselect.png" alt />
            <span>B 治疗周期</span>
            <!-- （跳转第16题） -->
          </div>
        </div>
        <div class="pagetypeItem">
          <div :class="active=='C'?'selectbox active':'selectbox defult'" @click="selectcClk('C')">
            <img v-if="active==='C'" src="../../../static/select.png" alt />
            <img v-else src="../../../static/noselect.png" alt />
            <span>C 治疗的效果</span>
            <!-- （跳转第16题） -->
          </div>
        </div>
        <div class="pagetypeItem">
          <div :class="active=='D'?'selectbox active':'selectbox defult'" @click="selectcClk('D')">
            <img v-if="active==='D'" src="../../../static/select.png" alt />
            <img v-else src="../../../static/noselect.png" alt />
            <span>D 以上都包括</span>
            <!-- （跳转第16题） -->
          </div>
        </div>
      </div>
    </div>
    <img class="btnNext" src="../../../static/next.png" @click="btnClk()" alt />
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex"; //先要引入

export default {
  data() {
    return { initPage: "", thisPage: 16, active: "A" };
  },
  computed: {
    ...mapGetters({ TOOTHTESTDATA: "TOOTHTESTDATA" })
  },
  mounted() {
    (this.initPage = this.$route.query.id), console.log(this.$route.query.id);
  },
  methods: {
    selectcClk(val, page) {
      console.log(val);
      this.active = val;
      this.page = page;
    },
    btnClk() {
      let obj = {
        id: this.thisPage,
        answer: this.thisPage+this.active
      };
      this.$store.commit("TOOTHTESTDATA", obj);
      console.log(this.TOOTHTESTDATA);
      this.$router.push({
        name: "submitPages",
        query: { id: this.TOOTHTESTDATA.length + 1 }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.toothTest {
}
</style>


