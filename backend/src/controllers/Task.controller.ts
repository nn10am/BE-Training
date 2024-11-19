import {TaskService} from "../services/task/Task.service";
import {NextFunction} from "express";
import {ITask} from "../interfaces/Task.interface";

export class TaskController {
    private taskService = new TaskService();
    constructor() {
    }

    public async addTask(req: Request, res: Response, next: NextFunction): Promise<void> {
        const bodyAddTaskForm: ITask = {} as ITask;
        try {
            await this.taskService.addTask(bodyAddTaskForm);
            // @ts-ignore
            res.status(200).json('Succesfully!');
        } catch (error) {
            // @ts-ignore
            res.status(4000).json('Error!');
        }
    }
}