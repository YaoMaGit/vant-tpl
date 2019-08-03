<template>
  <div id="app">
    <transition name="slide-fade">
      <keep-alive v-if="this.$route.meta.keepAlive">
        <router-view />
      </keep-alive>
      <router-view v-else />
    </transition>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex"; //先要引入

export default {
  name: "app",
  computed: {
    ...mapGetters({ TOOTHTESTDATA: "TOOTHTESTDATA" })
  },
  watch: {
    $route(to, from) {
      let that = this;
      console.log(from); //从哪来
      console.log(to); //到哪去
      if (to.query.id) {
        if (from.query.id > to.query.id) {
          console.log(from.query.id+'返回'+to.query.id)
          let arr = that.TOOTHTESTDATA.slice(0,-1);
          that.$store.commit("TOOTHTESTDATAPOP", arr);
          console.log(that.TOOTHTESTDATA)
        }
      }
    }
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-enter
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(50px);
  opacity: 0;
}
</style>
