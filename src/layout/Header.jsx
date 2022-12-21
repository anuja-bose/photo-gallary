import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import { NavLink } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import NavigationBar from "../components/shared/NavigationBar";
function Header() {
    return (
        <header>
            <NavigationBar>
                <Navbar.Brand href="/">Photo Gallery</Navbar.Brand>
                <Nav>
                    <NavLink className="nav-link" to="/">
                    <SearchBar></SearchBar>
                    </NavLink>
                </Nav>
            </NavigationBar>
        </header>
    );
}

export default Header;
