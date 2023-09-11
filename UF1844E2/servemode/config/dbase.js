const mongoose = require('mongoose')

const DB_URI = 'mongodb://localhost:27017/Appweb'

module.exports = () =>{
    const connect= () => {
        moongose.connect(DB_URI,
            {
                keepAlive: true,
                useNewUrlParse:true,
                UseUnifieldTopology: true
            }
            ).then(()=> console.log('Conexión Correcta'))
            .catch((err)=> {
                console.log('DB: ERROR !!')
            })
    }
    connect()
}