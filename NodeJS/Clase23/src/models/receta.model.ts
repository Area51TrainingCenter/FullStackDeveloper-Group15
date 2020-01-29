import * as mongoose from "mongoose"

const esquema = new mongoose.Schema({
    titulo: String,
    ingredientes: String,
    pasos: String,
    tiempo: Number,
    personas: Number
})

const modelo = mongoose.model("Receta", esquema)

export default modelo