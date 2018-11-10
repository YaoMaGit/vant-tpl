<template>
  <div id="app">
    
          <transition name="slide-fade">
            <keep-alive>
              <router-view/>
            </keep-alive>
          </transition>
    

    <tabbar class="tabbar"></tabbar>
  </div>
</template>
<script>
import tabbar from "@/components/tabbar.vue";

export default {
  name: "app",
  components: {
    tabbar
  },
  data() {
    return {
      goodslist: "goodslist"
    };
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
.tabbar{
  position: fixed;
  bottom:0px;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-enter
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(100px);
  opacity: 0;
}
</style>
