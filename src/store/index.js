import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: ()=>({    
    needInstallation: false,
    goodsForBuy: [],
    arrGoods: [],
    wholeSumm: 0,
    amountGoods: 0,
    dataSending: false,
    dataDownloading: false,
    orderSuccess: false,
    orderError: false,
    errors: [],    // массив для записи ошибок
  }),
  mutations: {
  setGoodsForBuy (state, goodsForBuy) {
      state.goodsForBuy = goodsForBuy;
  },
  setArrGoods (state, arrGoods) {
      state.arrGoods = arrGoods;
  },
  setneedInstallation (state, needInstallation) {
      state.needInstallation = needInstallation;
  },
  setWholeSumm (state, wholeSumm) {
      state.wholeSumm = wholeSumm;
  },
  setAmountGoods (state, amountGoods) {     
    state.amountGoods = amountGoods;
  },
  setDataSending (state, dataSending) {     
    state.dataSending = dataSending;
  },
  setDataDownloading (state, dataDownloading) {     
    state.dataDownloading = dataDownloading;
  },
  setOrderSuccess (state, orderSuccess) {     
    state.orderSuccess = orderSuccess;
  },
  setOrderError (state, orderError) {     
    state.orderError = orderError;
  },
  setErrors (state, errors) {     
    state.errors = errors;
  },
  increment ( state, index) {
      state.goodsForBuy[index].amount++;      
  },
  decrement ( state, index) {
      if(state.goodsForBuy[index].amount > 0) state.goodsForBuy[index].amount--;
  },
  changeSummItem ( state, index) {     
      state.goodsForBuy[index].summ = state.goodsForBuy[index].amount * state.goodsForBuy[index].price;
  }  
  },

  actions: {
  increaseAmountItems ({state, commit, dispatch}, someItem){      
    let indexItem = state.goodsForBuy.findIndex(arrItem => arrItem.id === someItem.id);    
    commit("increment", indexItem);
    commit("changeSummItem", indexItem);
    commit("setWholeSumm", state.goodsForBuy.reduce((previousValue, item) => item.summ + previousValue, 0));
    commit("setAmountGoods", state.goodsForBuy.reduce((previousValue, item) => item.amount + previousValue, 0));
    dispatch('updateDataOnServer')
  },
  degreaseAmountItems ({state, commit, dispatch}, someItem){      
    let indexItem = state.goodsForBuy.findIndex(arrItem => arrItem.id === someItem.id);    
    commit("decrement", indexItem);
    commit("changeSummItem", indexItem);
    commit("setGoodsForBuy", state.goodsForBuy.filter(p => p.amount > 0));
    commit("setWholeSumm", state.goodsForBuy.reduce((previousValue, item) => item.summ + previousValue, 0));
    commit("setAmountGoods", state.goodsForBuy.reduce((previousValue, item) => item.amount + previousValue, 0));
    dispatch('updateDataOnServer')
  },
  calculateWholeSumm ({state, commit}){
    commit("setWholeSumm", state.goodsForBuy.reduce((previousValue, item) => item.summ + previousValue, 0))
  },
  async deleteItem ({state, commit}, item){
    await axios.delete(`http://localhost:3000/api/order/${item.id}`)
          .then(() => {
            commit("setGoodsForBuy", state.goodsForBuy.filter(p => p !== item));
            commit("setWholeSumm", state.goodsForBuy.reduce((previousValue, item) => item.summ + previousValue, 0));
            commit("setAmountGoods", state.goodsForBuy.reduce((previousValue, item) => item.amount + previousValue, 0));
            if(state.goodsForBuy.length === 0) commit("setneedInstallation", false);
          })
          .catch(e => {
              commit("setErrors", [e]);
          })
  },
  async clearBucket ({state, commit}){
    try {
    commit("setGoodsForBuy", []);
    commit("setWholeSumm", state.goodsForBuy.reduce((previousValue, item) => item.summ + previousValue, 0));
    commit("setAmountGoods", state.goodsForBuy.reduce((previousValue, item) => item.amount + previousValue, 0));
    commit("setneedInstallation", false);
    await axios.delete(`http://localhost:3000/api/order`)    
    } catch(e) {
        commit("setErrors", [e])
    } 
  },
  calculateAmountGoods ({state, commit}){
    commit("setAmountGoods", state.goodsForBuy.reduce((previousValue, item) => item.amount + previousValue, 0));
  },
  async addIteminList ({state, commit, dispatch}, item){    
      if(!state.goodsForBuy.find(someItem => someItem.id === item.id)) {
        commit("setAmountGoods", state.goodsForBuy.push(item));
        commit("setWholeSumm", state.goodsForBuy.reduce((previousValue, item) => item.summ + previousValue, 0));
        commit("setAmountGoods", state.goodsForBuy.reduce((previousValue, item) => item.amount + previousValue, 0));
      }
      else this.dispatch("increaseAmountItems", item);    
    dispatch('updateDataOnServer')
  },
  async orderSend ({commit}){
    commit("setDataSending", true)
    await axios.post(`http://localhost:3000/api/order`)
          .then(() => {
            commit("setDataSending", false);                  
            commit("setOrderSuccess", true);
            setTimeout(()=> commit("setOrderSuccess", false), 3000)
          })
          .catch(e => {
              commit("setErrors", [e]);              
              commit("setOrderError", true);
          })
          .finally(()=> commit("setDataSending", false))
  },
  async changeInstallStatus ({commit, state}){
    await axios.patch(`http://localhost:3000/api/order`, {status: state.needInstallation})
      .catch(e => {
          commit("setErrors", [e]);
      })
  },
  async downloadStartParametrs ({ commit }){
    commit("setDataDownloading", true);    

    await axios.get(`http://localhost:3000/api/order`)
          .then((response ) => {
            commit("setDataDownloading", false);    
            commit("setGoodsForBuy", response.data.goods);
            commit("setArrGoods", response.data.sliderItems);
            commit("setneedInstallation", response.data.needInstallation);    
          })
          .catch(e => {
              commit("setErrors", [e]);              
          })
          .finally(()=> commit("setDataDownloading", false))
  },
  async updateDataOnServer({state, commit}){
    await axios.put(`http://localhost:3000/api/order`, {goods: state.goodsForBuy, needInstallation: state.needInstallation})
    .catch(e => {
        commit("setErrors", [e]);
    })
  }
  },  
})
