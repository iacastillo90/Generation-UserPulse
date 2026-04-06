import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
    return (
        <Container className="not-found-page text-center d-flex flex-column justify-content-center align-items-center animated-fadeInUp">
            <div className="error-code mb-2">404</div>
            <h2 className="error-title mb-4">Página no encontrada</h2>
            
            <p className="error-description text-muted mb-5">
                Parece que te has perdido en el sistema. La página que buscas no existe, 
                ha sido movida o no tienes los permisos necesarios.
            </p>
            
            <Link to="/">
                <Button variant="primary" className="btn-glow rounded-pill px-5 py-2">
                    Regresar al Inicio
                </Button>
            </Link>
        </Container>
    );
}

export default NotFound;