<template>
      <div class="list_content">
            <div class="header_div">
              <div><img src="../../static/images/jingdong.png" alt=""></div>
              <div>
                <div><span>小编推荐</span></div>
                <div><span>2018-11-25</span></div>
              </div>
              <div>
                <van-icon size="18px" name="share" />
              </div>
            </div>

            <div class="list_body_div">
              <div class="title_div"><span>题对人有帮助,内容完整,我也想知道答案 0 问题没有实际价值,缺少关键内..</span></div>
              <div class="img_div">
                <div class="img_box" v-for="(item,index) in img" :key='index'>
                  <img v-lazy="item" :key="item" alt="">
                </div>
              </div>
            </div>
      </div>
</template>
<script>

export default {
  name: "home",
  components: {
  },
  data() {
    return {
      img: [
        "https://img.alicdn.com/imgextra/i3/2032870312/O1CN011EAw2ZBUbPDRFs7_!!2032870312.jpg",
        "https://img.alicdn.com/imgextra/i2/2769132813/O1CN011WeObcdGnUBfFEo_!!2769132813.jpg",
        "https://img.alicdn.com/imgextra/i3/2032870312/O1CN011EAw2ZBUbPDRFs7_!!2032870312.jpg",
        "https://img.alicdn.com/imgextra/i4/2047605792/O1CN011semU5mUuBjnhwi_!!2047605792.jpg"
      ]
    };
  },
  created() {},
  computed: {

  },
  methods: {

  }
};
</script>


<style lang="less" scoped>
@import "../../static/themes/var.less";
.scroll_div {
  width: 100%;
  height: 90vh;
  overflow: hidden;
}

.header_div {
  display: flex;
  font-size: @font-size14;
  text-align: center;
  > div:nth-child(1) {
    flex-grow: 1;
    // background: red;
    img {
      width: 45px;
      height: 45px;
    }
  }
  > div:nth-child(2) {
    flex-grow: 8;
    // background: blue;
    text-align: left;
    padding-top: 10px;
  }
  > div:nth-child(3) {
    flex-grow: 1;
    // background: red;
    img {
      width: 25px;
      height: 25px;
    }
  }
}
.list_content {
  background: @white;
}

.list_body_div {
  .title_div {
    padding: 5px 8px;
    font-size: @font-size14;
  }
  .img_box {
    width: calc(33% - 5px);
    // height: 170px;
    margin-left: 5px;
    float: left;
    object-fit: cover;
    img {
      width: 100%;
      height: 100%;
    }
  }
}


</style>

