import { Link } from "react-router-dom"

export function Header() {
    return <header className="header" id="header">
        <div className="container header_container">
            <div className="logo">
                <Link to="/">
                    <h1>LOGO</h1>
                </Link>
            </div>
            <ul className="menu">
                <li className="menu_item"><Link to="/sign_in">Sign In/Register</Link></li>
                <li className="menu_item">Cart</li>
                <li className="menu_item"><Link to="/about">About</Link></li>
            </ul>
        </div>
    </header>
}