const express = require('express')
require('dotenv').config()
var cors = require('cors')
var app = express()
const mongoose = require('mongoose')
const bookController = require('./controllers/book_controller')



app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))



app.get('/',(req,res,next) => {
    res.json("hello")
})

app.use('/books',bookController)
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
app.listen(process.env.PORT, function (){
    console.log(`http://localhost:3000/`)
})