import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export function NotFoundPage() {
    return <div>
        <Header />
        <div className="container">
            <h1>Not Found 404</h1>
        </div>
        <Footer />
    </div>
}