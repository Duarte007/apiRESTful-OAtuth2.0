require('dotenv').config()
const { promisify } = require('util')
const server = require('./server')
const initializeDatabase = require('../config/database')

const port = process.env.API_PORT || 3012

const startServer = async () => {
  await initializeDatabase(server)

  await promisify(server.listen).bind(server)(port)
  console.log(`Listening on port ${port}`)
}

startServer()
