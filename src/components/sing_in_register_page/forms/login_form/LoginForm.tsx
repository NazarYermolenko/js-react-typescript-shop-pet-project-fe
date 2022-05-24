import { Button } from "../../../common_components/button/Button";

export function LoginForm() {
    return <div className="container login_container">
        <div className="login_form">
            <div className="title">
                <h2>Hello, please enter your credentials:</h2>
            </div>
            <div className="form_section">
                <div className="login_input_container">
                    <label htmlFor="email">Email:</label>
                    <input type={"email"} id={"email"}></input>
                </div>
                <div className="login_input_container">
                    <label htmlFor="password">Password: </label>
                    <input type={"password"} id={"password"}></input>
                </div>
            </div>

            <div className="button_section">
                <Button onClick={() => { }}>
                    Login
                </Button>
                <Button onClick={() => { }}>
                    Register
                </Button>
            </div>
        </div>
    </div>
}