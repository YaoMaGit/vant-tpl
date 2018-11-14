<template>
  <div class="home">
        <van-row class="top_div">
          <van-col span="6">
            <img src="../../static/images/jingdong.png" alt="">
            <span>淘宝</span>
          </van-col>
          <van-col span="6">
            <img src="../../static/images/jingdong.png" alt="">
            <span>淘宝</span>
          </van-col> 
          <van-col span="6">
            <img src="../../static/images/jingdong.png" alt="">
            <span>淘宝</span>
          </van-col> 
          <van-col span="6">
            <img src="../../static/images/jingdong.png" alt="">
            <span>淘宝</span>
          </van-col>
        </van-row>

<!-- 搜素 -->
        <div class="search_div">
          <van-row>
            <van-col span="18" class="input_div"><span>搜素或粘贴关键字</span></van-col>
            <van-col span="6" class="input_btn_div">搜素</van-col>
          </van-row>
        </div>

        <div class="notice_div">
            <van-row>
              <van-col span="6" class="notice_left_div">  
                <span><b>通告头条</b>:</span>              
              </van-col>
              <van-col span="18" class="notice_right_div">
                 <van-notice-bar background="#fff" color=""
                  text="恭喜王麻子获得999￥现金   恭喜张三获得999￥现金"
                />
              </van-col>
            </van-row>

        </div>

        <div class="swiper_div">
              <van-swipe :autoplay="3000">
                <van-swipe-item v-for="(image, index) in images" :key="index">
                  <img style="width: 100%;" class="banner_img" :src="image" />
                </van-swipe-item>
              </van-swipe>
        </div>

<!-- 广告 -->
        <div class="advertsment_div">
            <img src="../../static/images/team_banner.png" alt="">
        </div>
<!-- 板块 -->
        <div class="moudle_div">
            <div class="moudle_left_div">
                <img :src="module_imgs[0]" alt="">
            </div>
            <div  class="moudle_right_div">
                <div  class="moudle_right_top_div">
                  <img :src="module_imgs[1]" alt="">
                </div>
                <div  class="moudle_right_bottom_div">
                  <img :src="module_imgs[2]" alt="">
                </div>
            </div>
        </div>
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
      count: "",
      images: [
        "http://shenzhen.southcn.com/content/images/attachement/png/site4/20161025/f8bc12817281197915570e.png",
        "http://shenzhen.southcn.com/content/images/attachement/png/site4/20161025/f8bc12817281197915570e.png"
      ],
      module_imgs:[
        'http://api.dhcc.wang/uploads/1062/201811/10/cd81758121215a7dc1c628ce41d9bc42.png',
        'http://api.dhcc.wang/uploads/1062/201811/12/8165ef2a67af7c5b9b99650d1085e0b7.gif',
        'http://api.dhcc.wang/uploads/1062/201811/12/f6e7bd907a4fa6a5f532dc8c9c8886d3.png',
      ]
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
    },
    min() {
      this.$store.commit("min");
    }
  }
};
</script>


<style lang="less">
@import "../../static/themes/var.less";

.top_div {
  text-align: center;
  padding-top: 20px;
  img {
    width: 55px;
    border-radius: 50px;
    display: block;
    margin: auto;
    margin-bottom: 5px;
    box-shadow: 0 2px 10px #ccc; //top shadow
  }
  span {
  }
}
.search_div {
  box-shadow: 0 2px 10px #e5e5e5; //top shadow
  margin-top: 20px;
  padding: 0 3px;
  .input_div {
    background: #e5e5e5;
    color: #999;
    height: 45px;
    line-height: 45px;
    padding-left: 35px;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }
  .input_btn_div {
    background: red;
    color: #fff;
    height: 45px;
    line-height: 45px;
    text-align: center;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
}
.notice_div {
  margin-top: 20px;
  background: #fff;
  .notice_left_div {
    text-align: center;
    color: red;
    padding-top: 8px;
  }
}
.swiper_div {
  margin-top: 20px;
  img {
    height: 100px;
  }
}

.advertsment_div {
  width: 100%;
  padding-top: 20px;
  img {
    width: 100px;
    display: block;
    margin: auto;
    // height: 100px;
  }
}

.moudle_div {
  width: 100%;
  // height: 188px;
  display: flex;
  .moudle_left_div {
    flex: 5;
    // height: 100%;
    // background: red;
    // overflow: hidden;
    // object-fit: cover;
  }
  .moudle_right_div {
    flex: 5;
    // height: 100%;
    .moudle_right_top_div {
      // background: #ccc;
      // width: 100%;
      // height: 50%;
      // object-fit: cover;
      // overflow: hidden;
    }
    .moudle_right_bottom_div {
      // background: blue;
      // height: 50%;
      // width: 100%;
      // object-fit: cover;
      // overflow: hidden;
    }
  }
  img {
    width: 100%;
    // height: 100%;
  }
}
</style>

