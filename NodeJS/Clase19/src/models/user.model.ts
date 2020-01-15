import mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name: String,
    username: String,
    password: String
})

const model = mongoose.model("Users", schema)

export default model