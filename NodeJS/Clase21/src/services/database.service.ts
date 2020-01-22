import mongoose = require("mongoose")
import { connectionString } from "../config/database.config"


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
            UserModel
            resolve()
        })

        mongoose.connection.on("error", error => {
            console.log("Happend an error")
            reject()
        })

    })

    await connectionPromise
}

export default initializeDatabase