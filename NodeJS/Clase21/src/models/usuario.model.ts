import * as mongoose from "mongoose"

const esquema = new mongoose.Schema({
    nombre: String,
    correo: String,
    password: String
})

const modelo = mongoose.model("Usuario", esquema)

export default modelo