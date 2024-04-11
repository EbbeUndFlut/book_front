import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="flex-1">
                <Link className="text-xl btn btn-ghost" to="/">BookStore</Link>
            </div>
            <div className="flex-none">
                <ul className="px-1 menu menu-horizontal">
                    <li>
                        <Link to="/addbook">Add Book</Link>
                    </li>
                </ul>

            </div>
        </nav>
    )
}