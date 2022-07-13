const mongoose = require('mongoose')

const registerSchema = new mongoose.Schema({
    
    username:{
        type : String,
        required : true,
        unique : true
    },
    email:{
        type: String,
        required : true,
        lowercase: true,
        unique: true,
    },
    password :{
        type : String,
        required : true
    },
    Date:{
        type: Date,
        default: Date.now
    }
})

module.exports = new mongoose.model('register', registerSchema)