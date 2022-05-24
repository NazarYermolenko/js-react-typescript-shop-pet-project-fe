import { Logo } from "./Logo"
import { NavBar } from "./NavBar"

export function Header() {
    return <header className="container justify_center_container" id="header">
        <Logo />
        <NavBar />
    </header>
}