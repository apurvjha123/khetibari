const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    
    name:{
        type : String,
        required : true
    },
    category:{
        type : String,
        required : true
    },
    description :{
        type : String,
        required : true
    },
    price: {
        type : Number,
        required : true
    },
    seller: {
        type : String,
        required : false,
        unique: true
    },
    image: {
        type : String,
        required : true
    },
    Date:{
        type: Date,
        default: Date.now
    }
})

module.exports = new mongoose.model('Product', productSchema)