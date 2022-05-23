import { Footer } from "../common_components/footer/Footer";
import { Header } from "../common_components/header/Header";

export function AboutPage() {
    return <div className="page">
        <Header />
        <div className="container about_container">
                <p>
                    Info page about author.
                </p>
        </div>
        <Footer />
    </div>
}