const express = require('express')
const mongoose = require('mongoose')



//creamos server
const app = express()


app.get('/',(req,res)=>{
    res.send({
        data: 'Hola Mundo'
    })

})
//conectamos DB

