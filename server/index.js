require('dotenv').config()
const express = require('express')
const app = express()
const ctrl = require('./controller')
const massive = require('massive')
const {CONNECTION_STRING, SESSION_SECRET} = process.env

// middleware
app.use(express.json())
massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db connected')
})

const port = 4040


// Endpoints
app.get('/api/houses', ctrl.getHouses)
app.post('/api/houses', ctrl.addHouse)
app.delete('/api/houses/:id', ctrl.deleteHouse)

app.listen(port, () => console.log(`Serving running on port: ${port}`))