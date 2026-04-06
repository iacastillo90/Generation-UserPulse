import { Button, Container } from "react-bootstrap";

import { Link } from "react-router-dom";

function NotFound() {
    return (
        <Container className="text-center mt-5">
            <h1 className="display-1">404</h1>
            <p className="lead">Página no encontrada</p>
            
            <Link to="/">
                <Button variant="primary">Volver al inicio</Button>
            </Link>
        </Container>
    );
}

export default NotFound;