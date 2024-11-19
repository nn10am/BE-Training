// @ts-ignore

import {UserService} from "../services/user/User.service";
import {NextFunction, Request, Response} from "express";
import {ILoginForm} from "../interfaces/LoginForm.interface";

export class UserController {
    private userService = new UserService();

    constructor() {}

    public async login(req: Request, res: Response, next: NextFunction): Promise<void> {
        const bodyLoginForm: ILoginForm = {} as ILoginForm
        try {
            await this.userService.login(bodyLoginForm);
            res.status(200).json('Successfully!');
        } catch (error) {
            res.status(400).json('Error!');
        }
    }
}
