const http = require("http")

const servidor = http.createServer((req, res) => {
    console.log("Llegó una petición")

    res.writeHead(200, {"content-type": "text/plain; charset=utf8"})
    // res.write("Aló")
    // res.write("No tengo tu número registrado ¿quién eres?")
    res.end("Aló. No tengo tu número registrado ¿quién eres?. Chau")
})
servidor.listen(3000)

// servidor.listen(3000, ()=>console.log("Servidor ejecutándose en el puerto 3000"))
servidor.on("listening", () => console.log("Servidor ejecutándose en el puerto 3000"))
servidor.on("error", error => console.log(error))
