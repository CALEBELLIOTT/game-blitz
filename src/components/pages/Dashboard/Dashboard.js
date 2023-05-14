import React from "react"
import { Col, Container, Row } from "react-bootstrap";
import './Dashboard.css'

const Dashboard = ({ ...props }) => {
  return (
    <Container>
      <div className="color-div" />
      <Row>
        <Col md={6} className="text-light ml-5">
          <div className="mt-3">
            <h3>Dashboard</h3>
            <p>Visualize Your Finances</p>
          </div>
        </Col>
        <Col md={6}>
          <div className="mt-3 text-light">
            Your Portfolio Is Up 10% All Time
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard