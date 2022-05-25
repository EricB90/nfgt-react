const express = require('express')
const server = express()

const helmet = require('helmet')
const cors = require('cors')

server.use(helmet())
server.use(cors())
server.use(express.json())
server.use(express.urlencoded({extended: true}))

const router = require('./app/routes/router')
server.use('/api', router)

const PORT = process.env.PORT || 3005

server.listen(PORT, ()=> {
    console.log(`Port: ${PORT}`)
})