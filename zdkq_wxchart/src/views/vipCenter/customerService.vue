<template>
  <div id="question">
    <div class="linkCell">
      <van-cell title="在线客服" is-link to="questionDetail" />
      <van-cell title="电话客服" is-link to="questionDetail" />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      value: "",
    };
  }
};
</script>

<style lang="less" scoped>
</style>
