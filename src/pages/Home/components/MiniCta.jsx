import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './MiniCta.css';

const MiniCta = () => {
    return (
        <div className="mini-cta-wrapper py-5">
            <Container>
                <div className="mini-cta-box glass-card d-flex flex-column flex-md-row align-items-center justify-content-between p-4 px-md-5">
                    <div className="cta-content text-center text-md-start mb-3 mb-md-0">
                        <h4 className="m-0 fw-bold">Optimiza tu gestión de usuarios hoy</h4>
                        <p className="text-muted m-0 mt-1">Conéctate al ecosistema de UserPulse en segundos.</p>
                    </div>
                    <button className="btn btn-primary rounded-pill px-4 py-2 cta-btn fw-bold shadow-sm">
                        Únete Ahora
                    </button>
                </div>
            </Container>
        </div>
    );
};

export default MiniCta;
