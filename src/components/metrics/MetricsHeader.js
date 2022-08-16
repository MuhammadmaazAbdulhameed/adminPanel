import React from 'react'
import { Col, Row } from 'reactstrap'

const MetricsHeader = () => {
    return (
        <Row className='my-3'>
            <Col lg='12' className='d-flex justify-content-between align-items-center'>
                <h3 className='text-black fw-bolder'>Metrics</h3>
            </Col>
        </Row>
    )
}

export default MetricsHeader