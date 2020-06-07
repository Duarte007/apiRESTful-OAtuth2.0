const express = require('express')
const helmet = require('helmet')
const routes = require('./routes')
const bodyParser = require('body-parser')
const authMiddleware = require('./middlewares/auth')

class Server {
  constructor () {
    this.express = express()
    this.middlewares()
    this.routes()
  }

  middlewares () {
    this.express.use(express.json({ limit: '100kb' }))
    this.express.use(helmet())
    this.express.use(bodyParser.json())
    this.express.use(authMiddleware)
  }

  routes () {
    this.express.use(routes)
  }
}

module.exports = new Server().express
