import { useContext, useEffect, useState } from "react";
import { IRegisterUserInterface } from "../../../../common/context/user_context/interfaces/IRegisterUserInterface";
import { Roles } from "../../../../common/context/user_context/Roles";
import { UserContext } from "../../../../common/context/user_context/UserContext";
import { Button } from "../../../common_components/button/Button";
import { Input } from "../../../common_components/input/Input";
import { Select } from "../../../common_components/select/Select";

export function RegisterForm(props: { switchHandler }) {
    const userContext = useContext(UserContext)
    const options = {
        "": "",
        administrator: Roles.ADMIN,
        user: Roles.USER
    }
    const [user, setUser] = useState<IRegisterUserInterface>()
    const [error, setError] = useState<string>()

    function onEmailChange(e) {
        setUser({ ...user, email: e.target.value })
    }

    function onPasswordChange(e) {
        setUser({ ...user, password: e.target.value })
    }

    function onFirstNameChange(e) {
        setUser({ ...user, firstName: e.target.value })
    }

    function onConfirmPasswordChange(e) {
        if (user.password != e.target.value || e.target.value.length < 5) {
            setError("Confirm password is not fit to password")
        } else {
            setError(undefined)
        }
    }

    function onLastNameChange(e) {
        setUser({ ...user, lastName: e.target.value })
    }

    return <div className="container justify_center_container">
        <div className="login_form">
            <div className="title">
                <h2>Registration Form:</h2>
            </div>
            <div className="form_section">
                <Input
                    id="email"
                    type="email"
                    onChange={onEmailChange}
                >Email:</Input>
                <Input
                    type="password"
                    id="password"
                    onChange={onPasswordChange}
                >Password:</Input>
                <Input
                    type="password"
                    id="confirm_password"
                    onChange={onConfirmPasswordChange}
                >Confirm Password:</Input>
                <Input
                    type="text"
                    id="first_name"
                    onChange={onFirstNameChange}
                >First Name:</Input>
                <Input
                    type="text"
                    id="last_name"
                    onChange={onLastNameChange}
                >Last Name:</Input>

                <Select
                    options={options}
                    id="role"
                >Role:</Select>
                <div className="justify_center_container">
                    {error && <h2>{error}</h2>}
                </div>

                <div className="button_section">
                    <Button onClick={() => {
                        const createdUser = userContext.registerUser(user)
                        if (!createdUser) {
                            setError(`User with email ${user.email} is already exists`)
                        } else {
                            setError(undefined)
                        }
                    }}>
                        Create User
                    </Button>
                    <Button onClick={props.switchHandler}>
                        Back to Sign In
                    </Button>
                </div>
            </div>
        </div>
    </div>
}