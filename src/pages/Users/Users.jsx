import "./Users.css";

import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";

import UserCard from "../../components/common/UserCard/UserCard";
import axios from "axios";

function Users() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading ] = useState(true);
    
    useEffect(() => {
        const apiUrl = "https://randomuser.me/api/?seed=userpulse&results=100";

        const fetchUsers = async () => {
            try{
                const response = await axios.get(apiUrl);
                setUsers(response.data.results);
                setLoading(false);
            }catch (error) {
                console.error("Error:", error);
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);
    

    if (loading) {
        return (
            <Container className="d-flex justify-content-center align-items-center" style={{ height: "60vh" }}>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Container>
        );
    }
    
    return(
        <Container>
            <Row className="g-4">
                {users.map((user) => (
                    <Col key={user.login.uuid} xs={12} sm={6} md={4} lg={3}>
                        <UserCard user={user} />
                    </Col> 
                ))}
            </Row>
        </Container>
    );
}

export default Users;