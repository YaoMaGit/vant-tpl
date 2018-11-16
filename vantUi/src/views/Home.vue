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
            <img  :src="module_imgs[0]"  alt="">
        </div>
<!-- 板块 -->
        <div class="module_div">
            <div class="module_left_div">
                <img :src="module_imgs[1]" alt="">
            </div>
            <div  class="module_right_div">
                <div  class="module_right_top_div">
                  <img :src="module_imgs[2]" alt="">
                </div>
                <div  class="module_right_bottom_div">
                  <img :src="module_imgs[3]" alt="">
                </div>
            </div>
        </div>

        <div class="list_title_div">
          <img src="../../static/images/tuijian.png" alt="">
        </div>

<!-- list -->
              <!-- <van-tabs @click="tab_clk" @change="tab_change" v-model="active" sticky swipeable>
                <van-tab v-for="(items,index) in tab_data" :key="index" :title="items.title">
                  <div id="animated-number-demo">
                    <input v-model.number="number" type="number" step="20">
                    <p>{{ animatedNumber }}</p>
                  </div>
                  
                </van-tab>
              </van-tabs> -->
              <div  class="scroll_div" ref="wrapper11">
                    <div class="tab_box">
                          <div class="tab_items_box">
                              <div v-for="(item,index) in tab_data" :class="activeTab==index? 'tab-item active':'tab-item'" @click="tab_clk(index)" :key="index">
                                {{item.title}}
                                </div>
                          </div>
                      </div>
              </div>
<!-- <goodsList></goodsList> -->
  </div>
</template>
<script>
// import scroll from "@/components/scroll.vue";
import BScroll from "better-scroll";
import goodsList from "@/components/goodsList.vue";

export default {
  name: "home",
  components: {
    goodsList
  },
  data() {
    return {
      number: 0,
      tweenedNumber: 0,
      activeTab: 0,
      count: "",
      active: 0,
      images: [
        "http://shenzhen.southcn.com/content/images/attachement/png/site4/20161025/f8bc12817281197915570e.png",
        "http://shenzhen.southcn.com/content/images/attachement/png/site4/20161025/f8bc12817281197915570e.png"
      ],
      module_imgs: [
        "http://api.dhcc.wang/uploads/1062/201811/10/f81a574f12637efdf030068a1e4af9fd.gif",
        "http://api.dhcc.wang/uploads/1062/201811/10/cd81758121215a7dc1c628ce41d9bc42.png",
        "http://api.dhcc.wang/uploads/1062/201811/12/8165ef2a67af7c5b9b99650d1085e0b7.gif",
        "http://api.dhcc.wang/uploads/1062/201811/12/f6e7bd907a4fa6a5f532dc8c9c8886d3.png"
      ],
      tab_data: [
        {
          id: 1,
          title: "女装",
          image:
            "http://api.dhcc.wang/uploads//201808/28/9854549730fb6170417597ba30285f29.jpg"
        },
        {
          id: 2,
          title: "女鞋",
          image:
            "http://api.dhcc.wang/uploads/1001/201807/27/f73034400142085a73c5c36cd48ffd0c.jpg"
        },
        {
          id: 3,
          title: "彩妆",
          image:
            "http://api.dhcc.wang/uploads/1001/201807/27/a6af634069a73e9d672bb9ba82815f40.jpg"
        },
        {
          id: 4,
          title: "饰品",
          image:
            "http://api.dhcc.wang/uploads/1001/201807/27/2efacd0590e12eff1927a377c7d4c85d.jpg"
        },
        {
          id: 6,
          title: "百货",
          image:
            "http://api.dhcc.wang/uploads/1001/201807/27/462b432a7c5c8b69c0584015ed57ddb4.jpeg"
        },
        {
          id: 7,
          title: "箱包",
          image:
            "http://api.dhcc.wang/uploads/1001/201807/27/94159d9f4988a68028670612c36bc3cc.jpg"
        },
        {
          id: 8,
          title: "数码",
          image:
            "http://api.dhcc.wang/uploads/1001/201807/27/7b8d7ef511dce0e82a5f552c50a4d5d7.jpeg"
        },
        {
          id: 9,
          title: "家居",
          image:
            "http://api.dhcc.wang/uploads/1001/201807/27/6cc437e1cb80b3dd55a02c97ec790bf8.jpg"
        },
        {
          id: 10,
          title: "男装",
          image:
            "http://api.dhcc.wang/uploads/1001/201807/27/34d1a87d7d079cbd2de65540f360c1fe.jpg"
        },
        {
          id: 85,
          title: "食品",
          image:
            "http://api.dhcc.wang/uploads//201808/29/8454c0818e2b648caebc49575440035c.jpg"
        },
        {
          id: 107,
          title: "母婴",
          image:
            "http://api.dhcc.wang/uploads//201809/18/58fa2d2adf4274ad1594e02c5e9ae8f8.jpg"
        },
        {
          id: 115,
          title: "运动",
          image:
            "http://api.dhcc.wang/uploads//201810/10/353c13f8ae143dff7e92e9beeb009ada.png"
        }
      ]
    };
  },
  created() {
    var _this = this;
    _this.$nextTick(() => {
      _this._initScroll();
    });
  },
  watch: {
    number: function(newValue) {
      TweenLite.to(this.$data, 0.5, { tweenedNumber: newValue });
    }
  },
  computed: {
    animatedNumber: function() {
      return this.tweenedNumber.toFixed(0);
    },
    countfn() {
      return this.$store.state.count;
    }
  },
  methods: {
    tab_clk(index) {
      this.activeTab = index;
    },
    tab_change(index, title) {
      console.log(title);
    },
    _initScroll() {
      this.$nextTick(() => {
        if (!this.scroll) {
                  this.scroll = new BScroll(this.$refs.wrapper11, {
          click: true,
          scrollX: true,
          eventPassthrough: "vertical" //忽略竖直方向的滚动
        });
        } else {
          this.scroll.refresh();
        }

      });
    },
    max() {
      this.$store.commit("max");
    },
    min() {
      this.$store.commit("min");
    }
  }
};
</script>


