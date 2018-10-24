<template>
  <div class="tab">
        <van-tabbar v-model="active">
        <van-tabbar-item icon="shop">标签</van-tabbar-item>
        <van-tabbar-item icon="chat" dot>标签</van-tabbar-item>
        <van-tabbar-item icon="records" info="5">标签</van-tabbar-item>
        <van-tabbar-item icon="gold-coin" info="20">标签</van-tabbar-item>
        </van-tabbar>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    
  },
  data(){
      
  }
}
</script>
