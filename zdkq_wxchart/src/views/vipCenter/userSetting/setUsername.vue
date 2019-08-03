<template>
  <div id="setUsername">
    <van-cell-group>
      <van-field
        v-model="username"
        clearable
        placeholder="请输入用户名"
        @click-right-icon="$toast('question')"
      />
    </van-cell-group>

    <div class="save">
      <span>保存</span>
    </div>
  </div>
</template>
    
<script>
export default {
  components: {},
  data() {
    return {
      showPopup: false,
      username: "王大锤678"
    };
  }
};
</script>

<style lang="less" scoped>
@import url("../../../common/css/globle.less");

#setUsername {
  font-size: 14px;
  .save {
    background: @globleColor;
    width: 90%;
    margin: auto;
    margin-top: 35px;
    border-radius: 5px;
    padding: 15px 0;
    text-align: center;
    color: #ffffff;
  }
}
</style>
