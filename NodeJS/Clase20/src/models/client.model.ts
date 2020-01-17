import mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name: String,
    address: String
})

const model = mongoose.model("Clients", schema)

export default model