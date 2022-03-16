const express = require('express')
const router = require('./routes/router')
const APP_PORT=process.env.PORT || 8000

const app = express()

app.use(express.json())

app.use('/', router)


app.listen(APP_PORT, () => {
    console.log('PORT listining:',APP_PORT);
})