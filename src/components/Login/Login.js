import React, { useEffect, useState } from "react";
import { Alert, Button, Col, Form, Modal, Row, Spinner } from "react-bootstrap";


export const Login = ({
  loginError,
  login,
  user,
  inlineLoading
}) => {
  const [modelOpen, setModalOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  useEffect(() => {
    if (user.uid) {
      setModalOpen(false)
    }
  }, [user])

  useEffect(() => {
    setPassword('')
    setEmail('')
  }, [user, modelOpen])

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
            {loginError && loginError.message &&
              <Alert variant="danger">Error: {loginError.message}</Alert>
            }
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <div className="d-flex justify-content-center">
              <Button variant="primary" disabled={inlineLoading} onClick={() => login({ email, password })}>
                {inlineLoading && <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />}
                <span> Login</span>
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