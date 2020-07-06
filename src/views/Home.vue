<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  mounted(){
        this.$get('/banner').then((res)=>{
      console.log(res)
    })
    this.$get('/top/mv').then((res)=>{
      console.log(res)
    })
  }
}
</script>
