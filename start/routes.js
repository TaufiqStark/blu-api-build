"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.get('/', async () => {
    return { hello: 'world' };
});
Route_1.default.post('/register', 'AuthController.register');
Route_1.default.post('/login', 'AuthController.login');
Route_1.default.post('/logout', 'AuthController.logout').middleware('auth');
Route_1.default.group(() => {
    Route_1.default.post('/ytdl', 'DownloadersController.ytdl');
}).prefix('/api/v1');
//# sourceMappingURL=routes.js.map