import "./about.css"
import { Footer } from "../common_components/footer/Footer";
import { Header } from "../common_components/header/Header";

export function AboutPage() {
    return <div className="page">
        <Header />
        <div className="container">
            <div className="about_section">
                <p>
                    Info page about author.
                </p>
            </div>
        </div>
        <Footer />
    </div>
}