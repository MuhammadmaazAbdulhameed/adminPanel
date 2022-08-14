import React from 'react'
import { Button, Col, Row } from 'reactstrap'

const Header = () => {
    return (
        <Row className='my-3'>
            <Col lg='12' className='d-flex justify-content-between align-items-center'>
                <h3 className='text-black fw-bolder'>Influencer Content</h3>
            </Col>
        </Row>
    )
}

export default Header