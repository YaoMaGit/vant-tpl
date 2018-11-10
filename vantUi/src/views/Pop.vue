<template>
  <div class="pop">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img style="width: 100%;" class="banner_img" :src="image" />
      </van-swipe-item>
    </van-swipe>

    <van-tabs v-model="active" swipeable>
      <van-tab v-for="(value,index) in 3" :title="'选项 ' + value" :key="index"> 
        内容 {{ value }}
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'pop',
  components: {
    
  },
   data() {
    return {
      active:0,
      images: [
        'http://shenzhen.southcn.com/content/images/attachement/png/site4/20161025/f8bc12817281197915570e.png',
        'http://shenzhen.southcn.com/content/images/attachement/png/site4/20161025/f8bc12817281197915570e.png',
      ]
    };
  }
}
</script>

<style lang="less" scoped>
@import "../../static/themes/var.less";
.banner_img{
  // width: 300px;
  // height: 600px;
}

</style>

