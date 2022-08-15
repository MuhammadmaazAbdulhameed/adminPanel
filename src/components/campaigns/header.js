import React from 'react'
import { Button, Col, Row } from 'reactstrap'
import Select from 'react-select'
import { selectThemeColors } from '@utils'

const Header = () => {
    return (
        <Row className='my-3'>
            <Col lg='12' className='d-flex justify-content-between align-items-center'>
                <div className='w-50'>
                    <h3 className='text-black fw-bolder'>Campaigns</h3>
                </div>
                <div className='d-flex gap-1 w-50 justify-content-end'>
                    <Select
                        theme={selectThemeColors}
                        isClearable={false}
                        className='react-select w-50'
                        classNamePrefix='select'
                        options={[]}
                    />
                    <Button.Ripple color='primary'>Add New</Button.Ripple>
                </div>

            </Col>
        </Row>
    )
}

export default Header