<template>

<div class="wrapper" ref="wrapper">
        <ul class="content">
              <li v-for="(item,index) in data"  @click="xxx()"  :key="index">{{item.author_name}}</li>
        </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  data() {
    return {
      data: []
      // scroll:'',
    };
  },
  created() {
    var _this = this;
    _this.$api.JH_news(_this.$URL.HTTPS.INDEX, "type=top&key=123456").then(res => {
        console.log(res);
        _this.data = res.articles;
        _this.$nextTick(() => {
          _this._initScroll()
        });
      });
  },
  methods: {
    _initScroll() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: this.xxx,
      }); //注意此处是 this.$refs.xxx
    },
        xxx(){
      alert("xxxxx")
    }
  }
};
</script>
<style lang="less" scoped>
.wrapper {
  width: 100%;
  height: 90vH;
  overflow: hidden;
}
</style>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            