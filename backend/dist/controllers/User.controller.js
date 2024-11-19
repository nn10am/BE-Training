"use strict";
// @ts-ignore
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const User_service_1 = require("../services/user/User.service");
class UserController {
    constructor() {
        this.userService = new User_service_1.UserService();
    }
    async login(req, res, next) {
        const bodyLoginForm = {};
        try {
            await this.userService.login(bodyLoginForm);
            res.status(200).json('Successfully!');
        }
        catch (error) {
            res.status(400).json('Error!');
        }
    }
}
exports.UserController = UserController;
//# sourceMappingURL=User.controller.js.map