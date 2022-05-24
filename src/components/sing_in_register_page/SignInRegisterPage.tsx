import { useContext, useState } from "react";
import { UserContext } from "../../common/context/user_context/UserContext";
import { Footer } from "../common_components/footer/Footer";
import { Header } from "../common_components/header/Header";
import { LoginForm } from "./forms/login_form/LoginForm";
import { RegisterForm } from "./forms/login_form/RegisterForm";

export function SignInRegisterPage() {
    const [doDisplayLogin, setDisplayLogin] = useState(true)
    const userContext = useContext(UserContext)

    function displayLoginSwitcher() {
        setDisplayLogin(!doDisplayLogin)
    }

    return <div>
        <Header />
        {doDisplayLogin ?
            <LoginForm
                switchHandler={displayLoginSwitcher}
                loginHandler={userContext.loginUser}
            /> :
            <RegisterForm
                switchHandler={displayLoginSwitcher}
                // registerHandler={userContext.registerUser}
            />
        }
        <Footer />
    </div>
}