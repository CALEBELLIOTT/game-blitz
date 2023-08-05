import { Col, ProgressBar, Row } from "react-bootstrap"
import './AccountSummary.css'
const AccountSummary = () => {
    return (
        <Row>
            <Col className="bg-light rounded p-4">
                <Row>
                    <Col md={6}>
                        <h4>Your Personal Value</h4>
                        <h4 className="">$287,779<span className="text-primary cents-place">.92</span></h4>
                    </Col>
                    <Col md={6}>
                        <h4 className="">
                            YTD Change
                            <i className="ms-2 bi bi-arrow-down-up"></i>
                        </h4>
                        <h4 className="text-success">6%</h4>
                    </Col>
                    <Col md={12} className="mt-4">
                        <h4>Your Allocations</h4>
                        <ProgressBar>
                            <ProgressBar variant="primary" now={35} key={1} />
                            <ProgressBar variant="secondary" now={20} key={2} />
                            <ProgressBar variant="danger" now={10} key={3} />
                            <ProgressBar variant="success" now={35} key={3} />
                        </ProgressBar>
                    </Col>
                    <Col sm={3} className="mt-5">
                        <div className="d-flex align-items-center">
                            <div className="small-dot bg-primary" />
                            <p className="mb-0 ms-2">Stocks</p>
                        </div>
                    </Col>
                    <Col sm={3} className="mt-5">
                        <div className="d-flex align-items-center">
                            <div className="small-dot bg-secondary" />
                            <p className="mb-0 ms-2">Real-Estate</p>
                        </div>
                    </Col>
                    <Col sm={3} className="mt-5">
                        <div className="d-flex align-items-center">
                            <div className="small-dot bg-danger" />
                            <p className="mb-0 ms-2">Cash</p>
                        </div>
                    </Col>
                    <Col sm={3} className="mt-5">
                        <div className="d-flex align-items-center">
                            <div className="small-dot bg-success" />
                            <p className="mb-0 ms-2">Other</p>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default AccountSummary