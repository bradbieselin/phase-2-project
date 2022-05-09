import React from 'react';
import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/challenge/nature">Nature Challenge</NavLink>
            <NavLink to="/challenge/cityscape">City Scape Challenge</NavLink>
            <NavLink to="/challenge/portrait">Portrait Challenge</NavLink>
        </nav>
    );
};

export default NavBar;