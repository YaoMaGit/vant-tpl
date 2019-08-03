<template>

</template>
<script>
export default {
  props: ["dateTimeList"],
  data() {
    return {
      dateActive: 0,
      itemActive: 0,
      activeItem: []
    };
  },
  mounted() {
    let arr = [];
    for (const key in this.dateTimeList) {
      arr.push({
        date: key,
        time: this.dateTimeList[key]
      });
    }
    this.dateTimeList = arr;
    console.log(this.dateTimeList);
    this.dateClk(this.dateActive);
  },
  methods: {
    dateClk(index) {
      this.dateActive = index;
      this.activeItem = this.dateTimeList[index].time;
    },
    timeClk(index) {
      this.itemActive = index;
    },
    onCancel(){

    },
    onConfirm(){
      console.log(this.dateActive)
       this.$bus.emit('dateActive', this.dateActive );

    },
  }
};
</script>
<style lang="less" scoped>
@import url("../common/css/globle.less");


</style>


