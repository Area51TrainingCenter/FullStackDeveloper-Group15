"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const controllers_1 = require("../controllers");
const routes = express.Router();
const controller = new controllers_1.UserController();
routes.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json(yield controller.getAll());
}));
routes.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json(yield controller.getOne(req.params.id));
}));
routes.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json(yield controller.insert(req.body));
}));
routes.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const body = req.body;
    res.json(yield controller.update(id, body));
}));
routes.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json(yield controller.delete(req.params.id));
}));
exports.default = routes;
//# sourceMappingURL=users.route.js.map