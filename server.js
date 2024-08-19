require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const storesRoutes = require('./routes/stores')

const app = express()

app.use(express.json())

app.use(cors())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  console.log(req.path, req.method)
  next();
});



app.use('/stores', storesRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () =>{
            console.log('connected to database and listening on port 4000')
        })
    })
    .catch((error) => {
        console.log(error)
    })