const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const fileupload = require('express-fileupload')
const web = require('./routes/web')
const path = require('path')
require('dotenv').config()
const port =process.env.PORT


const app = express()
app.set('view engine','ejs')
app.use(express.json())
app.use(fileupload())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname));


mongoose.connect(process.env.CONNECTION_URL)
.then(console.log('connected to database'))

app.use(web)

app.listen(port,()=>{console.log(`server is running on ${port}`)})