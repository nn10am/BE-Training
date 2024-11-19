import {EStatus} from "../model/UserStatus.enum";

export interface IUser {
    username: string,
    email: string,
    address: string,
    employeeCode: string,
    password: string,
    status: EStatus,
    createdAt: Date,
    updatedAt: Date
}