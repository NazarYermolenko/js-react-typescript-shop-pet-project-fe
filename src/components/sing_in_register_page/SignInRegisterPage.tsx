import { Footer } from "../common_components/footer/Footer";
import { Header } from "../common_components/header/Header";
import { LoginForm } from "./forms/login_form/LoginForm";

export function SignInRegisterPage() {
    return <div className="page">
        <Header />
        <LoginForm />
        <Footer />
    </div>
}