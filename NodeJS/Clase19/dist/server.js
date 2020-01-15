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
const services_1 = require("./services");
const begin = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield services_1.initializeServer();
        console.log("Server is running on port 3000");
    }
    catch (error) {
        console.log(error);
    }
    try {
        yield services_1.initializeDatabase();
        console.log("Connected to Mongo");
    }
    catch (error) {
        console.log(error);
    }
});
begin();
//# sourceMappingURL=server.js.map