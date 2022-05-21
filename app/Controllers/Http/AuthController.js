"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const LoginValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/LoginValidator"));
const RegisterValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/RegisterValidator"));
class AuthController {
    async register({ request }) {
        const payload = await request.validate(RegisterValidator_1.default);
        const user = await User_1.default.create(payload);
        return user;
    }
    async login({ request, auth, response }) {
        let msg = { msg: 'Email or Password is wrong!' };
        const payload = await request.validate(LoginValidator_1.default);
        try {
            const token = await auth.use('api').attempt(payload?.email, payload?.password);
            return token;
        }
        catch {
            return response.badRequest(msg);
        }
    }
    async logout({ auth }) {
        let user = await auth.use('api').revoke();
        return user;
    }
}
exports.default = AuthController;
//# sourceMappingURL=AuthController.js.map