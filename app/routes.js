const { Router } = require('express')
// const config = require('../config/config')

const routes = Router()

// const AuthController = require('../app/controllers/AuthController');

routes.get('/', (req, res) => {
  res.send('pong')
})

module.exports = routes
