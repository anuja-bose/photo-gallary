import React from "react";
import { Navbar, Nav, Row, Col, Button } from "react-bootstrap";
import SearchBar from "../components/shared/SearchBar";
import NavigationBar from "../components/shared/NavigationBar";
import logo from '../assets/logo-icon.png';
function Header() {
    return (
        <header>
            <NavigationBar>
                <Row>
                    <Col className="d-flex" xxl="auto" xl="auto" xs="auto" xss="auto" sm="auto" md="auto" lg="auto">
                        <Navbar.Brand href="/">
                            <img width={40} height={40} className="img-thumbnail rounded object-cover" src={logo} alt="logo" />
                        </Navbar.Brand>
                    </Col>
                    <Col xxl={6} xl={6} md={6} className="d-none d-lg-block d-flex">
                        <Nav>
                            <SearchBar className="lg"></SearchBar>
                        </Nav>
                    </Col>
                    <Col className="d-flex d-none d-sm-block d-flex" md="auto" >
                        <Nav
                            activeKey="/"
                        >
                            <Nav.Item>
                                <Nav.Link href="/explore">Explore</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/advertise">Advertise</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/plus">Unsplash</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav className="nav-link">|</Nav>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/login">
                                    Login
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav className="nav-link">
                                    /
                                </Nav>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="join">
                                    Sign up
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav className="nav-link">
                                    <Button variant="light" className="btn-secondary" >Submit a Photo</Button>
                                </Nav>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav className="nav-link">
                                    <Button variant="link" className="btn-ham">
                                        <svg width="24" height="24" viewBox="0 0 32 32" version="1.1" aria-hidden="false"><desc lang="en-US">navigation menu</desc><path d="M4 21.3h24V24H4v-2.7zM4 8v2.7h24V8H4zm0 9.3h24v-2.7H4v2.7z"></path></svg>
                                    </Button>
                                </Nav>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
            </NavigationBar>
        </header>
    );
}

export default Header;
