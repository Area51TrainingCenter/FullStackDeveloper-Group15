const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
    const route = req.url.toLowerCase()
    const method = req.method

    console.log("method", method)

    switch(route) {
        case "/usuario":
            const users = [
                {username: "user01"},
                {username: "user02"}
            ]

            res.writeHead(200, {"content-type": "application/json"})
            res.end(JSON.stringify(users))

            break;
        case "/usuario/detalle":
            const name = "user01"
            const user = `<strong>Name</strong> ${name}`

            res.writeHead(200, {"content-type": "text/html"})
            res.end(user)

            break;
        case "/descargar":
            const lectorStream = fs.createReadStream("./manual.pdf")

            res.writeHead(200, {"content-type": "application/pdf"})

            lectorStream.pipe(res)

            break;
        default:
            res.writeHead(404, {"content-type": "text/plain"})
            res.end("Route not found")
    }

/*     res.writeHead(200, {"content-type": "text/html"})
    res.end(route) */
})

server.listen(3000)
server.on("listening", ()=>console.log("Server is listening on port 3000"))
server.on("error", error => console.log(error))