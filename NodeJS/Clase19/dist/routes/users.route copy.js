"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const controllers_1 = require("../controllers");
const routes = express.Router();
const controller = new controllers_1.UserController();
routes.get("/", (req, res) => {
    res.json(controller.getAll());
});
routes.get("/:id", (req, res) => {
    res.json(controller.getOne(req.params.id));
});
routes.post("/", (req, res) => {
    res.json(controller.insert(req.body));
});
routes.put("/:id", (req, res) => {
    const id = req.params.id;
    const body = req.body;
    res.json(controller.update(id, body));
});
routes.delete("/:id", (req, res) => {
    res.json(controller.delete(req.params.id));
});
exports.default = routes;
//# sourceMappingURL=users.route copy.js.map