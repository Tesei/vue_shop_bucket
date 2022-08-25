import { createStore } from 'vuex'

export default createStore({
  state: {
    likes: 2,
    wholeSumm: 0,
    needInstalletion: "",
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

  },
  getters: {
    doubleLikes(state) {
      return state.likes * 2
    }
  },
  mutations: {
    incrementLikes(state){
      state.likes += 1
    },
    decrementLikes(state){
        state.likes -= 1
    },
//===============================================================

    clearArrItems(state){
      state.goodsForBuy = []
    },
    degreeAmountItems (item){
      console.log(item);
      console.log('hi');
      
      if(item.amount === 0){
        // let indexItem = state.goodsForBuy(arrItem => arrItem === item);
        // state.goodsForBuy.splice(indexItem, indexItem);
      } 
      else item.amount -= 1
    },
    increaseAmountItems (item){      
      item.amount += 1
    }
  },
  actions: {
  },
  modules: {
  }
})
