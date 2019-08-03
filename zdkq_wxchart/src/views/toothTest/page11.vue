<template>
  <div id="page" class="toothTest">
    <div class="bordview">
      <div class="title">
        {{initPage}}、
        <span>您有口腔方面的疾病吗？(可多选，最多选3个)</span>
      </div>

      <div class="pagetype2">
        <div
          class="pagetypeItem"
          @click="selectcClk(item.type,index)"
          v-for="(item,index) in jsonData"
          :key="index"
        >
          <div :class="item.active?'selectbox active':'selectbox defult'">
            <img v-if="item.active" src="../../../static/select.png" alt />
            <img v-else src="../../../static/noselect.png" alt />
            <span>{{item.type}} {{item.name}}</span>
            <!-- （跳转第12题） -->
          </div>
        </div>
      </div>
    </div>
    <img class="btnNext" src="../../../static/next.png" @click="btnClk()" alt />
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex"; //先要引入
import { Toast } from "vant";

export default {
  data() {
    return {
      initPage: "",
      thisPage: 11,
      active: "A",
      page: 12,
      jsonData: [
        {
          type: "A",
          name: "牙周炎",
          router: "12",
          active: true
        },
        {
          type: "B",
          name: "牙体缺损",
          router: "12",
          active: false
        },
        {
          type: "C",
          name: "牙缺失",
          router: "12",
          active: false
        },
        {
          type: "D",
          name: "龋齿",
          router: "12",
          active: false
        },
        {
          type: "E",
          name: "以上都没有",
          router: "12",
          active: false
        }
      ]
    };
  },
  watch: {
    jsonData_E_active(val) {
      console.log(val);
      if (val) {
        for (let key = 0; key <= 3; key++) {
          this.jsonData[key].active = false;
        }
      }
    },
    jsonData_ABCD_active(val) {
      console.log(val);
      if (val) {
        this.jsonData[this.jsonData.length - 1].active = false;
      }
    }
  },
  computed: {
    ...mapGetters({ TOOTHTESTDATA: "TOOTHTESTDATA" }),
    jsonData_E_active() {
      return this.jsonData[this.jsonData.length - 1].active;
    },
    jsonData_ABCD_active() {
      let bool = false;
      for (let key = 0; key <= 3; key++) {
        if (this.jsonData[key].active) {
          bool = true;
        }
      }
      return bool;
    }
  },
  mounted() {
    this.initPage = this.$route.query.id;
    console.log(this.$route.query.id);
  },
  methods: {
    selectcClk(type, index) {
      console.log(index);

      if (type == "E") {
        for (const key in this.jsonData) {
          if (this.jsonData[key].type === type) {
            this.jsonData[key].active = !this.jsonData[key].active;
          }
        }
      } else {
        if (this.jsonData[index].active) {
          for (const key in this.jsonData) {
            if (this.jsonData[key].type === type) {
              this.jsonData[key].active = !this.jsonData[key].active;
            }
          }
        } else {
          let i = 0;
          for (const key in this.jsonData) {
            if (this.jsonData[key].active) {
              i++;
            }
          }
          if (i > 2) {
            Toast("最多选3个");
          } else {
            for (const key in this.jsonData) {
              if (this.jsonData[key].type === type) {
                this.jsonData[key].active = !this.jsonData[key].active;
              }
            }
          }
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
      console.log(this.TOOTHTESTDATA);
      let obj = {
        id: this.thisPage,
        answer: this.thisPage + string
      };
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


