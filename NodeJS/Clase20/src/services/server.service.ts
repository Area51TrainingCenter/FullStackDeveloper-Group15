import * as http from "http"
import * as express from "express"
import * as bodyParser from "body-parser"

import { routeUsers, routeClients } from "../routes"

let httpServer: http.Server
let app = express()

const initializeServer = (): Promise<any> => {
    return new Promise((resolve, reject) => {
        httpServer = http.createServer(app)

        app.use(bodyParser.json())
        app.use(bodyParser.urlencoded({ extended: true }))

        app.get("/", (req, res) => {
            res.type("text/html").send("<h1>Home</h1>")
        })

        app.use("/users", routeUsers)
        app.use("/clients", routeClients)

        httpServer
            .listen(3000)
            .on("listening", () => resolve())
            .on("error", error => reject(error))
    })
}

export default initializeServer