const express = require('express')
const route = express.Router()
// Middlewares
const { apiKey, permission } = require('../middlewares/checkAuthApi')

// check apiKey
route.use(apiKey)

// check permission
route.use(permission('0000'))

route.use('/v1/api/product', require('./product'))
route.use('/v1/api', require('./access'))

module.exports = route