require('dotenv').config({path: "var.env"})
const express = require('express')
const bodyParser = require('body-parser')

const routes = require('./routes')

const server = express()
server.use(bodyParser.urlencoded({extended:false}))
server.use('/api', routes)

const port = process.env.PORT
server.listen(port, () => {
    console.log(`Listening on port ${port}`)
})