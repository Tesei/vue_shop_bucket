//===============================================================
// Импровизированная база-данных
//===============================================================
let orderList = []
const arrGoods = require('./lib/baseData')
let startParametrs = {
    goods: arrGoods.getGoods().slice(0,3),
    needInstallation: false,
}
//===============================================================
//===============================================================

const express = require('express')
// для корректной работы с путями подключаем модуль path
const path = require('path')
// Устанавливаем модуль который будет генерировать (функцией) id (к примеру в списке объектов массива)
const {v4} = require('uuid')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000
// Основа вверху ===============================================================

let corsOptions = {
    origin : ['http://localhost:8080', 'http://localhost:8081'],
}

// midleWare - промежуточное ПО для обработки JSON
app.use(express.json())
app.use(cors(corsOptions))


// GET
app.get('/api/order', (req,res) => {
    // setTimeout(()=>{
        res.status(200).json({...startParametrs ,sliderItems: arrGoods.getGoods()})
    // },1000)
})

// POST
app.post('/api/order', (req, res)=> {
    let order = {...startParametrs, id: v4(), dataCreated: new Date()}   
    orderList.push(order)
    // Статус 201 означает,что элемент был создан
    res.status(201).json(orderList)
})

// DELETE
// Указываем, дополнительно, днамический параметр id
app.delete('/api/order/:id', (req, res)=> {
    startParametrs.goods = startParametrs.goods.filter(item => item.id !== req.params.id)
    res.status(200).json({message: 'Контакт был удалён'})
})
app.delete('/api/order', (req, res)=> {
    startParametrs.goods.length = 0
    startParametrs.needInstallation = false
    res.status(200).json({message: 'Корзина очищена'})
})

// PUT - полностью обновляет модель
app.put('/api/order', (req, res)=> {
    startParametrs.goods = req.body.goods
    startParametrs.needInstallation = req.body.needInstallation
    res.json({message: 'Данные синхронизированы'})
})

// PATCH - частично обновляет модель
app.patch('/api/order', (req, res)=> {
    startParametrs.needInstallation = req.body.status
    res.json({message: 'Параметр установки изменён'})
})

// Основа - всегда внизу ===============================================================

// Для того, чтобы корректно отдавать статические файлы из клиента - Определям статическую папку
// Ибо, ссылки на сторонние файлы не смогут быть динамичными
// app.use(express.static(path.resolve(__dirname, 'public')))

// говорим экспресс о том, что при любых запросах GET вызывать файл index.html
app.get('*', (req,res) =>{
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

//* ниже моё дополнение ===============================================================
// Пользовательская страница 404
app.use((req,res) =>{
    res.type('text/plain')
    res.status(404)
    res.send('404 - Не найдено')
})

// Пользовательская страница 500
app.use((err,req,res, next) =>{
    console.error(err.message)
    res.type('text/plain')
    res.status(500)
    res.send('500 - Ошибка сервера')
})
//* выше моё дополнение ===============================================================

// Запускаем сервер и слушаем порт localhost/3000
app.listen(port, () => {
    console.log( `Express started on http://localhost:${port}` + '; press Ctrl-C to terminate.' )
    })