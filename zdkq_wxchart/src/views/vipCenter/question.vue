<template>
  <div id="question">
    <div class="linkCell">
      <van-cell v-for="(item,index) in  listdata" :key="index" :title-style="cellStyle" title="我可以通过何种方式进行支付？" is-link to="questionDetail" />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      value: "",
      listdata:[1,2,3],
      cellStyle: "overflow:hidden;white-space: nowrap;text-overflow: ellipsis;"
    };
  }
};
</script>

<style lang="less" scoped>
@import url("../../common/css/globle.less");
#question {
  .linkCell {
    van-icon left-icon {
      color: #c4c4c4 !important;
    }
  }
}
</style>
