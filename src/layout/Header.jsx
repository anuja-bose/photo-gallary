import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import { NavLink } from "react-router-dom";
import NavigationBar from "../components/shared/NavigationBar";
function Header() {
    return (
        <header>
            <NavigationBar>
                <Navbar.Brand href="#home">Photo Gallery</Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink to="/" className="nav-link">
                        Home
                    </NavLink>
                    <NavLink className="nav-link" to="/">
                        Test
                    </NavLink>
                </Nav>
            </NavigationBar>
        </header>
    );
}

export default Header;
