import { Footer } from "../common_components/footer/Footer"
import { Header } from "../common_components/header/Header"
import { Shop } from "./shop/Shop"

export default function HomePage() {
    return <div>
        <Header />
        <Shop />
        <Footer />
    </div>
}