const mongoose = require('mongoose')
const CursoSchema = new mongoose.Schema(
    {
        _id: String,
        CodigoUsuario: Number,
        NombreUsuario: String,
        CodigoTarea: Number,
        DescripcionTarea: String,
        Puntuacion: Number,
        Estado: Boolean
    

    }
)
module.exports = mongoose.Model('curso', CursoSchema)