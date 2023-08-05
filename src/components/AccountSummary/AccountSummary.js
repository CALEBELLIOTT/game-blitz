import { Col, ProgressBar, Row } from "react-bootstrap"
import './AccountSummary.css'
import React from 'react'
import { convertCurrency } from "../../util/convertCurrency"

const categories = [
    {
        name: 'Stocks',
        percentage: 35,
        total: 120000,
        color: 'primary'
    },
    {
        name: 'Real-Estate',
        percentage: 35,
        total: 120000,
        color: 'secondary'
    },
    {
        name: 'Cash',
        percentage: 35,
        total: 120000,
        color: 'danger'
    },
    {
        name: 'Other',
        percentage: 35,
        total: 120000,
        color: 'success'
    },
]

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
                    {categories.map(({ name, percentage, total, color }) => (
                        <Col sm={3} className="mt-5" key={name}>
                            <div className="d-flex align-items-center">
                                <div className={`small-dot bg-${color}`} />
                                <div className="ms-2">
                                    <p className="mb-0  text-muted">{name}</p>
                                    <div className="d-flex">
                                        <h4 className="mb-0">{percentage}%<span className="font-smaller mb-0 text-muted">{`(${convertCurrency(total, false)})`}</span></h4>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Col>
        </Row>
    )
}

export default AccountSummary