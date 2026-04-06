import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer () {
    const year = new Date().getFullYear();

    return (
        <footer className="main-footer">
            {/* ── Cuerpo principal ── */}
            <div className="footer-body">
                <Container>
                    <Row className="g-4">
                        {/* Brand column */}
                        <Col xs={12} md={4}>
                            <div className="footer-brand">
                                <div className="footer-brand-icon" aria-hidden="true">
                                    <svg viewBox="0 0 20 20" fill="none">
                                        <circle cx="10" cy="7" r="3.5" stroke="white" strokeWidth="1.6"/>
                                        <path d="M3 17c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
                                    </svg>
                                </div>
                                <span className="footer-brand-name">UserPulse</span>
                            </div>
                            <p className="footer-tagline">
                                Plataforma premium para la gestión de perfiles de usuario. Construida para velocidad y eficiencia.
                            </p>
                            <div className="footer-badge">
                                <span className="footer-badge-dot"></span>
                                API en tiempo real
                            </div>
                        </Col>

                        {/* Nav column */}
                        <Col xs={6} md={4}>
                            <h6 className="footer-col-title">Navegación</h6>
                            <nav className="footer-nav" aria-label="Navegación del footer">
                                <NavLink to="/" end className={({ isActive }) => `footer-link ${isActive ? 'footer-link--active' : ''}`}>
                                    Home
                                </NavLink>
                                <NavLink to="/users" className={({ isActive }) => `footer-link ${isActive ? 'footer-link--active' : ''}`}>
                                    Usuarios
                                </NavLink>
                                <NavLink to="/about" className={({ isActive }) => `footer-link ${isActive ? 'footer-link--active' : ''}`}>
                                    Acerca del proyecto
                                </NavLink>
                            </nav>
                        </Col>

                        {/* Stack column */}
                        <Col xs={6} md={4}>
                            <h6 className="footer-col-title">Stack</h6>
                            <div className="footer-stack-list">
                                <span className="footer-stack-item">React 18</span>
                                <span className="footer-stack-item">React Router</span>
                                <span className="footer-stack-item">Bootstrap 5</span>
                                <span className="footer-stack-item">Axios</span>
                                <span className="footer-stack-item">Vite</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* ── Franja de copyright ── */}
            <div className="footer-bottom">
                <Container>
                    <div className="footer-bottom-inner">
                        <span className="footer-copy">
                            &copy; {year} UserPulse. Todos los derechos reservados.
                        </span>
                        <span className="footer-made">
                            Hecho con
                            <svg className="footer-heart" viewBox="0 0 20 20" fill="currentColor" aria-label="amor">
                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                            </svg>
                            by Ivan Castillo
                        </span>
                    </div>
                </Container>
            </div>
        </footer>
    );
}

export default Footer;