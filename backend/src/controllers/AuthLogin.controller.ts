// @ts-ignore

import {LoginService} from "../services/authentication/Login.service";
import {NextFunction, Request, Response} from "express";
import {ILoginForm} from "../interfaces/LoginForm.interface";

export class AuthLoginController {
    private loginController: LoginService = new LoginService();
    constructor() {}
    public async login(req: Request, res: Response, next: NextFunction): Promise<void> {
        const bodyLoginForm: ILoginForm = {} as ILoginForm;
        try {
            // @ts-ignore
            await this.loginController.login(bodyLoginForm);
            res.status(200).json('Successfully!');
        } catch (error) {
            res.status(400).json('Error!');
        }
    }
}