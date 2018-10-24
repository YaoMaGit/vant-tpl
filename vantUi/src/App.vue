<template>
  <div id="app">
    <tabbar></tabbar>
      
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    <router-view/>
  </div>
</template>
<script>
// @ is an alias to /src
import tabbar from '@/components/tabbar.vue'

export default {
  name: 'app',
  components: {
    tabbar
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
