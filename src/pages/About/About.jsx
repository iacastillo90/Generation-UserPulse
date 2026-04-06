import "./About.css";
import { Container, Row, Col } from "react-bootstrap";

// Decisión de diseño: glassmorphism card centrada + badges de tech con SVG inline
// para no depender de icon libraries externas. Layout en dos zonas: developer bio (izq)
// y stack tecnológico (der) que colapsa a columna única en mobile.

const techStack = [
    {
        name: "React 18",
        color: "#61dafb",
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <circle cx="12" cy="11.999" r="2.147" />
                <path d="M12 6.694c3.634-4.175 7.461-5.817 9.24-4.775 1.779 1.042 1.635 5.128-.327 9.975-.18.447-.367.891-.557 1.328.19.437.377.88.557 1.328 1.963 4.847 2.106 8.933.327 9.975-1.779 1.042-5.606-.6-9.24-4.775-3.634 4.175-7.461 5.817-9.24 4.775-1.779-1.042-1.635-5.128.327-9.975.18-.447.367-.891.557-1.328-.19-.437-.377-.88-.557-1.328C1.125 7.117.982 3.03 2.76 1.988 4.54.946 8.366 2.52 12 6.694zm0 1.531c-1.065-1.133-2.144-2.08-3.204-2.818C6.513 3.918 4.479 3.296 3.56 3.832c-.919.538-.917 2.648.072 5.471.147.42.308.843.48 1.265A29.783 29.783 0 0112 9.27a29.858 29.858 0 017.887 1.297c.172-.421.334-.844.481-1.264.989-2.823.991-4.933.073-5.471-.919-.538-2.953.083-5.237 1.574C14.143 6.144 13.065 7.092 12 8.225zM8.048 11.998c.394.756.839 1.509 1.333 2.252A42.752 42.752 0 0012 14.581a42.47 42.47 0 002.619-.331 42.614 42.614 0 001.333-2.252 42.614 42.614 0 00-1.333-2.252A42.47 42.47 0 0012 9.415a42.752 42.752 0 00-2.619.331 42.614 42.614 0 00-1.333 2.252zm-1.5 3.378c-.172.42-.333.843-.48 1.264-.989 2.822-.991 4.932-.073 5.47.919.538 2.953-.083 5.237-1.574 1.06-.738 2.14-1.686 3.204-2.818a32.76 32.76 0 01-7.888-2.342zM12 17.724c-1.065 1.132-2.144 2.08-3.204 2.818-2.284 1.49-4.318 2.111-5.237 1.574-.919-.538-.917-2.648.072-5.471.147-.42.308-.843.48-1.264A29.783 29.783 0 0012 16.729c2.716.254 5.361-.01 7.888-1 .172.421.334.844.48 1.264.99 2.823.992 4.933.073 5.471-.919.538-2.953-.083-5.237-1.574A29.858 29.858 0 0112 17.724zm7.952-5.726a29.858 29.858 0 00-.48-1.264A29.783 29.783 0 0012 12a29.783 29.783 0 00-7.472 1.734 29.858 29.858 0 00-.48 1.264c-.989 2.822-.991 4.932-.073 5.47.919.538 2.953-.083 5.237-1.574A29.858 29.858 0 0112 15.274a29.783 29.783 0 002.788 3.62c2.284 1.49 4.318 2.111 5.237 1.574.919-.538.917-2.648-.073-5.47z" />
            </svg>
        ),
    },
    {
        name: "React Router",
        color: "#CA4245",
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.118 5.466l-5.758 5.76a2.745 2.745 0 000 3.886l5.758 5.76c.516.518 1.372.518 1.888 0l5.758-5.76a2.745 2.745 0 000-3.886l-5.758-5.76a1.336 1.336 0 00-1.888 0zm.944 1.888l5.25 5.25a1.34 1.34 0 010 1.892l-5.25 5.25a1.34 1.34 0 01-1.892 0l-5.25-5.25a1.34 1.34 0 010-1.892l5.25-5.25a1.34 1.34 0 011.892 0z" />
            </svg>
        ),
    },
    {
        name: "Bootstrap 5",
        color: "#7952B3",
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.375 7.5C6.375 6.257 7.382 5.25 8.625 5.25h6.75c1.243 0 2.25 1.007 2.25 2.25v1.875c0 1.012-.567 1.89-1.399 2.336.832.445 1.399 1.324 1.399 2.336V15.75c0 1.243-1.007 2.25-2.25 2.25h-6.75C7.382 18 6.375 16.993 6.375 15.75V7.5zm3 6v2.25h3a.75.75 0 100-1.5h-1.5a.75.75 0 100-1.5H9.375v.75zm0-3.75v2.25h2.25a.75.75 0 000-1.5H9.375V9.75z" />
            </svg>
        ),
    },
    {
        name: "Axios",
        color: "#5A29E4",
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M14.983 3l.943 2.927A12.504 12.504 0 0120.917 12c0 2.426-.69 4.69-1.887 6.604L11.997 21 11.019 18l4.93-2.145A10.174 10.174 0 0017.5 12c0-1.955-.553-3.78-1.517-5.332L14.983 3zM9.017 3l1.001 3h-.001L6.017 8.668A10.18 10.18 0 004.5 12c0 1.955.553 3.78 1.517 5.332l1.001 3.668L2.97 18.604A12.504 12.504 0 011.083 12c0-2.426.69-4.69 1.887-6.604L11.003 3l2.013 6h-6z" />
            </svg>
        ),
    },
    {
        name: "Vite",
        color: "#646CFF",
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M21.303 3.878l-9 16.5a.75.75 0 01-1.312-.08l-4.5-9.75a.75.75 0 01.683-1.048H9.75V9l-7.3 2.578a.75.75 0 01-.963-.89l3-11.25A.75.75 0 015.25.75h13.5a.75.75 0 01.647 1.127L17.063 5.25H19.5a.75.75 0 01.647 1.127L21.303 3.878z" />
            </svg>
        ),
    },
    {
        name: "CSS Modules",
        color: "#1D9E75",
        svg: (
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M3.673 2.974l1.586 17.893L12 22.559l6.741-1.692 1.589-17.893H3.673zM18.1 7.816H8.397l.247 2.76H17.853l-.742 8.285L12 20.264l-5.111-1.403-.348-3.896h2.738l.177 1.98 2.544.687 2.544-.687.266-2.974H6.694l-.697-7.783H18.35L18.1 7.816z" />
            </svg>
        ),
    },
];

