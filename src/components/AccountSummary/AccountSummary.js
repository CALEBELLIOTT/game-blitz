import { Col, Row } from "react-bootstrap"

const AccountSummary = () => {
    return (
        <Row>
            <Col className="bg-light rounded">
                <Row>
                    <Col md={6}>
                        <h4>Total Net Worth</h4>
                        <h4>$287,779</h4>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default AccountSummary