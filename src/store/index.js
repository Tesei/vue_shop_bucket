import { createStore } from 'vuex';

export default createStore({
  state: ()=>({    
    needInstallation: false,
    goodsForBuy: [
        {id: 1, name: "Вытяжное устройство G2H", about: "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия", article: "G2H1065", image: "g2h", shortName: "G2H", price:"12644", priceFrom: "6848", priceTo: "56584", amount: 1, summ: 12644},
        {id: 2, name: "Вытяжное устройство BXC", about: "Вытяжное устройство для механической системы вентиляции", article: "G2H1066", image: "@/images/bxc.png", shortName: "BXC", price:"13644", priceFrom: "6848", priceTo: "56584", amount: 1, summ: 13644},
        {id: 3, name: "Вытяжное устройство GHN", about: "Вытяжное устройство с датчиком присутствия", article: "G2H1067", image: "@/images/ghn.png", shortName: "GHN", price:"14644", priceFrom: "6848", priceTo: "56584", amount: 1, summ: 14644},
    ],
    arrGoods: [
      {id: 1, name: "Вытяжное устройство G2H", about: "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия", article: "G2H1065", image: "@/images/g2h.png", shortName: "G2H", price:"12644", priceFrom: "6848", priceTo: "56584", amount: 1, summ: 12644,},
      {id: 2, name: "Вытяжное устройство BXC", about: "Вытяжное устройство для механической системы вентиляции", article: "G2H1066", image: "@/images/bxc.png", shortName: "BXC", price:"13644", priceFrom: "6848", priceTo: "56584", amount: 1, summ: 13644},
      {id: 3, name: "Вытяжное устройство GHN", about: "Вытяжное устройство с датчиком присутствия", article: "G2H1067", image: "@/images/ghn.png", shortName: "GHN", price:"14644", priceFrom: "6848", priceTo: "56584", amount: 1, summ: 14644},
      {id: 4, name: "Вытяжное устройство TDA", about: "Вытяжное устройство с датчиком присутствия", article: "G2H1068", image: "@/images/g2h.png", shortName: "TDA", price:"12644", priceFrom: "6848", priceTo: "56584", amount: 1, summ: 12644},
    ],
    wholeSumm: 0,
    amountGoods: 0,
  }),

  getters: {  },
  mutations: {
  setGoodsForBuy (state, goodsForBuy) {
      state.goodsForBuy = goodsForBuy;
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
  increaseAmountItems ({state, commit}, someItem){      
    let indexItem = state.goodsForBuy.findIndex(arrItem => arrItem.id === someItem.id);    
    commit("increment", indexItem);
    commit("changeSummItem", indexItem);
    commit("setWholeSumm", state.goodsForBuy.reduce((previousValue, item) => item.summ + previousValue, 0));
    commit("setAmountGoods", state.goodsForBuy.reduce((previousValue, item) => item.amount + previousValue, 0));
  },
  degreaseAmountItems ({state, commit}, someItem){      
    let indexItem = state.goodsForBuy.findIndex(arrItem => arrItem.id === someItem.id);    
    commit("decrement", indexItem);
    commit("changeSummItem", indexItem);
    commit("setGoodsForBuy", state.goodsForBuy.filter(p => p.amount > 0));
    commit("setWholeSumm", state.goodsForBuy.reduce((previousValue, item) => item.summ + previousValue, 0));
    commit("setAmountGoods", state.goodsForBuy.reduce((previousValue, item) => item.amount + previousValue, 0));

  },
  calculateWholeSumm ({state, commit}){
    commit("setWholeSumm", state.goodsForBuy.reduce((previousValue, item) => item.summ + previousValue, 0))
  },
  deleteItem ({state, commit}, item){
    commit("setGoodsForBuy", state.goodsForBuy.filter(p => p !== item));
    commit("setWholeSumm", state.goodsForBuy.reduce((previousValue, item) => item.summ + previousValue, 0));
    commit("setAmountGoods", state.goodsForBuy.reduce((previousValue, item) => item.amount + previousValue, 0));
    if(state.goodsForBuy.length === 0) commit("setneedInstallation", false);
  },
  clearBucket ({state, commit}){
    commit("setGoodsForBuy", []);
    commit("setWholeSumm", state.goodsForBuy.reduce((previousValue, item) => item.summ + previousValue, 0));
    commit("setAmountGoods", state.goodsForBuy.reduce((previousValue, item) => item.amount + previousValue, 0));
    commit("setneedInstallation", false);
  },
  calculateAmountGoods ({state, commit}){
    commit("setAmountGoods", state.goodsForBuy.reduce((previousValue, item) => item.amount + previousValue, 0));
  },
  addIteminList ({state, commit}, item){
    if(!state.goodsForBuy.find(someItem => someItem.id === item.id)) {
      commit("setAmountGoods", state.goodsForBuy.push(item));
      commit("setWholeSumm", state.goodsForBuy.reduce((previousValue, item) => item.summ + previousValue, 0));
      commit("setAmountGoods", state.goodsForBuy.reduce((previousValue, item) => item.amount + previousValue, 0));
    }
    else this.dispatch("increaseAmountItems", item);
  },
  },  
})
