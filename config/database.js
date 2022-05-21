"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
const databaseConfig = {
    connection: Env_1.default.get('DB_CONNECTION'),
    connections: {
        pg: {
            client: 'pg',
            connection: Env_1.default.get('PG_QUERY_STRING'),
            migrations: {
                naturalSort: true,
            },
            healthCheck: false,
            debug: false,
        },
    }
};
exports.default = databaseConfig;
//# sourceMappingURL=database.js.map