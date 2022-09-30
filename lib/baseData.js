const {v4} = require('uuid')

const ARRGOODS = [
    {id: v4(), name: "Вытяжное устройство G2H", about: "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия", article: "G2H1065", image: "@/images/g2h.png", shortName: "G2H", price:"12644", priceFrom: "6848", priceTo: "56584", amount: 1, summ: 12644,},
    {id: v4(), name: "Вытяжное устройство BXC", about: "Многофункциональное вытяжное устройство для естественной и гибридной вентиляции", article: "G2H1066", image: "@/images/bxc.png", shortName: "BXC", price:"13644", priceFrom: "6848", priceTo: "56584", amount: 1, summ: 13644},
    {id: v4(), name: "Вытяжное устройство GHN", about: "Вытяжное устройство с датчиком присутствия", article: "G2H1067", image: "@/images/ghn.png", shortName: "GHN", price:"14644", priceFrom: "6848", priceTo: "56584", amount: 1, summ: 14644},
    {id: v4(), name: "Вытяжное устройство TDA", about: "Вытяжное устройство с датчиком присутствия", article: "G2H1068", image: "@/images/g2h.png", shortName: "TDA", price:"12644", priceFrom: "6848", priceTo: "56584", amount: 1, summ: 12644},
    ]

    exports.getGoods= () =>{        
        return ARRGOODS
    }