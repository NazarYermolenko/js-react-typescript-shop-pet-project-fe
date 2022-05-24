import { Link } from "react-router-dom";

export function NavBar() {
    return <ul className="menu">
        <li className="menu_item"><Link to="/sign_in">Sign In/Register</Link></li>
        <li className="menu_item">Cart</li>
        <li className="menu_item"><Link to="/about">About</Link></li>
    </ul>
}