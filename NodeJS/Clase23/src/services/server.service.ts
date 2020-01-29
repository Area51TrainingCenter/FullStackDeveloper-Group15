import * as http from "http"
import * as express from "express"
import * as path from "path"
import * as yenv from "yenv"
import { UsuarioRoute, RecetaRouter } from "../routes"
import * as bodyParser from "body-parser"
import { errorsHandler } from "../handlers/errors.handler"


let httpServer
const app = express()

const env = yenv()

const initializeServer = (): Promise<any> => {
    return new Promise((resolve, reject) => {
        httpServer = http.createServer(app)

        app.use(bodyParser.json())
        app.use(bodyParser.urlencoded({ extended: true }))

        app.use(express.static("./public"))

        app.use("/usuarios", UsuarioRoute)
        app.use("/recetas", RecetaRouter)

        // app.use(errorsHandler.pathNotFound)

        app.use("**", (req, res) => {
            res.sendFile(path.join(__dirname, "../../", "/public/index.html"))
        })

        app.use(errorsHandler.general)

        httpServer.listen(env.PORT)
        httpServer.on("listening", () => resolve())
        httpServer.on("error", error => reject(error))
    })
}

export default initializeServer