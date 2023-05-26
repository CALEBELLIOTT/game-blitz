import React from "react"
import { Col, Container, Row } from "react-bootstrap"

const Stocks = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={6}>
          <div className="bg-light rounded p-2 mt-3">
            <h3>
              Your Assets
            </h3>

          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Stocks