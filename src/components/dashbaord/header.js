import React from 'react'
import { Col, Row } from 'reactstrap'

const Header = () => {
    return (
        <Row className='my-3'>
            <Col lg='12' >
                <h3 className='text-black fw-bolder'>Dashbaord</h3>
            </Col>
        </Row>
    )
}

export default Header