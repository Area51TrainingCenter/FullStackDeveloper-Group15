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
const mongoose = require("mongoose");
const config_1 = require("../config");
const models_1 = require("../models");
const initializeDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    mongoose.Promise = global.Promise;
    const connectionPromise = new Promise((resolve, reject) => {
        mongoose.connect(config_1.connectionString, {
            keepAlive: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });
        mongoose.connection.on("connected", () => {
            models_1.UserModel;
            resolve();
        });
        mongoose.connection.on("error", error => {
            console.log("Happend an error");
            reject();
        });
    });
    yield connectionPromise;
});
exports.default = initializeDatabase;
//# sourceMappingURL=database.service.js.map