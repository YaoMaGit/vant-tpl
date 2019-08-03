<template>
  <div id="listMudel">
    <div class="listBox view">
      <div>
        <span class="name">郑州市值得美（金水店）</span>
        <span class="distance">小于100米</span>
      </div>
      <div class="address">地址：郑州市金水路276号植得口腔医院郑州市金水路276号植得口腔医院</div>
      <div class="time">营业时间：09:00~12:00 14:00~18:00</div>
      <div class="btnItmes">
        <van-row type="flex" justify="space-between">
          <van-col span="6">
            <span class="telphone">400-123-456</span>
          </van-col>
          <van-col span="6">
            <span class="location">导航</span>
          </van-col>
          <van-col span="6">
            <span class="btn">立即预约</span>
          </van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="less" scoped>
@import url("../../common/css/globle.less");
#listMudel {
  font-size: 14px;
  color: #999999;
  .listBox {
    margin-bottom: 10px;
    .name {
      font-size: 18px;
      color: #333333;
    }
    .distance {
      font-size: 12px;
      float: right;
      margin-top: 5px;
    }
    .address {
      margin-top: 15px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .time {
      margin-top: 5px;
      padding-bottom: 15px;
      border-bottom: 1px solid #eeeeee;
    }
    .btnItmes {
      padding-top: 20px;
      .btn {
        color: #ffffff;
        background: @globleColor;
        padding: 8px 12px;
        border-radius: 4px;
      }
    }
  }
}
</style>
