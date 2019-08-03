import Vue from 'vue'
import { mapGetters} from "vuex"; //先要引入
Vue.mixin({
  computed: {
    ...mapGetters({ TOOTHTESTDATA: "TOOTHTESTDATA" })
  },
  destoryed() {
    // 离开页面时销毁监听
    // window.removeEventListener('popstate', this.forbidBack, false);
  },
  mounted() {
    
    // if(this.$route.query.id){
    //   this.initPage = this.$route.query.id
    // }

    // // 监听手机物理返回键时禁止返回之前的路由
    // if (window.history && window.history.pushState) {
    //   window.addEventListener('popstate', this.forbidBack, false);
    //   this.forbidBack()
    // }

  },
  methods: {
    forbidBack() {
      window.history.pushState('forward', null, '#');
      window.history.forward(1);
    },
    selectcClk(val, page) {
      console.log(val);
      this.active = val;
      this.page = page;
    },
    btnClk() {
      let obj = {
        id: this.thisPage,
        answer: this.thisPage + this.active
      };
      this.$store.commit("TOOTHTESTDATA", obj);
      console.log(this.TOOTHTESTDATA);
      this.$router.push({ name: "page" + this.page, query: { id: this.TOOTHTESTDATA.length + 1 } });
    }
  }
})