function About() {
    return (
        <div className="about-page animated-fadeInUp">
            <Container className="about-container">

                {/* === HEADER DE SECCIÓN === */}
                <div className="about-section-header text-center mb-5">
                    <span className="about-eyebrow">El Proyecto</span>
                    <h1 className="about-title">Construido para aprender. <br />Diseñado para impresionar.</h1>
                    <p className="about-lead">
                        UserPulse es una SPA moderna que demuestra arquitectura de componentes,
                        consumo de APIs REST y gestión de rutas con React.
                    </p>
                </div>

                <Row className="g-4 justify-content-center">

                    {/* === CARD GLASSMORPHISM — DEVELOPER === */}
                    <Col md={10} lg={5}>
                        <div className="glass-card dev-card h-100 animated-fadeInUp delay-2">
                            <div className="dev-avatar-wrapper">
                                <div className="dev-avatar">
                                    <span>MC</span>
                                </div>
                                <div className="dev-status-dot" title="Available"></div>
                            </div>
                            <h3 className="dev-name mt-3 mb-1">Desarrollador</h3>
                            <p className="dev-role">
                                <code className="role-code">{"<"} Frontend Engineer {"/>"}</code>
                            </p>
                            <p className="dev-bio">
                                Aplicación de gestión de perfiles construida como demostración de
                                arquitectura SPA con React, consumo de APIs y diseño visual premium
                                orientado a producto SaaS.
                            </p>

                            <div className="dev-stats">
                                <div className="stat-item">
                                    <span className="stat-value">100</span>
                                    <span className="stat-label">Usuarios API</span>
                                </div>
                                <div className="stat-divider"></div>
                                <div className="stat-item">
                                    <span className="stat-value">20</span>
                                    <span className="stat-label">Por página</span>
                                </div>
                                <div className="stat-divider"></div>
                                <div className="stat-item">
                                    <span className="stat-value">SPA</span>
                                    <span className="stat-label">Arquitectura</span>
                                </div>
                            </div>
                        </div>
                    </Col>

                    {/* === STACK TECNOLÓGICO === */}
                    <Col md={10} lg={5}>
                        <div className="glass-card tech-card h-100 animated-fadeInUp delay-3">
                            <h4 className="tech-card-title mb-4">Stack Tecnológico</h4>
                            <div className="tech-grid">
                                {techStack.map((tech) => (
                                    <div key={tech.name} className="tech-badge-item">
                                        <div className="tech-icon" style={{ color: tech.color }}>
                                            {tech.svg}
                                        </div>
                                        <span className="tech-name">{tech.name}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="about-info-row mt-4">
                                <div className="info-chip">
                                    <svg className="info-icon" viewBox="0 0 16 16" fill="currentColor">
                                        <path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm.75 11.25h-1.5v-4.5h1.5v4.5zm0-6h-1.5v-1.5h1.5v1.5z" />
                                    </svg>
                                    Datos en tiempo real desde la API randomuser.me
                                </div>
                                <div className="info-chip">
                                    <svg className="info-icon" viewBox="0 0 16 16" fill="currentColor">
                                        <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm-.75 4.5h1.5v5h-1.5v-5zm0 6.5h1.5v1.5h-1.5V11z" />
                                    </svg>
                                    Generación Chile — Ivan Castillo
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;
