import React from "react"
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap"
import './Home.css'
import Login from "../../components/Login"

const Home = ({ isGuest, setIsGuest }) => {
  console.log(isGuest, 'is guest CE:TEST');

  return (
    <Container fluid>
      <Row>
        <div className="circle-shape shape-1 bg-secondary" />
        <div className="circle-shape shape-2 bg-secondary" />
        <Col className="d-flex flex-column justify-content-center align-items-center h100vh bg-primary">
          <h1 className="scripto text-white main-title">Game Blitz!</h1>
          <div className="p-2 px-4 rounded bg-white text-center sign-in-box mt-2">
            {!isGuest ?
              <>
                <Login />
                <p className="m-0 caption text-muted mt-3">or</p>
                <p
                  className="text-primary m-0 selectable"
                  onClick={() => setIsGuest(true)}>Continue As Guest</p>
              </> :
              <div>
                <Form.Control type="text" placeholder="Game Room ID" />
                <Button className="mt-2">
                  Submit
                </Button>
                <p className="m-0 caption text-muted mt-2">or</p>
                <p
                  className="text-primary m-0 selectable"
                  onClick={() => setIsGuest(true)}>Open a new Room</p>
              </div>}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Home