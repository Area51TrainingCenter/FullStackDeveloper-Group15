import mongoose = require("mongoose")
import { connectionString } from "../config"


const initializeDatabase = async () => {
    mongoose.Promise = global.Promise

    const connectionPromise = new Promise((resolve, reject) => {
        mongoose.connect(connectionString, {
            keepAlive: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        })

        mongoose.connection.on("connected", () => {
            console.log("se conectó")
            require("../models/receta.model")
            require("../models/usuario.model")

            resolve()
        })

        mongoose.connection.on("error", error => {
            console.log("Happened an error")
            reject()
        })

    })

    await connectionPromise
}

export default initializeDatabase