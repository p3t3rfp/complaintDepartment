const express = require('express')
const app = express()
const router = require('./routes/index.js')
const logger = require('morgan')
const methodOverride = require('method-override')


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))

app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public')); 
app.use('/', router)

app.use(logger('dev'))


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`)
})

