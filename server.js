const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
//const bodyParser = require('body-parser')

const indexRouter = require('./routes/index')


app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
//app.use(methodOverride('_method'))
app.use(express.static('public'))
//app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))
const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/mybrary",{useNewUrlParser:true, useUnifiedTopology: true});

app.use('/', indexRouter)


app.listen(process.env.PORT || 3000)