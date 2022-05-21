"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
class UsersController {
    async add({ request, response }) {
        let user = await User_1.default.create({ name: request.requestData.name });
        console.log(user);
        return response.json(user);
    }
    async get({ response }) {
        return response.json(await User_1.default.all());
    }
}
exports.default = UsersController;
//# sourceMappingURL=UsersController.js.map