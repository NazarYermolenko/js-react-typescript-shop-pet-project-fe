import { createContext, useState } from "react"
import { ILoginUserInterface } from "./interfaces/ILoginUserInterface"
import { IRegisterUserInterface } from "./interfaces/IRegisterUserInterface"
import { RegisterUserBuilder } from "./RegisterUserBuilder"

interface IUserContext {
    loggedUser: IRegisterUserInterface
    users: IRegisterUserInterface[]
    loginUser: (user: ILoginUserInterface) => IRegisterUserInterface
    registerUser: (user: IRegisterUserInterface) => IRegisterUserInterface
}

export const UserContext = createContext<IUserContext>(null)

export function UserContextProvider(props: { children }) {
    const [users, setUsers] = useState<IRegisterUserInterface[]>([])
    const [loggedUser, setLoggedUser] = useState<IRegisterUserInterface>(null)

    function loginUser(userToLogin: ILoginUserInterface): IRegisterUserInterface {
        const user = users.find(user => {
            return user.email === userToLogin.email &&
                user.password === userToLogin.password
        })
        if (user) {
            user.lastLogin = new Date()
            setLoggedUser({ ...user })
            setUsers([...users.map((existsUser) => {
                return users.find(u => u.email === existsUser.email) || user
            })])
            return user
        } else {
            return undefined
        }
    }

    function registerUser(userToRegister: IRegisterUserInterface) {
        const user = new RegisterUserBuilder()
            .setId(users.length)
            .setEmail(userToRegister.email)
            .setPassword(userToRegister.password)
            .setFirstName(userToRegister.firstName)
            .setLastName(userToRegister.lastName)
            .setLastLogin(new Date())
            .build()

        const isUserExists = users.find((existUser) => {
            return existUser.email === user.email
        })
        if (isUserExists) {
            return undefined
        } else {
            setUsers([...users, user])
            return user
        }
    }


    return <UserContext.Provider value={{ users, loggedUser, loginUser, registerUser }}>
        {props.children}
    </UserContext.Provider>
}