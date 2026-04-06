import "./Header.css";
import "./components/MyNavbar.css"; // Estilos de glassmorphism y detalles

import { Container, Nav, Navbar } from "react-bootstrap";

import { Link, NavLink } from "react-router-dom";

function Header () {
    return(
        <header className="main-header">
            <Navbar expand="lg" className="w-100 p-0">
                <Container className="header-container">
                    {/* ── Brand ── */}
                    <Navbar.Brand as={Link} to="/" className="brand-link m-0 p-0" aria-label="UserPulse — inicio">
                        <div className="brand-icon" aria-hidden="true">
                            <svg viewBox="0 0 20 20" fill="none">
                                <circle cx="10" cy="7" r="3.5" stroke="white" strokeWidth="1.6"/>
                                <path d="M3 17c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
                            </svg>
                        </div>
                        <span className="brand-name">UserPulse</span>
                    </Navbar.Brand>

                    {/* Hamburger — visible solo en < lg */}
                    <Navbar.Toggle aria-controls="main-nav" className="custom-toggle border-0">
                        <span className="toggle-bar"></span>
                        <span className="toggle-bar"></span>
                        <span className="toggle-bar"></span>
                    </Navbar.Toggle>

                    {/* Panel collapse — Bootstrap lo gestiona en flow normal */}
                    <Navbar.Collapse id="main-nav">
                        <div className="nav-collapse-panel ms-lg-auto">
                            <Nav className="nav-links-group">
                                <Nav.Link as={NavLink} to="/" end className="nav-item-custom">
                                    Home
                                </Nav.Link>

                                <span className="nav-separator" aria-hidden="true" />

                                <Nav.Link as={NavLink} to="/about" className="nav-item-custom">
                                    Acerca
                                </Nav.Link>

                                <span className="nav-separator" aria-hidden="true" />

                                <Nav.Link as={NavLink} to="/users" className="nav-item-cta">
                                    Usuarios
                                    <svg className="cta-arrow" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M1 8a.5.5 0 01.5-.5h11.793l-3.147-3.146a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 8.5H1.5A.5.5 0 011 8z" clipRule="evenodd" />
                                    </svg>
                                </Nav.Link>
                            </Nav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;