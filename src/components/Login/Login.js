import React, { useState } from "react";
import { Button, Col, Form, InputGroup, Modal, Row } from "react-bootstrap";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";


export const Login = () => {
  const [modelOpen, setModalOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)


  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch(err => { console.log(err.message) })
  }

  const renderModalBody = () => {
    return (
      <>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="loginEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(evt) => setEmail(evt.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="loginPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type={showPassword ? 'default' : 'password'} placeholder="Password" value={password} onChange={(evt) => setPassword(evt.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Show Password" checked={showPassword} onChange={() => setShowPassword(!showPassword)} />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <div className="d-flex justify-content-center">
              <Button variant="primary" onClick={login}>
                Login
              </Button>
            </div>
          </Col>
          <Col md={6}>
            <div className="d-flex justify-content-center">
              <Button variant="secondary" onClick={() => setModalOpen(false)}>
                Cancel
              </Button>
            </div>
          </Col>
        </Row>
      </>
    )
  }


  return (
    <>
      <Row>
        <Col>
          <button className="btn btn-primary" onClick={() => setModalOpen(true)}>
            Login
          </button>
          <Modal show={modelOpen} onHide={() => setModalOpen(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Sign In</Modal.Title>
            </Modal.Header>
            <Modal.Body>{renderModalBody()}</Modal.Body>
          </Modal>
        </Col>
      </Row>
    </>

  )
}