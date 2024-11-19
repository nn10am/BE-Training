"use strict";
const BaseRouter_1 = require("./BaseRouter");
const User_service_1 = require("../services/user/User.service");
class UserRouter extends BaseRouter_1.BaseRouter {
    constructor() {
        super();
        this.userService = new User_service_1.UserService();
        this.init();
    }
    init() {
        this.router.get("/init", (req, res, next) => {
            this.userService.init(req, res, next);
        });
    }
}
module.exports = new UserRouter().router;
//# sourceMappingURL=User.router.js.map