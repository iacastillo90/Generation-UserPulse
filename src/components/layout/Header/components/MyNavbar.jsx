import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./MyNavbar.css";

function MyNavbar () {
    return (
        <Navbar expand="lg" className="custom-navbar p-0">
            {/* Hamburger — visible solo en < lg */}
            <Navbar.Toggle aria-controls="main-nav" className="custom-toggle border-0">
                <span className="toggle-bar"></span>
                <span className="toggle-bar"></span>
                <span className="toggle-bar"></span>
            </Navbar.Toggle>

            {/* Panel collapse — Bootstrap lo gestiona en flow normal */}
            <Navbar.Collapse id="main-nav">
                {/* Panel glassmorphism en mobile */}
                <div className="nav-collapse-panel">
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
        </Navbar>
    );
}

export default MyNavbar;