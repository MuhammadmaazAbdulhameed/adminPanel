import React from 'react'
import { Button, Input, Modal, ModalBody, ModalFooter, ModalHeader, Row, Col } from 'reactstrap'

const CreatorsSurveyModal = ({
  modalVisible, modalVisibilityAction,
  question, setQuestion,
  answer_1, setAnswer_1,
  answer_2, setAnswer_2,
  answer_3, setAnswer_3,
  answer_4, setAnswer_4,
  addUpdateFunction
}) => {
  return (
    <Modal className='modal-dialog-centered px-5 ' isOpen={modalVisible} toggle={() => modalVisibilityAction(!modalVisible)}>
      <ModalHeader className='bg-transparent py-0 ' toggle={() => modalVisibilityAction(!modalVisible)}></ModalHeader>
      <ModalBody className='px-sm-2 mx-50 pt-0'>
        <h3 className='text-center mb-1 text-black fw-bolder'>Add New Survey Creator</h3>
        <Row tag='form' className='gy-1 gx-2 mt-75'>
          <Col xs={12}>
            <Input value={question} onChange={(e) => setQuestion(e.target.value)} placeholder='Question' />
          </Col>
          <Col xs={12}>
            <Input value={answer_1} onChange={(e) => setAnswer_1(e.target.value)} placeholder='Answer' />
          </Col>
          <Col xs={12}>
            <Input value={answer_2} onChange={(e) => setAnswer_2(e.target.value)} placeholder='Answer' />
          </Col>
          <Col xs={12}>
            <Input value={answer_3} onChange={(e) => setAnswer_3(e.target.value)} placeholder='Answer' />
          </Col>
          <Col xs={12}>
            <Input value={answer_4} onChange={(e) => setAnswer_4(e.target.value)} placeholder='Answer' />
          </Col>
        </Row>
      </ModalBody>
      <ModalFooter className='pb-2'>
        <Button.Ripple color='primary' className='w-100' onClick={addUpdateFunction}>
          Submit
        </Button.Ripple>
      </ModalFooter>
    </Modal>
  )
}

export default CreatorsSurveyModal