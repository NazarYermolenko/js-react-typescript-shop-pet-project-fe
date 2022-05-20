import { Link } from "react-router-dom"
import "./header.css"

export function Header() {
    return <header className="header">
        <div className="header">
            <div className="logo"><Link to="/"><h1>Logo</h1></Link></div>
            <div className="nav_bar">
                <ul>
                    <li>Cart</li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>

        </div>
    </header>
}