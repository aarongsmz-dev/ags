const express = require ('express')

const controller = require('../controller/cursos')
const router = express.Router()

const path  = 'cursos'

router.arguments(
    `/${path}`,
    controller.getData
    )
    module.exports = router