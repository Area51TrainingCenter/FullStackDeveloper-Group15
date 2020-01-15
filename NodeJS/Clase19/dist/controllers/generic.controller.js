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
const models_1 = require("../models");
class GenericController {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield models_1.UserModel.find();
            return users;
        });
    }
    getOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            // const user = await UserModel.findOne({ _id: id })
            const user = yield models_1.UserModel.findById(id);
            return user;
        });
    }
    insert(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = new models_1.UserModel(data);
            const newUser = yield user.save();
            return newUser;
        });
    }
    update(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const userUpdated = yield models_1.UserModel.findByIdAndUpdate(id, body, { upsert: true });
            return userUpdated;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const userDeleted = yield models_1.UserModel.findByIdAndRemove(id);
            return userDeleted;
        });
    }
}
exports.default = GenericController;
//# sourceMappingURL=generic.controller.js.map