import { Button } from "../../../common_components/button/Button";

export function RegisterForm(props: { switchHandler }) {
    return <div className="container justify_center_container">
        <div className="login_form">
            <div className="title">
                <h2>Registration Form:</h2>
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
                <div className="login_input_container">
                    <label htmlFor="confirm_password">Confirm Password: </label>
                    <input type={"password"} id={"confirm_password"}></input>
                </div>
                <div className="login_input_container">
                    <label htmlFor="first_name">First Name: </label>
                    <input type={"text"} id={"first_name"}></input>
                </div>
                <div className="login_input_container">
                    <label htmlFor="last_name">Last Name: </label>
                    <input type={"password"} id={"last_name"}></input>
                </div>
                <div className="login_input_container">
                    <label htmlFor="role">Role: </label>
                    <select id={"role"}>
                        <option>
                            User
                        </option>
                        <option>
                            Administrator
                        </option>
                    </select>
                </div>


                <div className="button_section">
                    <Button onClick={() => { }}>
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