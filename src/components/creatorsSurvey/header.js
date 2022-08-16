import React from 'react'
import { Button, Col, Row } from 'reactstrap'

const Header = ({ modalVisible, modalVisibilityAction, setCreatorsSurveyObject, setEditModal }) => {
    const modalToggleFunction = () => {
        setEditModal(false)
        setCreatorsSurveyObject({
            question: "",
            answer_1: "",
            answer_2: "",
            answer_3: "",
            answer_4: ""
        })
        modalVisibilityAction(!modalVisible)
    }
    return (
        <Row className='my-3'>
            <Col lg='12' className='d-flex justify-content-between align-items-center'>
                <div>
                    <h3 className='text-black fw-bolder'>Creators Survey</h3>
                </div>
                <div>
                    <Button.Ripple color='primary' onClick={modalToggleFunction}>Add New</Button.Ripple>
                </div>
            </Col>
        </Row >
    )
}

export default Header

