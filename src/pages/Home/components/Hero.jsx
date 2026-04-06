import React from 'react';
import { Container, Button, Badge } from 'react-bootstrap';
import './Hero.css';

const Hero = () => {
  return (
    <div className="home-hero">
      <div className="hero-background"></div>
      <Container className="hero-content text-center">
        <Badge pill className="spa-badge mb-4 animated-fadeInUp delay-1 bg-dark ">
          <span className="pulse-dot"></span> SPA Interactiva
        </Badge>
        
        <h1 className="hero-headline animated-fadeInUp delay-2">
          Gestión inteligente con <span className="text-accent">UserPulse</span>
        </h1>
        
        <p className="hero-subtitle mb-5 animated-fadeInUp delay-3">
          Plataforma premium para la administración de perfiles de usuario. 
          Diseñada para velocidad, eficiencia y una experiencia fluida.
        </p>
        
        <div className="hero-actions animated-fadeInUp delay-4">
          <Button variant="primary" className="btn-glow btn-lg px-5 mx-2 rounded-pill">
            Empezar Ahora
          </Button>
          <Button variant="outline-secondary" className="btn-lg px-5 mx-2 rounded-pill btn-glass btn-explorar">
            Explorar
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
