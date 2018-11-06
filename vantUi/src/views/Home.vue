<template>
  <div class="home">
<<<<<<< HEAD

              <goodsList></goodsList>
              <van-nav-bar
                  title="标题"
                  left-text="返回"
                  right-text="按钮"
                  left-arrow
                
                />
=======
              <keep-alive>
                  <goodsList></goodsList>
              </keep-alive>
             
>>>>>>> f27f7575035a2214af9545e569894bdcacb13df8
              <div>
                {{countfn}}
              </div>
              <button @click="max()">加1</button>
              <button @click="min()">减1</button>
  </div>
</template>
<script>
import goodsList from "@/components/goodsList.vue";

export default {
  name: "home",
  components: {
    goodsList
  },
  data() {
    return {
      count: ""
    };
  },
  created() {},
  computed: {
    countfn() {
      return this.$store.state.count;
    }
  },
  methods: {
    max() {
      this.$store.commit("max");
      console.log(this.$store.state.count); // -> 1
    },
    min() {
      console.log(this.$store.state.count); // -> 1
      this.$store.commit("min");
    }
  }
};
</script>


<style>
</style>

