"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
const Task_service_1 = require("../services/task/Task.service");
class TaskController {
    constructor() {
        this.taskService = new Task_service_1.TaskService();
    }
    async addTask(req, res, next) {
        const bodyAddTaskForm = {};
        try {
            await this.taskService.addTask(bodyAddTaskForm);
            // @ts-ignore
            res.status(200).json('Succesfully!');
        }
        catch (error) {
            // @ts-ignore
            res.status(4000).json('Error!');
        }
    }
}
exports.TaskController = TaskController;
//# sourceMappingURL=Task.controller.js.map