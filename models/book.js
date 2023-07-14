const mongoose = require('mongoose')
const {Schema} = mongoose
const bookSchema = new Schema({
    title:{type:String, required:true},
    description:String,
    year:Number,
    quantity:{type:Number, required:true},
    imageURL:String,
})

const book = mongoose.model('Book',bookSchema)
module.exports = book