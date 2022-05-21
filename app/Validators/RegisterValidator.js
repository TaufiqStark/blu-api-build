"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class RegisterValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            name: Validator_1.schema.string([
                Validator_1.rules.minLength(3),
            ]),
            email: Validator_1.schema.string([
                Validator_1.rules.required(),
                Validator_1.rules.email(),
                Validator_1.rules.unique({ table: 'users', column: 'email' })
            ]),
            password: Validator_1.schema.string([
                Validator_1.rules.required(),
                Validator_1.rules.minLength(5),
                Validator_1.rules.confirmed('password_confirm')
            ])
        });
        this.messages = {};
    }
}
exports.default = RegisterValidator;
//# sourceMappingURL=RegisterValidator.js.map