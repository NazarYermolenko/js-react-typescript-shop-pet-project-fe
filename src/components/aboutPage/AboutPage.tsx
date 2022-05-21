import "./about.css"
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

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