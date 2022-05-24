import { IRegisterUserInterface } from "./interfaces/IRegisterUserInterface";
import { Roles } from "./Roles";



export class RegisterUserBuilder {
    userToBuild: IRegisterUserInterface
    constructor(userToRegister?: IRegisterUserInterface) {
        this.userToBuild = { ...userToRegister }
    }

    setId(id: number) {
        this.userToBuild.id = id
        return this
    }

    setEmail(email) {
        this.userToBuild.email = email
        return this
    }

    setPassword(password) {
        this.userToBuild.password = password
        return this
    }

    setFirstName(firstName) {
        this.userToBuild.firstName = firstName
        return this
    }

    setRole(role: Roles) {
        this.userToBuild.role = role
        return this
    }

    setLastName(lasaName: string) {
        this.userToBuild.lastName = lasaName
        return this
    }

    setLastLogin(lastLogin: Date) {
        this.userToBuild.lastLogin = lastLogin
        return this
    }

    build() {
        return this.userToBuild
    }
}