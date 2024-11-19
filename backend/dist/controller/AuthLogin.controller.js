"use strict";
// @ts-ignore
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthLoginController = void 0;
const Login_service_1 = require("../services/authentication/Login.service");
class AuthLoginController {
    constructor() {
        this.loginController = new Login_service_1.LoginService();
    }
    async login(req, res, next) {
        const bodyLoginForm = {};
        try {
            // @ts-ignore
            await this.loginController.login(bodyLoginForm);
            res.status(200).json('Successfully!');
        }
        catch (error) {
            res.status(400).json('Error!');
        }
    }
}
exports.AuthLoginController = AuthLoginController;
//# sourceMappingURL=AuthLogin.controller.js.map