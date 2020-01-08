const fs = require("fs")

let contenido

console.log("inicio de lectura")
// const contenido = fs.readFileSync("./mivideo.txt", {encoding: "utf-8"})
fs.readFile("./mivideo.txt", {encoding: "utf-8"}, (err, cont) => {
    contenido = cont
    //console.log(contenido)
})
console.log("fin de lectura")

const lectura = fs.createReadStream("./mivideo.txt", {encoding: "utf-8"})
const escritura = fs.createWriteStream("./copiamivideo.txt", {encoding: "utf-8"})

lectura.on("data", chunks => {
    console.log("llegó un chunk")
    escritura.write(chunks)
})

