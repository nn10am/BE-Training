"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const Task_model_1 = __importDefault(require("../../model/Task.model"));
const TaskType_enum_1 = require("../../enums/TaskType.enum");
class TaskService {
    constructor() {
    }
    async addTask(body) {
        const tasks = new Task_model_1.default({
            taskName: '62S Zeppelin',
            taskType: TaskType_enum_1.ETaskType.Other
        });
        try {
            await tasks.save();
        }
        catch (error) {
            console.error('Error save db: ', error);
            throw new Error(error);
        }
    }
}
exports.TaskService = TaskService;
//# sourceMappingURL=Task.service.js.map