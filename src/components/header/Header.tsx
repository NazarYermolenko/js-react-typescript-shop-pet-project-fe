import { Link } from "react-router-dom"
import "./header.css"

export function Header() {
    return <header>
        <div className="header">
            <Link to="/"><h1>Logo</h1></Link>
            <ul>
                <li>Cart</li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </div>
    </header>
}