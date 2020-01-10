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
const http = require("http");
const users_route_1 = require("./routes/users.route");
const bodyParser = require("body-parser");
let httpServer;
let app = express();
const initializeServer = () => {
    return new Promise((resolve, reject) => {
        /*         httpServer = http.createServer((req, res) => {
                    res.writeHead(200, { "content-type": "text/html" })
                    res.write("<h1>Hello World</h1>")
                    res.end()
                }) */
        httpServer = http.createServer(app);
        /*         app.use((req, res, next) => {
                    res.status(401).send("User not logged")
                    // next()
                }) */
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.get("/", (req, res) => {
            res.type("text/html").send("<h1>Home</h1>");
        });
        app.use("/users", users_route_1.default);
        httpServer
            .listen(3000)
            .on("listening", () => resolve())
            .on("error", error => reject(error));
    });
};
const begin = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // initializeServer().then(()=>{})
        yield initializeServer();
        console.log("Server is running on port 3000");
    }
    catch (error) {
        console.log(error);
    }
    // initializeServer().catch(()=>{})
});
begin();
//# sourceMappingURL=server.js.map