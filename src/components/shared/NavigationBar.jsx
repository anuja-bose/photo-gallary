import React from "react";
import { Navbar, Container } from "react-bootstrap";
function NavigationBar({ children }) {
    return (
        <Navbar bg="navbar" variant="light">
            <Container>{children}</Container>
        </Navbar>
    );
}

export default NavigationBar;
