"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const routes = express.Router();
routes.get("/", (req, res) => {
    const listUsers = [
        { id: 1, username: "user01" },
        { id: 2, username: "user02" }
    ];
    res.json(listUsers);
});
routes.get("/2", (req, res) => {
    const user = { id: 2, username: "user02" };
    res.json(user);
});
routes.post("/", (req, res) => {
    const body = req.body; // {name:..., email:..., password:...}
    res.json(body);
});
exports.default = routes;
//# sourceMappingURL=users.route.js.map