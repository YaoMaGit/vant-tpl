<template>
  <div class="pop">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img style="width: 100%;" class="banner_img" :src="image" />
      </van-swipe-item>
    </van-swipe>

    <van-tabs v-model="active" swipeable>
      <van-tab v-for="(value,index) in 3" :title="'选项 ' + value" :key="index"> 
                  <poplist></poplist>
      </van-tab>
    </van-tabs>
    <!-- tab单元 -->




  </div>
</template>

<script>
import scroll from "@/components/scroll.vue";
import poplist from "@/components/pop_list.vue";

export default {
  name: "pop",
  components: {
    poplist
  },
  data() {
    return {
      active: 0,
      images: [
        "http://shenzhen.southcn.com/content/images/attachement/png/site4/20161025/f8bc12817281197915570e.png",
        "http://shenzhen.southcn.com/content/images/attachement/png/site4/20161025/f8bc12817281197915570e.png"
      ]
    };
  }
};
</script>

<style lang="less" scoped>
@import "../../static/themes/var.less";
.scroll_div {
  width: 100%;
  height: 90vh;
  overflow: hidden;
}
</style>

