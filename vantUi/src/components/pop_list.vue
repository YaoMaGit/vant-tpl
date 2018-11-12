<template>
      <div class="list_content">
        <div  class="box van-hairline--top" v-for="(item1,index)  in 3" :key="index" style="display:block;">
            <div class="header_div">
              <div><img src="../../static/images/jingdong.png" alt=""></div>
              <div>
                <div><span>小编推荐</span></div>
                <div><span>2018-11-25</span></div>
              </div>
              <div >
                <!-- <van-icon size="18px" name="share" /> -->
                  <div class="detail_div" @click="detail_clk()">
                      <van-icon class="icon_div" name="photo" />查看详情</div>
                    <div class="detail_div" @click="detail_clk()">
                      <van-icon class="icon_div" name="share" />一键分享</div>
              </div>
            </div>

            <div class="list_body_div">
              <div class="title_div"><span>题对人有帮助,内容完整,我也想知道答案 0 问题没有实际价值,缺少关键内..</span></div>
              <div class="img_div">
                <div class="img_box" v-if="type==0" v-for="(item,index) in img1" :key='index'>
                  <img v-lazy="item" :key="item" alt=""  @click="Image_Preview(img1,index)">
                </div>
                  <div class="img_box" v-if="type==1" v-for="(item,index) in img2" :key='index' >
                  <img v-lazy="item" :key="item" alt=""  @click="Image_Preview(img2,index)">
                </div>
                  <div class="img_box" v-if="type==2" v-for="(item,index) in img3" :key='index'>
                  <img v-lazy="item" :key="item" alt=""   @click="Image_Preview(img3,index)">
                </div>
              </div>
            </div>
        </div>

      </div>
</template>
<script>
import { ImagePreview } from "vant";

export default {
  name: "home",
  components: {},
  props: {
    type: ""
  },
  data() {
    return {
      // type:type,
      img1: [
        "https://img.alicdn.com/imgextra/i3/2032870312/O1CN011EAw2ZBUbPDRFs7_!!2032870312.jpg",
        "https://img.alicdn.com/imgextra/i2/2769132813/O1CN011WeObcdGnUBfFEo_!!2769132813.jpg",
        "https://img.alicdn.com/imgextra/i3/2032870312/O1CN011EAw2ZBUbPDRFs7_!!2032870312.jpg",
        "https://img.alicdn.com/imgextra/i4/2047605792/O1CN011semU5mUuBjnhwi_!!2047605792.jpg"
      ],
      img2: [
        "https://img.alicdn.com/i4/2944846611/O1CN011yhsrdHzc2zf7AV_!!2944846611.jpg",
        "https://img.alicdn.com/i2/2944846611/O1CN011yhsrcwCv067jX7_!!2944846611.jpg",
        "https://img.alicdn.com/i4/2944846611/O1CN01zVPSbP1yhsrj8pe45_!!2944846611.jpg",
        "https://img.alicdn.com/i1/2944846611/O1CN01tUfXOn1yhsrcMBcXJ_!!2944846611.jpg"
      ],
      img3: [
        "https://img.alicdn.com/i4/2944846611/O1CN011yhsrdHzc2zf7AV_!!2944846611.jpg",
        "https://img.alicdn.com/imgextra/i3/2032870312/O1CN011EAw2ZBUbPDRFs7_!!2032870312.jpg",
        "https://img.alicdn.com/imgextra/i4/2047605792/O1CN011semU5mUuBjnhwi_!!2047605792.jpg",
        "https://img.alicdn.com/i1/2944846611/O1CN01tUfXOn1yhsrcMBcXJ_!!2944846611.jpg"
      ]
    };
  },
  created() {},
  computed: {},
  methods: {
    Image_Preview(imgbath, position) {
      const instance = ImagePreview({
        images: imgbath,
        startPosition: typeof position === "number" ? position : 0,
        showIndicators: true,
        onClose() {
          // do something
        }
      });
    }
  }
};
</script>


<style lang="less" scoped>
@import "../../static/themes/var.less";

.list_content {
  background: @white;
  .box {
    clear: both;
    padding: 10px 5px;
  }
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
    flex-grow: 5;
    // background: blue;
    text-align: left;
    padding-top: 10px;
  }
  > div:nth-child(3) {
    flex-grow: 4;
  font-size: @font-size12;
  > div {
    background: red;
    display: inline-block;
    border-radius: 50px;
    padding: 3px 5px;
    margin-left: 10px;
    color: @white;
    margin-top: 12px;
    .icon_div {
      vertical-align: middle;
    }
  }
  }
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

