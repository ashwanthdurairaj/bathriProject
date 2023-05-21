const express = require('express')
const router = express.Router()
const {
  orders,
  registerOrder,
} = require('./adminController')

router.get('/admin', orders)
router.post('/registerOrder', registerOrder)
module.exports = router