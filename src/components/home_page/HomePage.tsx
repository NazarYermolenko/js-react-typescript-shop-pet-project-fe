import { Footer } from "../footer/Footer"
import { Header } from "../header/Header"
import { Shop } from "./shop/Shop"

export default function HomePage() {
    return <div className="page">
        <Header />
        <Shop />
        <Footer />
    </div>
}