<style lang="less" scoped>
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
    width: 100%;
    display: block;
    margin: auto;
    // height: 100px;
  }
}

.module_div {
  width: 100%;
  // height: 188px;
  display: flex;
  .module_left_div {
    flex: 5;
    // height: 100%;
    // background: red;
    // overflow: hidden;
    // object-fit: cover;
  }
  .module_right_div {
    flex: 5;
    // height: 100%;
    .module_right_top_div {
      // background: #ccc;
      // width: 100%;
      height: 50%;
      // object-fit: cover;
      // overflow: hidden;
    }
    .module_right_bottom_div {
      // background: blue;
      height: 50%;
      // width: 100%;
      // object-fit: cover;
      // overflow: hidden;
    }
  }
  img {
    width: 100%;
    // height: 100%;
    display: block;
  }
}

.list_title_div {
  width: 100%;
  text-align: center;
  margin-top: 20px;
  img {
    width: 150px;
    display: inline-block;
  }
}

.tab_box {
  position: relative;
  // z-index: 100;
  height: 30px;
  margin: 15px 0;
  /*background-image: -webkit-linear-gradient( -33.69deg, rgb(255, 101, 68) 0%, rgb(255, 50, 74) 100%);*/
}

.tab_items_box {
  overflow-x: auto;
  white-space: nowrap;
  font-size: 15px;
  // -webkit-overflow-scrolling: touch;
  box-sizing: border-box;
}

.tab_items_box::-webkit-scrollbar {
  display: none !important;
}

.tab_items_box::-webkit-scrollbar {
  display: none;
}
.tab-item {
  display: inline-block;
  font-size: 0.6rem;
  /*height: 35px;*/
  height: 30px;
  padding: 0 12px;
  color: #000;
  background: none;
}

.tab-item.active {
  color: red;
  font-weight: bold;
  font-size: 0.7rem;
  border-bottom: 1px solid red;
}
.scroll_div {
  // width: 100vw;
  // height: 90vh;
  // overflow-x: hidden;
}
</style>

