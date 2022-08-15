import React from 'react'
import { Button, Col, Row } from 'reactstrap'

const CampaignsQuestionHeader = () => {
    return (
        <Row className='my-3'>
            <Col lg='12' className='d-flex justify-content-between align-items-center'>
                <div>
                    <h3 className='text-black fw-bolder'>Campaign Questions</h3>
                </div>
                <div>
                    <Button.Ripple color='primary'>Add New</Button.Ripple>
                </div>
            </Col>
        </Row>
    )
}

export default CampaignsQuestionHeader