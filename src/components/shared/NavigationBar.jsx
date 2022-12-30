import React from "react";
import { Navbar, Container } from "react-bootstrap";
function NavigationBar({ children }) {
    return (
        <Navbar bg="navbar" className="fixed-top" variant="light">
            <Container fluid>{children}</Container>
            
        </Navbar>
    );
}

export default NavigationBar;
