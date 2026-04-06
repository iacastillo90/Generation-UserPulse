import { Container } from "react-bootstrap";
import "./Banner.css";

function Banner () {
    return(
        <div className="promo-banner py-3 text-center">
            <Container>
                <span className="badge bg-white text-accent rounded-pill px-3 py-1 me-2 shadow-sm banner-badge">Nuevo</span>
                <span className="banner-text">
                    Explora las nuevas herramientas de automatización de perfiles en UserPulse. 
                    <a href="#features" className="banner-link ms-2 fw-bold">Ver novedades &rarr;</a>
                </span>
            </Container>
        </div>
    );
}

export default Banner;