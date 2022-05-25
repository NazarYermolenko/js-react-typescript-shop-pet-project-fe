import { ChangeEvent, useState } from "react";
import { ILoginUserInterface } from "../../../../common/context/user_context/interfaces/ILoginUserInterface";
import { Button } from "../../../common_components/button/Button";
import { Input } from "../../../common_components/input/Input";

export function LoginForm(props: { switchHandler: () => void, loginHandler }) {
    const [userToLogin, setUserToLogin] = useState<ILoginUserInterface>()

    function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
        setUserToLogin({ ...userToLogin, email: e.target.value })
    }

    function handlePasswordChange(e: ChangeEvent<HTMLInputElement>) {
        setUserToLogin({ ...userToLogin, password: e.target.value })
    }

    return <div className="container justify_center_container">
        <div className="login_form">
            <div className="title">
                <h2>Hello, please enter your credentials:</h2>
            </div>
            <div className="form_section">
                <Input
                    label="Email:"
                    id="email"
                    type="email"
                    onChange={handleEmailChange}
                />
                <Input
                    label="Password:"
                    type="password"
                    id="password"
                    onChange={handlePasswordChange}
                />
            </div>

            <div className="button_section">
                <Button onClick={props.loginHandler.bind(this, userToLogin)}>
                    Login
                </Button>
                <Button onClick={props.switchHandler}>
                    Register
                </Button>
            </div>
        </div>
    </div>
}