import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <ul className="nav-links">
                <Link className="link" to="/">
                    <li>Pictures</li>
                </Link>
                <Link className="link" to="/words">
                    <li>Words</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;