const express = require ('express')

const controller = require('../controller/user')
const router = express.Router()

const path  = 'user'

router.arguments(
    `/${path}`,
    controller.getData
    )
    module.exports = router

