const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 5000
const product = require('./routes/product')
const env = require('dotenv')
var cors = require('cors');
const Register = require('./routes/Register');


// https://youtu.be/5Y5QKfxTErU
// https://youtu.be/VsUzmlZfYNg

mongoose.connect('mongodb+srv://apurvjha1234:apurvjha1234@cluster0.gw051.mongodb.net/?retryWrites=true&w=majority',
()=>{
    console.log("connected successfully");
},(err)=>{
    console.log(err);
});

app.use(cors())
app.use(express.json());

app.get('/',(req,res)=>{
  res.send('Hello World !')
})

app.use('/routes',product)
app.use('/register',Register)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})