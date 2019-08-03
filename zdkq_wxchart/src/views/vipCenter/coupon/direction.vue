<template>
  <div id="flow">
    <div class="body">
      <div class="content view">
        每张优惠券具有一定的使用条件和期限，优惠劵使用
        一般性规则如下：
        1.首次注册平台会赠送您1-3张优惠券，具体面额以发放的为准；
        2.优惠券有使用期限限制，过了有效期不能使用；
        3.优惠券只能抵扣订单金额，优惠金额超出订单金额部分不能再次使用，不能兑换现金；
        4.每个订单只能使用一张优惠券；
        5.使用优惠券支付的订单，如果退款，优惠券抵扣金额不能退还，只能退还实际支付产品金额；退款金额＝退货产品价格-优惠金额；
        6.优惠券等抵扣金额不能开具发票；
        7.值得美在法律范围内保留对优惠券使用细则的最终解释权。
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
@import url("../../../common/css/globle.less");

#flow {
  width: 100%;
  height: 100vh;
  background: #ffffff;
  padding-top: 30px;
  .body {
    padding: 10px;
  }
  .title {
    font-size: 24px;
    margin: 0px 0 10px 30px;
  }
  .leftRadio {
    text-align: center;
    div {
      width: 16px;
      height: 16px;
      display: inline-block;
      background: @globleColor;
      border-radius: 50%;
      text-align: center;
      line-height: 16px;
      color: #ffffff;
      font-size: 13px;
    }
  }
  .dashed {
    //   height: 30px;
    text-align: center;
    span {
      border-left: 1px dashed @globleColor;
    }
  }
  .content {
    font-size: 14px;
    color: #666666;
  }
}
</style>


