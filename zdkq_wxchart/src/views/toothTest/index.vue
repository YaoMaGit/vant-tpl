<template>
  <div id="toothTest" class="toothTest">
    <div class="ceshi">
      <img src="../../../static/begin@2x.png" @click="btnClk()" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "toothTest",
  components: {},
  data() {
    return {
      value: ""
    };
  },
  watch: {
    $route(to, from) {
      console.log(from.path); //从哪来
      console.log(to.path); //到哪去
    }
  },
  mounted() {

  },
  methods: {
    btnClk() {
      this.$router.push({ name: "page1", query: { id: 1 } });
    }
  }
};
</script>

<style lang="less" scoped>
.toothTest {
  width: 100%;
  height: 100vh;
  background: url("../../../static/BG@2x.png");
  background-size: 100% 100%;
  img {
    width: 250px;
    position: fixed;
    bottom: 0px;
    left: calc(50% - 125px);
  }
}
</style>
