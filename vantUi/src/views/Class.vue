<template>
<div class="pop">
      <scroll class="scroll_div">
              <ul class="content">
                    <li v-for="(item,index) in data"  @click="xxx()"  :key="index">{{item.author_name}}</li>
              </ul>
        </scroll>  
</div>

</template>

<script>
import scroll from "@/components/scroll.vue";

export default {
  components: {
    scroll
  },
  data() {
    return {
      data: []
    };
  },
  created() {
    var _this = this;
    _this.$api
      .JH_news(_this.$URL.HTTPS.INDEX, "type=top&key=123456")
      .then(res => {
        console.log(res);
        _this.data = res.articles;
      });
  },
  methods: {
    // _initScroll() {
    //   this.scroll = new BScroll(this.$refs.wrapper, {
    //     click: this.xxx
    //   }); //注意此处是 this.$refs.xxx
    // },
    xxx() {
      alert("xxxxx");
    }
  }
};
</script>
<style lang="less" scoped>
.scroll_div {
  width: 100%;
  height: 90vh;
  overflow: hidden;
}
</style>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            