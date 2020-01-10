import * as express from "express"
import * as http from "http"
import routes from "./routes/users.route"
import * as bodyParser from "body-parser"

let httpServer: http.Server
let app = express()

const initializeServer = (): Promise<any> => {
    return new Promise((resolve, reject) => {
        /*         httpServer = http.createServer((req, res) => {
                    res.writeHead(200, { "content-type": "text/html" })
                    res.write("<h1>Hello World</h1>")
                    res.end()
                }) */
        httpServer = http.createServer(app)
        /*         app.use((req, res, next) => {
                    res.status(401).send("User not logged")
                    // next()
                }) */

        app.use(bodyParser.json())
        app.use(bodyParser.urlencoded({ extended: true }))

        app.get("/", (req, res) => {
            res.type("text/html").send("<h1>Home</h1>")
        })



        app.use("/users", routes)

        httpServer
            .listen(3000)
            .on("listening", () => resolve())
            .on("error", error => reject(error))
    })
}

const begin = async () => {
    try {
        // initializeServer().then(()=>{})
        await initializeServer()
        console.log("Server is running on port 3000")
    } catch (error) {
        console.log(error)
    }
    // initializeServer().catch(()=>{})
}

begin()