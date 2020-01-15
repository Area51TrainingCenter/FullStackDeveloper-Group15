"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const routes_1 = require("../routes");
let httpServer;
let app = express();
const initializeServer = () => {
    return new Promise((resolve, reject) => {
        httpServer = http.createServer(app);
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.get("/", (req, res) => {
            res.type("text/html").send("<h1>Home</h1>");
        });
        app.use("/users", routes_1.routeUsers);
        app.use("/clients", routes_1.routeClients);
        httpServer
            .listen(3000)
            .on("listening", () => resolve())
            .on("error", error => reject(error));
    });
};
exports.default = initializeServer;
//# sourceMappingURL=server.service.js.map