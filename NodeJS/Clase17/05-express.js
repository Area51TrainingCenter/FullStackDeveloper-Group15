const express = require("express")
const app = express()

app.get("/usuarios", (req, res) => {
    const users = [
        {username: "user01"},
        {username: "user02"}
    ]

/*     res
        .status(200)
        .type("application/json")
        .send(JSON.stringify(users)) */

    res
        .json(users)
})

app.listen(3000, ()=>console.log("Server is listening on port 3000"))