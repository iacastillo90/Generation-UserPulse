import "./UserDetail.css";

import { Alert, Button, Card, Container, Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";

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

    if (loading) {
        return(
            <Container className="d-flex flex-column justify-content-center align-items-center" style={{ height: "60vh" }}>
                <Spinner animation="border" variant="success" />
                <p className="mt-2">Cargando...</p>
            </Container>
        );
    }

    if (error) {
        return(
            <Container className="d-flex flex-column justify-content-center align-items-center" style={{ height: "60vh" }}>
                <Alert variant="danger">{error}</Alert>
                <Link to="/users">
                    <Button variant="outline-primary">Volver a la lista</Button>
                </Link>
            </Container>
        )
    }

    return(
        <Container className="mt-4">
            <p className="text-muted text-center">ID de seguimiento: {id}</p>
            
            <Card style={{ maxWidth: '600px', margin: 'auto', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <Card.Body className="text-center">
                    <Card.Img 
                        variant="top" 
                        src={user.picture.large} 
                        style={{ borderRadius: '50%', width: '150px', height: '150px', objectFit: 'cover', marginBottom: '20px', border: '4px solid #e8eded' }} 
                    />
                    <Card.Title className="fs-2 fw-bold">{user.name.first} {user.name.last}</Card.Title>
                    <Card.Text className="text-muted">@{user.login.username}</Card.Text>
                    
                    <hr />
                    
                    <div className="text-start ms-4">
                        <Card.Text>📧 <strong>Email:</strong> {user.email}</Card.Text>
                        <Card.Text>🎂 <strong>Edad:</strong> {user.dob.age} años</Card.Text>
                        <Card.Text>📍 <strong>Ubicación:</strong> {user.location.city}, {user.location.country}</Card.Text>
                        <Card.Text>📱 <strong>Teléfono:</strong> {user.phone}</Card.Text>
                        <Card.Text>📅 <strong>Registrado desde:</strong> {new Date(user.registered.date).toLocaleDateString()}</Card.Text>
                    </div>

                    <Link to="/users">
                        <Button variant="primary" className="mt-4 rounded-pill px-4">Volver a Usuarios</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default UserDetail;