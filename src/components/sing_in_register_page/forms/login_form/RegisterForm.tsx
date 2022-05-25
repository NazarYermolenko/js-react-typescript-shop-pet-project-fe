import { Button } from "../../../common_components/button/Button";
import { Input } from "../../../common_components/input/Input";

export function RegisterForm(props: { switchHandler }) {
    

    return <div className="container justify_center_container">
        <div className="login_form">
            <div className="title">
                <h2>Registration Form:</h2>
            </div>
            <div className="form_section">
                <Input
                    label="Email:"
                    id="email"
                    type="email"
                />
                <Input
                    label="Password:"
                    type="password"
                    id="password"
                />
                <Input
                    label="Confirm Password:"
                    type="password"
                    id="confirm_password"
                />
                <Input
                    label="First Name:"
                    type="text"
                    id="first_name"
                />
                <Input
                    label="Last Name:"
                    type="text"
                    id="last_name"
                />
                <div className="input_container">
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