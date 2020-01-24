import * as mongoose from "mongoose"

const esquema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        size: 255,
        required: true,
        unique: true,
        trim: true,
        email: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    roles: [
        {type: String}
    ]
})

const modelo = mongoose.model("Usuario", esquema)

export default modelo