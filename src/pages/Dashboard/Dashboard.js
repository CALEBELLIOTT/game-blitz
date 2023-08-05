import React from "react"
import { Col, Container, Row } from "react-bootstrap";
import AccountSummary from "../../components/AccountSummary";
import './Dashboard.css'

const Dashboard = ({ ...props }) => {
  return (
    <Container fluid className="container-main">
      <div className="color-div" />
      <Row >
        <Col md={12} className="text-light ml-5">
          <div className="mt-3">
            <h4 className="mb-0">Dashboard</h4>
            <p>Visualize Your Finances</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <Row>
            <Col md={12}>
              <div className="">
                <AccountSummary />
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={4}>

        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard