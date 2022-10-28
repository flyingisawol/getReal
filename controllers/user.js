const express = require('express')
const router = express.Router()
const User = require('../models/user')
const Rate = require('../models/rate')


router.get('/', (req, res) => {
    res.send('Hello world')
})


module.exports = router

