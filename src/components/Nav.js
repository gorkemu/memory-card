import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <ul className="nav-links">
                <NavLink className="link" to="/">
                    <li>Pictures</li>
                </NavLink>
                <NavLink className="link" to="/words">
                    <li>Words</li>
                </NavLink>
            </ul>
        </nav>
    )
}

export default Nav;