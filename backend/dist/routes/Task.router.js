"use strict";
const BaseRouter_1 = require("./BaseRouter");
const Task_controller_1 = require("../controller/Task.controller");
class TaskRouter extends BaseRouter_1.BaseRouter {
    constructor() {
        super();
        this.taskController = new Task_controller_1.TaskController();
        this.init();
    }
    init() {
        // @ts-ignore
        this.router.get("/tasks", (req, res, next) => {
            // TODO Call method(s) defined in Task Controller
            this.taskController.addTask(req, res, next);
        });
    }
}
module.exports = new TaskRouter().router;
//# sourceMappingURL=Task.router.js.map