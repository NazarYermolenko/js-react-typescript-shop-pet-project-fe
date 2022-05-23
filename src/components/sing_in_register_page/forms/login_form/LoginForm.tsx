export function LoginForm() {
    return <div className="container">
        <div className="login_form">
            <h2>Hello, please enter your credentials:</h2>
            <label>Email:
                <input type={"email"} id={"email"}></input>
            </label>
        </div>
    </div>
}