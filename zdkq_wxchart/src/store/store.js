
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {  //要设置的全局访问的state对象
    toothTestData: [],
};
const getters = { //实时监听state值的变化(最新状态)
    TOOTHTESTDATA(){
        return state.toothTestData
    }
};
const mutations = {
    TOOTHTESTDATA(state, parps) { //下一页 
        state.toothTestData.push(parps);
    },
    TOOTHTESTDATAPOP(state, parps) { //返回页面 移除数组最后一个 
        state.toothTestData=parps;
    },
};
const actions = {
    TOOTHTESTDATA(state, parps) {
        context.commit('TOOTHTESTDATA', parps)
    },
};
const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});
export default store;