"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const schema = new mongoose.Schema({
    name: String,
    username: String,
    password: String
});
const model = mongoose.model("Users", schema);
exports.default = model;
//# sourceMappingURL=user.model.js.map