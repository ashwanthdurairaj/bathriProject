const express = require('express');
const asyncHandler = require('express-async-handler')
const Order = require('./orderSchema')

const orders = asyncHandler(async(req, res) => {
    console.log(req.body)
})

const registerOrder = asyncHandler(async(req, res) => {
    console.log(req.body)
})
module.exports = {
    orders,
    registerOrder
}
  