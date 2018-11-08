<template>
  <div class="mine">
      <div class="header_div">
        <div><img src="../../static/images/jingdong.png" alt=""></div>
        <div>
          <div><span>Yao</span></div>
          <div><span>ID:</span><span>1001</span></div>
        </div>
        <div>
          <img src="../../static/images/set.png" alt="">
        </div>
      </div>

      <div class="card_div">
        <van-row>
          <van-col span="8">
            <div>今日收益(元)</div>
            <div class="paddingmax_div">99￥</div>
          </van-col>
          <van-col span="9">span: 8</van-col>
          <van-col  span="7"><div class="radius_div"><div>转化率</div><div>0.7%</div></div></van-col>
        </van-row>


        <van-row>
          <van-col span="8"><div>存款金额(元)</div>
          <div class="paddingmax_div">0</div></van-col>
          <van-col span="8"><div>累计收益(元)</div>
          <div class="paddingmax_div">16.5</div></van-col>
          <van-col span="8"><div>可用余额(元)</div>
          <div class="paddingmax_div">2</div></van-col>
        </van-row>
        <van-row >
          <van-col span="12" ><div  class="van-hairline--top van-hairline--right paddingmin_div">明细</div></van-col>
          <van-col span="12"><div  class="van-hairline--top paddingmin_div">提现</div></van-col>
        </van-row>
      </div>

  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "home",
  components: {}
};
</script>

<style lang="less" scoped>
@import "../../static/themes/var.less";
.paddingmax_div{
  margin:20px 0; 
}
.paddingmin_div{
  padding:5px 0;
}
.header_div {
  display: flex;
  font-size: @font-size12;
  padding-top: 15px;
  > div:nth-child(1) {
    flex-grow: 1;
    background: red;
    img {
      width: 45px;
      height: 45px;
    }
  }
  > div:nth-child(2) {
    flex-grow: 8;
    background: blue;
    text-align: left;
    padding-top: 10px;
  }
  > div:nth-child(3) {
    flex-grow: 1;
    background: red;
    img {
      width: 25px;
      height: 25px;
    }
  }
}

.card_div {
  border-radius: 15px;
  border: 1px solid #ccc;
  margin: 10px 10px 0px 10px;
  padding: 5px;
  .radius_div {
    width: 60px;
    height: 60px;
    border-radius: 50px;
    border: 1px solid #ccc;
    font-size: @font-size12;
    >div{
      margin-top:10px; 
    }
  }
}
</style>

