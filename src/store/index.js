import { createStore } from 'vuex';

export default createStore({
  state: ()=>({    
    needInstalletion: "",
    // finalOrder: setFinalOrder(),
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
      {id: 5, name: "Вытяжное устройство G2H", about: "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия", article: "G2H1065", image: "@/images/g2h.png", shortName: "G2H", price:"12644", priceFrom: "6848", priceTo: "56584", amount: 1, summ: 13644},
      {id: 6, name: "Вытяжное устройство BXC", about: "Вытяжное устройство для механической системы вентиляции", article: "G2H1066", image: "@/images/bxc.png", shortName: "BXC", price:"13644", priceFrom: "6848", priceTo: "56584", amount: 1, summ: 14644},
      {id: 7, name: "Вытяжное устройство GHN", about: "Вытяжное устройство с датчиком присутствия", article: "G2H1067", image: "@/images/ghn.png", shortName: "GHN", price:"14644", priceFrom: "6848", priceTo: "56584", amount: 1, summ: 12644},
      {id: 8, name: "Вытяжное устройство TDA", about: "Вытяжное устройство с датчиком присутствия", article: "G2H1068", image: "@/images/g2h.png", shortName: "TDA", price:"12644", priceFrom: "6848", priceTo: "56584", amount: 1, summ: 13644},
      {id: 9, name: "Вытяжное устройство G2H", about: "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия", article: "G2H1065", image: "@/images/g2h.png", shortName: "G2H", price:"12644", priceFrom: "6848", priceTo: "56584", amount: 1, summ: 14644},
      {id: 10, name: "Вытяжное устройство BXC", about: "Вытяжное устройство для механической системы вентиляции", article: "G2H1066", image: "@/images/bxc.png", shortName: "BXC", price:"13644", priceFrom: "6848", priceTo: "56584", amount: 1, summ: 12644},
      {id: 11, name: "Вытяжное устройство GHN", about: "Вытяжное устройство с датчиком присутствия", article: "G2H1067", image: "@/images/ghn.png", shortName: "GHN", price:"14644", priceFrom: "6848", priceTo: "56584", amount: 1, summ: 13644},
      {id: 12, name: "Вытяжное устройство TDA", about: "Вытяжное устройство с датчиком присутствия", article: "G2H1068", image: "@/images/g2h.png", shortName: "TDA", price:"12644", priceFrom: "6848", priceTo: "56584", amount: 1, summ: 14644},
    ],
    wholeSumm: "",

  }),

  getters: {
    wholeSumm (state, commit) {
      commit("setWholeSumm", state.goodsForBuy.reduce((previousValue, item) => item.summ + previousValue, 0))
    }
  },
  mutations: {
    clearArrItems(state){
      state.goodsForBuy = []
  },
  setGoodsForBuy (state, goodsForBuy) {
      state.goodsForBuy = goodsForBuy;
  },
  setNeedInstalletion (state, needInstalletion) {
      state.needInstalletion = needInstalletion;
  },
  setWholeSumm (state, wholeSumm) {
      state.wholeSumm = wholeSumm;
  },
  increment ( state, index) {
      state.goodsForBuy[index].amount++;      
  },
  dicrement ( state, index) {
      if(state.goodsForBuy[index].amount > 0) state.goodsForBuy[index].amount--;
  },
  changeSummItem ( state, index) {     
      state.goodsForBuy[index].summ = state.goodsForBuy[index].amount * state.goodsForBuy[index].price;
  },
  },
  actions: {
  increaseAmountItems ({state, commit}, someItem){      
    let indexItem = state.goodsForBuy.findIndex(arrItem => arrItem.id === someItem.id);    
    commit("increment", indexItem);
    commit("changeSummItem", indexItem);
    commit("setWholeSumm", state.goodsForBuy.reduce((previousValue, item) => item.summ + previousValue, 0))
  },
  degreaseAmountItems ({state, commit}, someItem){      
    let indexItem = state.goodsForBuy.findIndex(arrItem => arrItem.id === someItem.id);    
    commit("dicrement", indexItem);
    commit("changeSummItem", indexItem);
    commit("setGoodsForBuy", state.goodsForBuy.filter(p => p.amount > 0));
    commit("setWholeSumm", state.goodsForBuy.reduce((previousValue, item) => item.summ + previousValue, 0));

  },
  calculateWholeSumm ({state, commit}){
    commit("setWholeSumm", state.goodsForBuy.reduce((previousValue, item) => item.summ + previousValue, 0))
  },
  deleteItem ({state, commit}, item){
    commit("setGoodsForBuy", state.goodsForBuy.filter(p => p !== item));
  }
  },  
})
