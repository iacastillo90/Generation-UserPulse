import "./UserDetail.css";

import { Alert, Button, Container, Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";

// Decisión de diseño: eliminados todos los estilos inline. Layout de dos columnas
// (avatar hero izq / datos der) que colapsa a columna centrada en mobile.
// Los estados loading/error tienen sus propias clases premium en lugar de style={{height}}.

function UserDetail () {
    const { id } = useParams();
    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        const apiUrl = `https://randomuser.me/api/?seed=userpulse&results=100`;
        const fetchUser = async () => {
            try {
                setLoading(true);
                const response = await axios.get(apiUrl);
                const foundUser = response.data.results.find(u => u.login.uuid === id);
                if (foundUser) {
                    setUser(foundUser);
                } else {
                    setError("Usuario no encontrado");
                }
            } catch(err) {
                setError("Hubo un error al conectar con la base de datos", err);
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, [id]);

    /* ── Estado: cargando ── */
    if (loading) {
        return (
            <div className="ud-state-wrapper">
                <div className="ud-spinner-ring"></div>
                <p className="ud-state-label">Cargando perfil...</p>
            </div>
        );
    }

    /* ── Estado: error ── */
    if (error) {
        return (
            <div className="ud-state-wrapper">
                <div className="ud-error-icon" aria-hidden="true">!</div>
                <p className="ud-state-label ud-error-text">{error}</p>
                <Link to="/users">
                    <Button variant="outline-primary" className="ud-back-btn rounded-pill px-4">
                        Volver a la lista
                    </Button>
                </Link>
            </div>
        );
    }

    const fullName = `${user.name.first} ${user.name.last}`;

    return (
        <div className="ud-page animated-fadeInUp">
            <Container className="ud-container">

                {/* Breadcrumb / back link */}
                <Link to="/users" className="ud-back-link">
                    <svg className="ud-back-icon" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Volver a Usuarios
                </Link>

                {/* ── CARD PRINCIPAL ── */}
                <div className="ud-card">

                    {/* Columna izquierda — avatar hero */}
                    <div className="ud-sidebar">
                        <div className="ud-avatar-wrapper">
                            <img
                                src={user.picture.large}
                                alt={fullName}
                                className="ud-avatar-img"
                            />
                        </div>
                        <h1 className="ud-name">{fullName}</h1>
                        <p className="ud-username">@{user.login.username}</p>
                        <span className="ud-status-badge">
                            <span className="ud-status-dot"></span>
                            Activo
                        </span>
                    </div>

                    {/* Separador vertical */}
                    <div className="ud-divider-v" />

                    {/* Columna derecha — datos */}
                    <div className="ud-data">
                        <h2 className="ud-section-title">Información del perfil</h2>
                        <p className="ud-tracking-id">ID: <code>{id}</code></p>

                        <div className="ud-fields">
                            <div className="ud-field">
                                <span className="ud-field-icon">
                                    <svg viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                </span>
                                <div>
                                    <span className="ud-field-label">Email</span>
                                    <span className="ud-field-value mono">{user.email}</span>
                                </div>
                            </div>

                            <div className="ud-field">
                                <span className="ud-field-icon">
                                    <svg viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <div>
                                    <span className="ud-field-label">Edad</span>
                                    <span className="ud-field-value">{user.dob.age} años</span>
                                </div>
                            </div>

                            <div className="ud-field">
                                <span className="ud-field-icon">
                                    <svg viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <div>
                                    <span className="ud-field-label">Ubicación</span>
                                    <span className="ud-field-value">{user.location.city}, {user.location.country}</span>
                                </div>
                            </div>

                            <div className="ud-field">
                                <span className="ud-field-icon">
                                    <svg viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                </span>
                                <div>
                                    <span className="ud-field-label">Teléfono</span>
                                    <span className="ud-field-value mono">{user.phone}</span>
                                </div>
                            </div>

                            <div className="ud-field">
                                <span className="ud-field-icon">
                                    <svg viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <div>
                                    <span className="ud-field-label">Registrado desde</span>
                                    <span className="ud-field-value mono">
                                        {new Date(user.registered.date).toLocaleDateString("es-ES", {
                                            year: "numeric", month: "long", day: "numeric"
                                        })}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="ud-actions">
                            <Link to="/users">
                                <Button variant="outline-secondary" className="ud-btn-secondary rounded-pill px-4">
                                    Volver
                                </Button>
                            </Link>
                            <Button variant="primary" className="ud-btn-primary rounded-pill px-4">
                                Editar perfil
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default UserDetail;