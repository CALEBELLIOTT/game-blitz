import React from "react"
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap"
import './NewRoom.css'
import Login from "../../components/Login"

const Home = ({ isGuest, setIsGuest }) => {
    console.log(isGuest, 'is guest CE:TEST');

    return (
        <Container fluid className="bg-primary min-100-vh">
            <Row>
                <Col xs={12}>
                    <h1 className="scripto text-white main-title text-center mt-2">Game Blitz!</h1>
                </Col>
                <Col xs={12} className="d-flex flex-column align-items-center">
                    <div className="bg-white rounded px-4 py-2 border border-secondary game-id-container">
                        <h4 className="text-muted text-center">Your Game Room ID</h4>
                        <h4 className="text-center">239958837</h4>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Home