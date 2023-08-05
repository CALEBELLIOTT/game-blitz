import { Col, ProgressBar, Row } from "react-bootstrap"
import './AccountSummary.css'
const AccountSummary = () => {
    return (
        <Row>
            <Col className="bg-light rounded p-4">
                <Row>
                    <Col md={6}>
                        <h4>Your Personal Value</h4>
                        <h4 className="">$287,779<span className="text-primary font-smaller">.92</span></h4>
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
                            <div className="ms-2">
                                <p className="mb-0  text-muted">Stocks</p>
                                <div className="d-flex">
                                    <h4 className="mb-0">35%<span className="font-smaller mb-0 text-muted">($120,000)</span></h4>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={3} className="mt-5">
                        <div className="d-flex align-items-center">
                            <div className="small-dot bg-secondary" />
                            <div className="ms-2">
                                <p className="mb-0  text-muted">Real-Estate</p>
                                <div className="d-flex">
                                    <h4 className="mb-0">20%<span className="font-smaller mb-0 text-muted">($72,000)</span></h4>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={3} className="mt-5">
                        <div className="d-flex align-items-center">
                            <div className="small-dot bg-danger" />
                            <div className="ms-2">
                                <p className="mb-0  text-muted">Cash</p>
                                <div className="d-flex">
                                    <h4 className="mb-0">10%<span className="font-smaller mb-0 text-muted">($15,000)</span></h4>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={3} className="mt-5">
                        <div className="d-flex align-items-center">
                            <div className="small-dot bg-success" />
                            <div className="ms-2">
                                <p className="mb-0  text-muted">Other</p>
                                <div className="d-flex">
                                    <h4 className="mb-0">35%<span className="font-smaller mb-0 text-muted">($120,000)</span></h4>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default AccountSummary