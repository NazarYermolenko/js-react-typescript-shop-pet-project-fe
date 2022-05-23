import { Link } from "react-router-dom"
import "./header.css"

export function Header() {
    return <header className="header" id="header">
        <div className="container">
            <div className="logo">
                <Link to="/">
                    <h1>LOGO</h1>
                </Link>
            </div>
            <div className="menu">
                <ul>
                    <li className="menu_item"><Link to="/sign_in">Sign In/Register</Link></li>
                    <li className="menu_item">Cart</li>
                    <li className="menu_item"><Link to="/about">About</Link></li>
                </ul>
            </div>
        </div>
    </header>
}