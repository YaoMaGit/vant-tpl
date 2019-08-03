<template>
  <div id="page" class="toothTest">
    <div class="bordview">
      <div class="title">
        {{initPage}}、
        <span>请选择您的咬合情况？(可多选)</span>
      </div>

      <van-row>
        <van-col class="col" span="12" v-for="(item,index) in jsonData" :key="index">
          <div :class="item.active?'imgDivActive':'imgDiv'" @click="selectcClk(item.type)">
            <img :src="item.img" alt />
          </div>
          <div class="selectDiv">
            <img v-if="item.active" src="../../../static/select.png" alt />
            <img v-else src="../../../static/noselect.png" alt />
            <span :class="item.active?'active':'defult'">{{item.type}} {{item.name}}</span>
            <!-- （跳转第10题） -->
          </div>
        </van-col>
      </van-row>
    </div>
    <img class="btnNext" src="../../../static/next.png" @click="btnClk()" alt />
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex"; //先要引入

export default {
  data() {
    return {
      initPage: "",
      thisPage: 9,
      active: "A",
      page: 10,
      jsonData: [
        {
          type: "A",
          name: "深覆盖",
          img: "../../../static/shenfugai.png",
          router: "10",
          active: true
        },
        {
          type: "B",
          name: "深覆合",
          img: "../../../static/shenfuhe.png",
          router: "10",
          active: false
        },
        {
          type: "C",
          name: "开颌",
          img: "../../../static/kaihe.png",
          router: "10",
          active: false
        },
        {
          type: "D",
          name: "以上都没有",
          img: "../../../static/zhengchang.png",
          router: "10",
          active: false
        }
      ]
    };
  },
  watch: {
    jsonData_AB_active(val) {
      console.log(val);
      if (val) {
        this.jsonData[2].active = false;
        this.jsonData[3].active = false;
      }
    },
    jsonData_C_active(val) {
      console.log(val);
      if (val) {
        this.jsonData[0].active = false;
        this.jsonData[1].active = false;
        this.jsonData[3].active = false;
      }
    },
    jsonData_D_active(val) {
      console.log(val);
      if (val) {
        for (let key = 0; key <= 2; key++) {
          this.jsonData[key].active = false;
        }
      }
    }
    // jsonData_ABCD_active(val) {
    //   console.log(val);
    //   if (val) {
    //     this.jsonData[this.jsonData.length - 1].active = false;
    //   }
    // }
  },
  computed: {
    ...mapGetters({ TOOTHTESTDATA: "TOOTHTESTDATA" }),
    jsonData_AB_active() {
      if (this.jsonData[0].active || this.jsonData[1].active) return true;
    },
    jsonData_C_active() {
      return this.jsonData[2].active;
    },
    jsonData_D_active() {
      return this.jsonData[this.jsonData.length - 1].active;
    }
    // jsonData_ABCD_active() {
    //   let bool = false;
    //   for (let key = 0; key <= 2; key++) {
    //     if (this.jsonData[key].active) {
    //       bool = true;
    //     }
    //   }
    //   return bool;
    // }
  },
  mounted() {
    this.initPage = this.$route.query.id;
    console.log(this.$route.query.id);
  },
  methods: {
    selectcClk(type) {
      console.log(type);
      for (const key in this.jsonData) {
        if (this.jsonData[key].type === type) {
          this.jsonData[key].active = !this.jsonData[key].active;
        }
      }
    },
    btnClk() {
      let string = "";
      for (const key in this.jsonData) {
        if (this.jsonData[key].active) {
          string += this.jsonData[key].type;
        }
      }
      let obj = {
        id: this.thisPage,
        answer: this.thisPage + string
      };
      console.log(obj);
      this.$store.commit("TOOTHTESTDATA", obj);
      this.$router.push({
        name: "page" + this.page,
        query: { id: this.TOOTHTESTDATA.length + 1 }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.toothTest {
}
</style>


