import { Roles } from "../Roles"
import { ILoginUserInterface } from "./ILoginUserInterface"

export interface IRegisterUserInterface extends ILoginUserInterface {
    id?: number,
    firstName: string,
    lastName: string
    role: Roles
}