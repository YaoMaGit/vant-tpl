<template>
  <div class="tab">
        <van-tabbar fixed v-model="active">        
            <van-tabbar-item v-for="(item,index) in tabdata" :key="index" :icon="active==index?item.icon_active:item.icon" :to="item.bath">{{item.name}}</van-tabbar-item>
            <!-- <van-tabbar-item icon="search1" to="./Class">分类</van-tabbar-item>
            <van-tabbar-item icon="skin" to="./Pop">圈子</van-tabbar-item>
            <van-tabbar-item icon="wode" to="./Mine">我的</van-tabbar-item> -->
        </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "tab",
  components: {},
  data() {
    return {
      active: 0,
      tabdata: [
        {
          name: "首页",
          icon: "dianpu",
          icon_active: "dianpufill",
          bath: "./Home"
        },
        {
          name: "分类",
          icon: "search1",
          icon_active: "searchfill",
          bath: "./Class"
        },
        {
          name: "圈子",
          icon: "skin",
          icon_active: "skinfill",
          bath: "./Pop"
        },
        {
          name: "我的",
          icon: "wode",
          icon_active: "wodefill",
          bath: "./Mine"
        }
      ]
    };
  },
  watch: {
    
    $route(to,from) {
      let _this =this
      // console.log(to.name)
      if (to.name == "Home") {
        _this.active = 0;
      } else if (to.name == "Class") {
        _this.active = 1;
      } else if (to.name == "Pop") {
        _this.active = 2;
      } else if (to.name == "Mine") {
        _this.active = 3;
      }
    }
  },
  created() {}
};
</script>
<style lang="less" scoped>
@import '../../static/themes/theme.less';
</style>