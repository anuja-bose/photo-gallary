import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import NavigationBar from "../components/shared/NavigationBar";
function Header() {
    return (
        <header>
            <NavigationBar>
                <Navbar.Brand href="/">Photo Gallery</Navbar.Brand>
                <Nav>
                    <SearchBar></SearchBar>
                </Nav>
            </NavigationBar>
        </header>
    );
}

export default Header;
